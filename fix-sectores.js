import https from 'https';

// Script para ejecutar corrección de sectores
const postData = JSON.stringify({});

const options = {
  hostname: 'totem-api-production.up.railway.app',
  port: 443,
  path: '/api/debug/carreras?fix=sectores',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);
  
  let body = '';
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    body += chunk;
  });
  
  res.on('end', () => {
    console.log('Response:');
    console.log(body);
  });
});

req.on('error', (e) => {
  console.error(`Error: ${e.message}`);
});

req.write(postData);
req.end(); 