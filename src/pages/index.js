export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🚀 TOTEM API - UCASAL</h1>
      <p>API funcionando correctamente</p>
      
      <h2>Endpoints disponibles:</h2>
      <ul>
        <li><code>GET /api/health</code> - Health check</li>
        <li><code>GET /api/v1/totem/turnos</code> - Listado de turnos</li>
        <li><code>GET /api/v1/totem/estadisticas</code> - Estadísticas del sistema</li>
        <li><code>POST /api/v1/totem/sync</code> - Sync (opcional ?gid=...)</li>
        <li><code>POST /api/v1/totem/sync-all</code> - Sync de todos los turnos activos</li>
        <li><code>GET /api/v1/examenes/por-fecha</code> - Exámenes por fecha</li>
        <li><code>GET /api/v1/examenes/backoffice</code> - Panel de administración</li>
        <li><code>GET /api/v1/dashboard/resumen</code> - Resumen general</li>
      </ul>
      
      <p><strong>Estado:</strong> ✅ API Online</p>
      <p><strong>Fecha:</strong> {new Date().toISOString()}</p>
    </div>
  );
}