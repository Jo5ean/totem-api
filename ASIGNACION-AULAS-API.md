# 🏛️ API de Asignación de Aulas - TOTEM

Documentación completa de los endpoints para la gestión y asignación de aulas desde el backoffice.

## 📋 Índice

1. [Gestión de Aulas](#gestión-de-aulas)
2. [Asignación Individual](#asignación-individual)
3. [Asignación Masiva](#asignación-masiva)
4. [Exámenes Pendientes](#exámenes-pendientes)
5. [Ejemplos de Uso](#ejemplos-de-uso)

---

## 🏛️ Gestión de Aulas

### GET `/api/v1/aulas`
Obtener lista de todas las aulas disponibles.

**Query Parameters:**
- `activa` (boolean): Filtrar por aulas activas/inactivas
- `sede` (string): Filtrar por sede específica

**Respuesta:**
```json
{
  "success": true,
  "aulas": [
    {
      "id": 1,
      "nombre": "Aula 4",
      "sede": "UAM 03",
      "capacidad": 72,
      "activa": true,
      "estadisticas": {
        "examenes_programados": 5,
        "ocupacion_total": 150,
        "porcentaje_uso": 85
      }
    }
  ],
  "total": 4
}
```

### POST `/api/v1/aulas`
Crear nueva aula.

**Body:**
```json
{
  "nombre": "Aula 16",
  "sede": "UAM 03",
  "capacidad": 50
}
```

### GET `/api/v1/aulas/{id}`
Obtener detalles de aula específica.

**Respuesta:**
```json
{
  "success": true,
  "aula": {
    "id": 1,
    "nombre": "Aula 4",
    "sede": "UAM 03",
    "capacidad": 72,
    "examenes": [...],
    "ocupaciones": [...],
    "estadisticas": {
      "examenes_total": 10,
      "examenes_futuros": 5,
      "ocupacion_actual": 150
    }
  }
}
```

### PUT `/api/v1/aulas/{id}`
Actualizar aula existente.

**Body:**
```json
{
  "nombre": "Aula 4 - Renovada",
  "capacidad": 80,
  "activa": true
}
```

### DELETE `/api/v1/aulas/{id}`
Eliminar aula (soft delete).

---

## 🎯 Asignación Individual

### POST `/api/v1/examenes/{id}/asignar-aula`
Asignar aula a un examen específico.

**Body:**
```json
{
  "aulaId": 1,
  "forzar": false
}
```

**Respuesta exitosa:**
```json
{
  "success": true,
  "examen": {...},
  "message": "Aula \"Aula 4\" asignada exitosamente",
  "asignacion": {
    "aula": "Aula 4",
    "capacidad": 72,
    "inscriptos": 45,
    "disponibilidad": 27,
    "porcentaje_ocupacion": 63
  }
}
```

**Errores comunes:**
```json
{
  "error": "Capacidad insuficiente",
  "message": "El aula tiene capacidad para 34 personas, pero el examen tiene 45 inscriptos",
  "sugerencia": "Usa forzar=true para asignar de todas formas",
  "capacidad_aula": 34,
  "inscriptos_examen": 45
}
```

### DELETE `/api/v1/examenes/{id}/asignar-aula`
Desasignar aula de un examen.

**Respuesta:**
```json
{
  "success": true,
  "examen": {...},
  "message": "Aula \"Aula 4\" desasignada exitosamente",
  "aula_anterior": {
    "id": 1,
    "nombre": "Aula 4",
    "capacidad": 72
  }
}
```

---

## 📦 Asignación Masiva

### POST `/api/v1/asignacion/masiva`
Asignar múltiples exámenes a aulas de una vez.

**Body:**
```json
{
  "asignaciones": [
    { "examenId": 1295, "aulaId": 1 },
    { "examenId": 1296, "aulaId": 2 }
  ],
  "forzar": false
}
```

**Respuesta:**
```json
{
  "success": true,
  "message": "Procesadas 2 asignaciones: 1 exitosas, 1 con errores",
  "exitosas": [
    {
      "examenId": 1295,
      "aulaId": 1,
      "examen": {
        "materia": "Derecho Constitucional",
        "carrera": "Abogacía",
        "inscriptos": 45
      },
      "aula": {
        "nombre": "Aula 4",
        "capacidad": 72,
        "ocupacion": 63
      }
    }
  ],
  "errores": [],
  "conflictos": [
    {
      "examenId": 1296,
      "aulaId": 2,
      "tipo": "capacidad",
      "mensaje": "Capacidad insuficiente: 80 inscriptos > 71 capacidad"
    }
  ],
  "resumen": {
    "total": 2,
    "procesadas": 2,
    "exitosas": 1,
    "errores": 1
  }
}
```

### GET `/api/v1/asignacion/masiva`
Obtener sugerencias automáticas de asignación.

**Query Parameters:**
- `fecha` (string): Fecha específica (YYYY-MM-DD)
- `facultadId` (number): ID de facultad específica

**Respuesta:**
```json
{
  "success": true,
  "examenes_analizados": 33,
  "aulas_disponibles": 4,
  "sugerencias": [
    {
      "examenId": 1295,
      "aulaId": 1,
      "examen": {
        "materia": "Derecho Constitucional",
        "carrera": "Abogacía",
        "inscriptos": 45
      },
      "aula": {
        "nombre": "Aula 4",
        "capacidad": 72,
        "ocupacion_proyectada": 63,
        "espacios_libres": 27
      },
      "alternativas": [...]
    }
  ],
  "estadisticas": {
    "con_sugerencia": 25,
    "sin_solucion": 8,
    "ocupacion_promedio": 68
  }
}
```

---

## 📋 Exámenes Pendientes

### GET `/api/v1/examenes/sin-aula`
Obtener exámenes que necesitan asignación de aula.

**Query Parameters:**
- `fecha` (string): 'hoy', 'futuros', o fecha específica (YYYY-MM-DD)
- `facultadId` (number): Filtrar por facultad
- `carreraId` (number): Filtrar por carrera
- `minInscriptos` (number): Mínimo de inscriptos
- `maxInscriptos` (number): Máximo de inscriptos
- `page` (number): Página (default: 1)
- `limit` (number): Límite por página (default: 20)
- `sortBy` (string): Campo de ordenamiento
- `sortOrder` (string): 'asc' o 'desc'

**Respuesta:**
```json
{
  "success": true,
  "examenes": [
    {
      "id": 1295,
      "nombreMateria": "Derecho Constitucional",
      "materia_codigo": "340",
      "areatema": "60",
      "fecha": "2025-07-11",
      "hora": "18:00",
      "cantidadInscriptos": 45,
      "carrera": {
        "id": 16,
        "nombre": "Abogacía",
        "facultad": {
          "id": 3,
          "nombre": "Ciencias Jurídicas"
        }
      },
      "estadoAsignacion": {
        "aulasCompatibles": 3,
        "puedeAsignarse": true,
        "problemas": null
      },
      "prioridadAsignacion": {
        "nivel": "alta",
        "razon": "Examen en 5 días, 45 inscriptos"
      }
    }
  ],
  "estadisticas": {
    "total_examenes": 33,
    "con_aulas_compatibles": 25,
    "sin_solucion": 8,
    "por_facultad": {
      "Ciencias Jurídicas": {
        "total": 25,
        "con_solucion": 20,
        "sin_solucion": 5
      }
    }
  },
  "paginacion": {
    "page": 1,
    "limit": 20,
    "total": 33,
    "totalPages": 2,
    "hasNext": true,
    "hasPrev": false
  }
}
```

---

## 💡 Ejemplos de Uso

### Flujo Básico de Asignación

1. **Obtener exámenes pendientes:**
```javascript
const examenes = await fetch('/api/v1/examenes/sin-aula?fecha=futuros&limit=10');
```

2. **Ver aulas disponibles:**
```javascript
const aulas = await fetch('/api/v1/aulas?activa=true');
```

3. **Asignar aula individual:**
```javascript
const asignacion = await fetch('/api/v1/examenes/1295/asignar-aula', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ aulaId: 1 })
});
```

### Asignación Automática con Sugerencias

1. **Obtener sugerencias:**
```javascript
const sugerencias = await fetch('/api/v1/asignacion/masiva?fecha=2025-07-11');
```

2. **Aplicar sugerencias automáticamente:**
```javascript
const asignaciones = sugerencias.sugerencias
  .filter(s => s.aulaId)
  .map(s => ({ examenId: s.examenId, aulaId: s.aulaId }));

const resultado = await fetch('/api/v1/asignacion/masiva', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ asignaciones })
});
```

### Gestión de Aulas Desde Backoffice

1. **Agregar nueva aula:**
```javascript
const nuevaAula = await fetch('/api/v1/aulas', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nombre: 'Aula 20',
    sede: 'UAM 03',
    capacidad: 60
  })
});
```

2. **Actualizar capacidad:**
```javascript
const actualizacion = await fetch('/api/v1/aulas/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ capacidad: 80 })
});
```

---

## 🔧 Códigos de Estado

- **200**: Operación exitosa
- **201**: Recurso creado exitosamente
- **400**: Datos inválidos o conflicto (capacidad, horario)
- **404**: Recurso no encontrado
- **405**: Método no permitido
- **500**: Error interno del servidor

---

## 🏛️ Aulas Configuradas

**UAM 03 - Aulas Disponibles:**
- **Aula 4**: 72 lugares
- **Aula 8**: 71 lugares  
- **Aula 12**: 69 lugares
- **Laboratorio Informático**: 34 lugares

**Total capacidad**: 246 lugares simultáneos

---

## 🚀 Estado del Sistema

✅ **API Completamente Funcional**
- Gestión completa de aulas (CRUD)
- Asignación individual y masiva
- Validaciones de capacidad y horario
- Sugerencias automáticas
- Control de ocupación en tiempo real

🔗 **Listo para Integración con Backoffice**
- Todos los endpoints documentados
- CORS configurado
- Manejo de errores robusto
- Datos reales cargados (389 inscriptos)

📊 **Datos Actuales:**
- 33 exámenes del 11/7/2025
- 389 inscriptos reales cargados
- 4 aulas UAM 03 configuradas
- Sistema en producción 