# 🧹 ANÁLISIS COMPLETO DE LIMPIEZA API

## 📊 ESTADO ACTUAL
- **56+ endpoints detectados** ⚠️ SOBRECARGADO
- **Múltiples endpoints duplicados**
- **Scripts temporales** en directorio raíz
- **Endpoints de debug** mezclados con producción

---

## 📁 INVENTARIO DE ENDPOINTS

### ✅ **ENDPOINTS DE PRODUCCIÓN** (Mantener)

#### 🏫 **Estudiantes**
- `GET /api/v1/estudiantes/examenes/[dni]` - ✅ **PRINCIPAL** - Consulta estudiante por DNI

#### 🏛️ **Facultades**  
- `GET /api/v1/facultades/` - Listar facultades
- `POST /api/v1/facultades/` - Crear facultad
- `GET /api/v1/facultades/[id]` - Facultad específica

#### 🪑 **Aulas**
- `GET /api/v1/aulas/` - ✅ **NUEVO** - Listar aulas
- `POST /api/v1/aulas/` - ✅ **NUEVO** - Crear aula
- `GET /api/v1/aulas/[id]` - ✅ **NUEVO** - Aula específica
- `PUT /api/v1/aulas/[id]` - ✅ **NUEVO** - Actualizar aula
- `DELETE /api/v1/aulas/[id]` - ✅ **NUEVO** - Eliminar aula

#### 📚 **Exámenes**
- `GET /api/v1/examenes/` - Listar exámenes
- `GET /api/v1/examenes/sin-aula` - ✅ **NUEVO** - Exámenes sin aula
- `GET /api/v1/examenes/por-fecha` - Exámenes por fecha
- `GET /api/v1/examenes/inscripciones` - Inscripciones generales
- `POST /api/v1/examenes/sincronizar-inscripciones` - Sincronizar inscripciones
- `POST /api/v1/examenes/[id]/asignar-aula` - ✅ **NUEVO** - Asignar aula
- `DELETE /api/v1/examenes/[id]/asignar-aula` - ✅ **NUEVO** - Desasignar aula
- `GET /api/v1/examenes/[id]/inscripciones` - Inscripciones específicas
- `PUT /api/v1/examenes/[id]/configurar` - Configurar examen

#### 🎯 **Asignación**
- `GET /api/v1/asignacion/masiva` - ✅ **NUEVO** - Sugerencias masivas
- `POST /api/v1/asignacion/masiva` - ✅ **NUEVO** - Asignación masiva
- `POST /api/v1/asignacion/automatica` - Asignación automática

#### 📝 **Actas**
- `GET /api/v1/actas/` - Listar actas
- `POST /api/v1/actas/` - Crear acta
- `POST /api/v1/actas/importar` - Importar actas

#### 📊 **Dashboard**
- `GET /api/v1/dashboard/resumen` - Resumen general
- `GET /api/v1/dashboard/integracion-completa` - Dashboard completo

#### ⚙️ **Configuración**
- `PUT /api/v1/configuracion/visual` - Configuración visual

#### 📋 **TOTEM**
- `GET /api/v1/totem/` - Datos TOTEM paginados
- `POST /api/v1/totem/sync` - ✅ **PRINCIPAL** - Sincronización
- `GET /api/v1/totem/estadisticas` - Estadísticas principales

---

### ⚠️ **ENDPOINTS DE DEBUG** (Eliminar en producción)

#### 🔧 **Debug General**
- `/api/debug/carreras` - Debug carreras
- `/api/debug/examenes` - Debug exámenes  
- `/api/debug/fix-facultades` - Fix facultades
- `/api/debug/corregir-carreras-existentes` - Corregir carreras
- `/api/debug/reestructurar-facultades` - Reestructurar facultades
- `/api/debug/test-sector-mapping` - Test mapeo sectores

#### 🔧 **Debug V1**
- `/api/v1/debug/analizar-examenes` - Análisis exámenes
- `/api/v1/debug/analizar-fechas-examenes` - Análisis fechas
- `/api/v1/debug/limpieza-total` - Limpieza total
- `/api/v1/debug/mapear-carreras-auto` - Mapeo automático
- `/api/v1/debug/reset-database` - Reset BD
- `/api/v1/debug/reset-examenes` - Reset exámenes
- `/api/v1/debug/setup-complete` - Setup completo
- `/api/v1/debug/verify-tables` - Verificar tablas

---

