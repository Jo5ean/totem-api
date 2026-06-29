# totem-api — UCASAL Cronogramas de Exámenes

API REST construida con **Next.js + Prisma + MySQL** para gestionar el sistema TOTEM de cronogramas de exámenes de la Universidad Católica de Salta. Consume datos desde Google Sheets (via Google Apps Script), los normaliza y los persiste en MySQL. Incluye sincronización automática con cron jobs, asignación de aulas y consulta de inscriptos a la API de UCASAL.

---

## Stack

| Tecnología | Uso |
|---|---|
| Next.js 15 (Pages Router) | Framework + API Routes |
| Prisma 6 | ORM para MySQL |
| MySQL 8 | Base de datos |
| `node-cron` | Cron jobs automáticos |
| `axios` | Clientes HTTP (Google Sheets, UCASAL API) |
| Docker + Docker Compose | Contenedorización |

---

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```dotenv
DATABASE_URL=mysql://totem:totem_password@localhost:3306/totem_db

# URL del Google Apps Script que expone los datos del TOTEM como JSON
GOOGLE_SHEET_API_URL=https://script.google.com/macros/s/.../exec

# Timeouts (opcionales)
GOOGLE_SHEET_TIMEOUT=60000      # ms, default 60000
UCASAL_API_TIMEOUT=10000        # ms, default 10000

# Token para endpoints de administración
ADMIN_TOKEN=tu_token_secreto

# Habilitar reset de BD (setup inicial)
ALLOW_DB_RESET=true
```

---

## Desarrollo local

### Con Docker (recomendado)

```bash
docker compose up --build
```

Levanta dos servicios:
- `db`: MySQL 8 en puerto `3306` (interno)
- `api`: Next.js en puerto `3001` → mapeado a `http://localhost:3001`

Al iniciar, el contenedor espera que MySQL esté listo y luego ejecuta `prisma migrate deploy` automáticamente.

### Sin Docker

```bash
npm install          # También ejecuta prisma generate (postinstall)
npm run db:push      # Aplica el schema a la base de datos
npm run dev          # http://localhost:3000
```

### Setup inicial completo (primera vez)

```bash
npm run setup        # = db:push + node scripts/totem-master.js
```

El script `totem-master.js` limpia la BD, configura facultades, aulas, mapeos de sectores y hace una sync completa desde Google Sheets.

### Comandos útiles

```bash
npm run db:generate  # Regenerar el cliente de Prisma (después de cambiar schema.prisma)
npm run db:push      # Aplicar cambios del schema sin migraciones
npm run db:studio    # Abrir Prisma Studio (UI para explorar la BD)
npm run build        # Build de producción
npm start            # Servidor de producción
```

---

## Arquitectura

```
totem-api/
├── next.config.js              # Config Next.js (sin output estático — hay servidor Node)
├── instrumentation.js          # Hook de Next.js: registra cron jobs al iniciar el servidor
├── cron-daemon.js              # Proceso alternativo de cron (para usar sin instrumentation)
├── Dockerfile                  # Build multi-stage (deps → build → runner)
├── docker-compose.yml          # MySQL + API
├── prisma/
│   ├── schema.prisma           # Modelos de la BD
│   └── migrations/             # Historial de migraciones
├── scripts/
│   └── totem-master.js         # Script de setup/reset completo
└── src/
    ├── pages/
    │   ├── index.js            # Página de bienvenida con lista de endpoints
    │   └── api/
    │       ├── health.js       # GET /api/health
    │       └── v1/
    │           ├── totem/      # Sync y consulta de datos del TOTEM
    │           ├── examenes/   # CRUD y consultas de exámenes
    │           ├── aulas/      # CRUD de aulas
    │           ├── facultades/ # CRUD de facultades
    │           ├── dashboard/  # Resúmenes estadísticos
    │           ├── admin/      # Endpoints de administración
    │           ├── asignacion/ # Asignación automática de aulas
    │           ├── actas/      # Actas externas de UCASAL
    │           ├── enrollments/ # Sync de inscriptos
    │           ├── estudiantes/ # Gestión de estudiantes
    │           └── configuracion/ # Config del sistema
    ├── controllers/
    │   ├── facultadController.js    # Lógica HTTP de facultades
    │   └── enrollmentSync.js        # Sync diario de inscriptos (cron)
    ├── services/
    │   ├── totemService.js          # Servicio principal de sync con Google Sheets
    │   ├── googleSheetService.js    # Cliente HTTP para el Google Apps Script
    │   ├── ucasalMappingService.js  # Mapeo carreras/sectores con API de UCASAL
    │   ├── actaExternaService.js    # Consulta de actas en API externa de UCASAL
    │   └── facultadService.js       # CRUD de facultades
    ├── lib/
    │   ├── db.js                    # Singleton de PrismaClient
    │   ├── cors.js                  # Middleware CORS + helper withCors()
    │   └── helpers.js               # Utilidades (formatDateDDMMYYYY, etc.)
    ├── middleware/
    │   └── validation.js            # Validadores reutilizables (métodos, paginación, fechas)
    └── generated/
        └── prisma/                  # Cliente Prisma generado (no editar manualmente)
```

