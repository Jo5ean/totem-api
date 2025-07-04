export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🚀 TOTEM API - UCASAL</h1>
      <p>API funcionando correctamente en Railway</p>
      
      <h2>Endpoints disponibles:</h2>
      <ul>
        <li><code>GET /api/hello</code> - Test básico</li>
        <li><code>POST /api/v1/debug/reset-database</code> - Limpieza de BD</li>
        <li><code>GET /api/v1/totem/estadisticas-simple</code> - Estadísticas</li>
      </ul>
      
      <p><strong>Estado:</strong> ✅ API Online</p>
      <p><strong>Fecha:</strong> {new Date().toISOString()}</p>
    </div>
  );
} 