# Configuración de Cron para Sincronización Automática

## Opción 1: EasyCron (Gratis hasta 20 tareas/mes)
1. Ir a https://www.easycron.com/
2. Crear cuenta gratuita
3. Configurar tarea:
   - URL: `https://tu-api.railway.app/api/v1/enrollments/sync`
   - Método: POST
   - Programación: `0 4 * * *` (4:00 AM diario)
   - Timezone: Argentina/Buenos_Aires

## Opción 2: Cron-job.org (Gratis)
1. Ir a https://cron-job.org/
2. Registrarse
3. Crear job:
   - URL: `https://tu-api.railway.app/api/v1/enrollments/sync`
   - Método: POST
   - Programación: Diario a las 4:00 AM

## Opción 3: GitHub Actions (Recomendado)
```yaml
# .github/workflows/daily-sync.yml
name: Daily Enrollment Sync
on:
  schedule:
    - cron: '0 7 * * *'  # 4 AM Argentina (UTC-3)
  workflow_dispatch:     # Permite ejecución manual

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Enrollment Sync
        run: |
          curl -X POST ${{ secrets.API_URL }}/api/v1/enrollments/sync
```

## Opción 4: Railway Deploy Hooks
En Railway Dashboard:
1. Settings > Deploy Triggers
2. Agregar Webhook Cron
3. URL: `https://tu-api.railway.app/api/v1/enrollments/sync`
4. Schedule: `0 4 * * *`

## Para Testear Ahora (Sin Cron)
Simplemente clickea "Sincronizar Totem" en el dashboard.
¡Ya funciona con datos reales de UCASAL!