---

## Base de datos — Modelos principales

### `Facultad`
Representa una facultad o sector de la universidad. Tiene `codigo` que mapea con los sectores del TOTEM de Google Sheets.

### `Carrera`
Pertenece a una `Facultad`. Tiene `codigo` que se usa para consultar la API de UCASAL (`sistemasweb.ucasal.edu.ar/v1/oferta-academica`).

### `Examen`
Modelo central. Tiene relaciones con `Carrera`, `Facultad`, `Aula` (opcional), `ExamenTotem` (datos crudos del sheet) y `EstudianteExamen` (inscriptos).

Campos clave:
- `materia_codigo` + `areatema`: usados para consultar inscriptos en UCASAL
- `cantidadInscriptos`: actualizado por el cron diario de inscriptos
- `requierePc`: determina si va al Laboratorio Informático
- `aulaId`: puede ser null (sin aula asignada aún)

### `Aula`
Aulas físicas disponibles. Se administran vía endpoints CRUD (`/api/v1/aulas`). Configuración actual:
- Aula 4 (72 personas)
- Aula 7 (72 personas)
- Aula 8 (71 personas)
- Aula 12 (69 personas)
- Aula 34 (72 personas)
- Laboratorio Informático (34 PCs)

### `ExamenTotem`
Datos crudos tal como vienen del Google Sheet (carrera, sector, modo, etc.). Relación 1-a-1 con `Examen`.

### `CarreraTotem`
Mapeo entre el nombre de carrera del TOTEM (Google Sheets) y la carrera real en la BD.

---

## Flujo principal: Sincronización desde Google Sheets

```
POST /api/v1/totem/sync  (o sync-all)
        │
        ▼
sync.js — acquireSyncLock() (previene syncs concurrentes)
        │
        ▼  (responde 202 inmediatamente)
        │
        ▼  (background)
TotemService.syncTotemData()
        │
        ├── GoogleSheetService.fetchData()
        │     └── GET al Google Apps Script → JSON con filas del Sheet
        │
        ├── extractTotemRowData(row)
        │     └── Normaliza cada fila: toStr(), toDate(), toTime()
        │         (maneja números seriales de Google Sheets, fechas 1899, strings)
        │
        ├── UcasalMappingService.fetchCarreraFromUcasal(codigo)
        │     └── GET sistemasweb.ucasal.edu.ar → obtiene facultad/sector real
        │         └── getOrCreateFacultad() + getOrCreateCarrera() en BD
        │
        └── prisma.examen.upsert()
              └── Crea o actualiza el examen en MySQL
                  releaseSyncLock()
```

### Lock de sincronización

`totemService.js` exporta tres funciones de módulo para prevenir syncs paralelas:
```js
acquireSyncLock()  // retorna false si ya hay una sync corriendo
isSyncInProgress() // con auto-reset si lleva >10 min (safety)
releaseSyncLock()  // libera el lock en .finally()
```

---

## Cron Jobs automáticos

Hay **dos implementaciones paralelas** del mismo cron (por razones de compatibilidad):

### 1. `instrumentation.js` (preferido en producción)
Hook nativo de Next.js que corre **una sola vez** cuando el servidor inicia. No requiere proceso separado.

### 2. `cron-daemon.js` (alternativa)
Proceso Node.js independiente que espera a que el servidor esté listo (`waitForServer()`) y luego registra los jobs. Se usa cuando `instrumentation.js` no está disponible.