### 🗑️ **ENDPOINTS OBSOLETOS/DUPLICADOS** (Eliminar)

#### 📊 **Estadísticas Múltiples**
- `/api/v1/totem/estadisticas-simple` - ❌ DUPLICADO
- `/api/v1/totem/estadisticas-lite` - ❌ DUPLICADO
- ✅ **MANTENER SOLO:** `/api/v1/totem/estadisticas`

#### 🔄 **Sincronización Múltiple**
- `/api/v1/totem/simple-sync` - ❌ OBSOLETO
- `/api/v1/examenes/asignacion-masiva` - ❌ DUPLICADO con asignacion/masiva

#### 🧪 **Testing/Desarrollo**
- `/api/v1/totem/test-sheetbest` - ❌ TESTING
- `/api/v1/totem/detect-sheets` - ❌ DESARROLLO
- `/api/v1/totem/csv-download` - ❌ DESARROLLO
- `/api/v1/totem/debug` - ❌ DEBUG
- `/api/v1/totem/debug-processing` - ❌ DEBUG

#### 🔄 **Mapeos/Setup Obsoletos**
- `/api/v1/totem/mapeos/sectores` - ❌ DESARROLLO
- `/api/v1/totem/mapeos/carreras` - ❌ DESARROLLO
- `/api/v1/totem/setup-mapeos` - ❌ SETUP
- `/api/v1/totem/resetear-mapeos-completo` - ❌ SETUP
- `/api/v1/totem/crear-y-mapear-carreras` - ❌ SETUP
- `/api/v1/totem/mapear-carreras-automatico` - ❌ SETUP

#### 🚨 **Herramientas Temporales**
- `/api/v1/totem/reset-urgente` - ❌ TEMPORAL
- `/api/v1/totem/analizar-filas-descartadas` - ❌ ANÁLISIS
- `/api/v1/totem/verify-database` - ❌ VERIFICACIÓN
- `/api/v1/totem/consulta` - ❌ DUPLICADO con estudiantes/examenes/[dni]
- `/api/v1/setup/inicial` - ❌ SETUP

#### 📞 **Test/Hello**
- `/api/hello` - ❌ TEST

---

## 🎯 **ENDPOINTS FINALES DE PRODUCCIÓN** (23 endpoints)

### Core API (18 endpoints principales)
1. `GET /api/v1/estudiantes/examenes/[dni]` - **Consulta principal**
2. `GET /api/v1/facultades/` + `POST /api/v1/facultades/` + `GET /api/v1/facultades/[id]`
3. `GET /api/v1/aulas/` + `POST /api/v1/aulas/` + `GET /api/v1/aulas/[id]` + `PUT /api/v1/aulas/[id]` + `DELETE /api/v1/aulas/[id]`
4. `GET /api/v1/examenes/` + `GET /api/v1/examenes/sin-aula` + `GET /api/v1/examenes/por-fecha`
5. `POST /api/v1/examenes/[id]/asignar-aula` + `DELETE /api/v1/examenes/[id]/asignar-aula`
6. `GET /api/v1/asignacion/masiva` + `POST /api/v1/asignacion/masiva`
7. `GET /api/v1/dashboard/resumen` + `GET /api/v1/dashboard/integracion-completa`
8. `POST /api/v1/totem/sync` + `GET /api/v1/totem/estadisticas`

### Auxiliares (5 endpoints adicionales)
- Actas, configuración, inscripciones específicas

---

## 🗑️ **ARCHIVOS A ELIMINAR** (33+ archivos)

### En directorio raíz:
- `debug-areatema.js`
- `cargar-inscriptos-*.js` (5 archivos)
- `debug-*.js` (3 archivos)
- `verificar-examenes-hoy.js`
- Otros archivos temporales

### En `/api/debug/` - ELIMINAR DIRECTORIO COMPLETO
### En `/api/v1/debug/` - ELIMINAR DIRECTORIO COMPLETO  
### En `/api/v1/totem/` - ELIMINAR 15+ archivos obsoletos

---

## ✅ **RESULTADO ESPERADO**
- **De 56+ endpoints → 23 endpoints limpios**
- **Reducción del 60% en código**
- **API clara y mantenible**
- **Documentación completa**

---

## 🚀 **PRÓXIMOS PASOS**
1. ✅ Inventario completo ← ACTUAL
2. ⏳ Eliminar archivos obsoletos
3. ⏳ Validar endpoints finales
4. ⏳ Crear documentación completa
5. ⏳ Testing comprehensivo 