### Jobs registrados

| Job | Horario | Acción |
|---|---|---|
| Sync exámenes | 03:00 ARG / 06:00 UTC | `POST /api/v1/totem/sync-all` — sincroniza todos los turnos de Google Sheets |
| Sync inscriptos | 04:00 ARG / 07:00 UTC | `POST /api/v1/enrollments/sync-batch` — actualiza `cantidadInscriptos` de los próximos 7 días |

---

## Endpoints principales

### Health
```
GET /api/health
```
Verifica DB con `SELECT 1` y retorna estadísticas básicas (total exámenes, aulas, facultades).

### TOTEM
```
GET  /api/v1/totem/turnos          # Lista hojas/turnos disponibles en Google Sheets
POST /api/v1/totem/sync?gid=XXX    # Sincroniza un turno específico (por GID de pestaña)
POST /api/v1/totem/sync-all        # Sincroniza todos los turnos activos
GET  /api/v1/totem/estadisticas    # Estadísticas del sistema
GET  /api/v1/totem/consulta        # Consulta avanzada de datos TOTEM
```

### Exámenes
```
GET  /api/v1/examenes              # Lista paginada de exámenes
GET  /api/v1/examenes/por-fecha    # Exámenes filtrados por rango de fechas
GET  /api/v1/examenes/backoffice   # Vista completa para panel de admin
GET  /api/v1/examenes/sin-aula     # Exámenes sin aula asignada
GET  /api/v1/examenes/[id]         # Detalle de un examen
POST /api/v1/examenes/sync-inscriptos-batch  # Actualizar inscriptos en lote
```

Parámetros de `por-fecha`:
- `fechaDesde` / `fechaHasta` (YYYY-MM-DD): rango. Sin parámetros → próximos 365 días desde hoy.
- `soloSinAula=true` / `soloConAula=true`: filtros de aula.

### Aulas
```
GET  /api/v1/aulas                 # Lista de aulas
GET  /api/v1/aulas/disponibles     # Aulas libres para una fecha/hora
GET  /api/v1/aulas/[id]           # Detalle de aula
POST /api/v1/aulas                 # Crear nueva aula
PUT  /api/v1/aulas/[id]           # Modificar aula (nombre, sede, capacidad, activa)
DELETE /api/v1/aulas/[id]         # Dar de baja un aula (soft delete)
```

### Facultades
```
GET  /api/v1/facultades            # Lista con carreras y conteo de exámenes
GET  /api/v1/facultades/[id]       # Detalle con carreras y exámenes
```

### Asignación de aulas
```
POST /api/v1/examenes/[id]/asignar-aula   # Asignar aula manualmente a un examen
DELETE /api/v1/examenes/[id]/asignar-aula # Desasignar aula de un examen
```

---

## Detalle de archivos clave

### `src/lib/db.js` — Singleton de Prisma

```js
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // En dev, reutiliza la instancia entre hot-reloads de Next.js
  // sin esto, cada recarga crea una nueva conexión y agota el pool
  if (!global.__prisma) {
    global.__prisma = new PrismaClient({ log: ['query', ...] });
  }
  prisma = global.__prisma;
}
```
> **Si hay errores de "Too many connections":** siempre verificar que se está usando este singleton y no `new PrismaClient()` directamente en los handlers.

---

### `src/lib/cors.js` — Middleware CORS

Exporta `withCors(handler)`, un wrapper que aplica los headers de CORS en cada endpoint:
```js
export default withCors(async function handler(req, res) { ... });
```

Soporta wildcards (`*.vercel.app`, `*.netlify.app`). Los orígenes explícitos de producción son `ucasal.edu.ar`, `frontprod.ucasal.edu.ar` y `backprod.ucasal.edu.ar`.

> **Si hay errores de CORS en producción:** agregar el origen a `allowedOrigins` en `cors.js`.

---

### `src/services/totemService.js` — Núcleo de la sync

Contiene las funciones helper de parseo de datos del Google Sheet:

- **`pickField(obj, keys)`**: intenta múltiples variantes del nombre de columna (el Sheet tiene inconsistencias de mayúsculas/minúsculas entre turnos).
- **`toStr(v)`**: normaliza cualquier valor a string o null.
- **`toDate(v)`**: parsea fechas de Google Sheets a `Date`.
- **`toTime(v)`**: el más complejo — maneja tres formatos distintos:
  - Número serial de Sheets (fracción del día, ej: `0.75` = 18:00)
  - Fecha con epoch de 1899 (`1899-12-30T...`) con corrección de timezone histórica de Argentina (+4h16m48s)
  - String (`"18:00"`, `"18:00:00"`)

> **Si las horas de los exámenes están desfasadas:** revisar `toTime()` y la corrección de los 15408 segundos.

- **`extractTotemRowData(row)`**: aplica todos los helpers a una fila del Sheet y retorna un objeto normalizado.

---

### `src/services/ucasalMappingService.js` — Mapeo con API de UCASAL

Consulta `sistemasweb.ucasal.edu.ar/v1/oferta-academica?codigoCarrera=XXX` para obtener el nombre real de la carrera y su sector (facultad). Cachea en memoria durante la sesión y persiste en la BD con `getOrCreateFacultad()` / `getOrCreateCarrera()`.

---

### `src/services/actaExternaService.js` — Matching de docentes

Cuando se consultan actas de exámenes a la API de UCASAL, a veces hay múltiples actas para la misma materia (distintas cátedras). Este servicio usa `normalizarNombreProfesor()` para comparar el docente almacenado en la BD con los profesores de cada acta y filtrar la correcta.

Maneja formatos heterogéneos:
- UCASAL: `"Abg. LOPEZ ARIAS RICARDO CARMELO, 25069211"`
- Sheet: `"RICARDO CARMELO LOPEZ ARIAS"`

---

### `src/controllers/enrollmentSync.js` — Sync de inscriptos

Recorre todos los exámenes activos, consulta la API de UCASAL con el `materia_codigo` y `areaTema` de cada uno, y actualiza `cantidadInscriptos` en la BD. Se ejecuta vía cron a las 04:00 ARG.

---

### `scripts/totem-master.js` — Setup completo

Script de 6 pasos para inicializar o resetear el sistema:
1. **Limpieza** de la BD
2. **Facultades** base (7 facultades de UCASAL)
3. **Aulas** correctas (4 aulas físicas)
4. **Mapeo de sectores** (ID numérico del TOTEM → código de facultad)
5. **Sync completa** desde Google Sheets
6. **Reporte final**

> Usar con cuidado en producción — el paso 1 borra todos los datos.

---

### `Dockerfile` — Build multi-stage

```
deps    → npm install + prisma generate
build   → next build
runner  → solo los archivos necesarios para correr (sin node_modules de dev)
```

El CMD del runner espera a que MySQL esté disponible antes de ejecutar `prisma migrate deploy && npm start`.

---

## Puntos de quiebre y dónde buscar

| Síntoma | Dónde buscar |
|---|---|
| La sync no termina / se cuelga | `totemService.js` — revisar el lock con `isSyncInProgress()`. El auto-reset es a los 10 min. |
| Sync retorna 409 "already running" | El lock no se liberó. Esperar 10 min o reiniciar el proceso. |
| Horas de exámenes incorrectas | `toTime()` en `totemService.js` — revisar el formato que llega desde el Sheet |
| Error de CORS en el browser | Agregar el origen a `allowedOrigins` en `src/lib/cors.js` |
| "Too many connections" a MySQL | Verificar que todos los archivos usen `import prisma from '../lib/db.js'` (singleton) |
| Examen sin aula asignada | Asignar manualmente desde el backoffice en `/asignacion-examenes`. Verificar `requierePc` y `cantidadInscriptos` en el modelo `Examen`. |
| Inscriptos no se actualizan | `enrollmentSync.js` y `actaExternaService.js` — revisar el matching de docente |
| Google Sheets retorna HTML en vez de JSON | El Apps Script no está deployado como "Anyone" o el URL cambió. Revisar `GOOGLE_SHEET_API_URL`. |
| Cron jobs no corren | Revisar `instrumentation.js` — solo corre si `NEXT_RUNTIME === 'nodejs'`. En dev puede no activarse. |
| Error al buildear en Docker | Verificar que `prisma generate` se ejecutó antes del build (`prebuild` lo hace automáticamente) |