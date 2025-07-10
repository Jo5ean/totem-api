// Script simple para testing
const url = 'https://totem-api-production.up.railway.app/api/debug/carreras?fix=sectores';

console.log('Probando URL:', url);

fetch(url)
  .then(response => {
    console.log('Status:', response.status);
    return response.json();
  })
  .then(data => {
    console.log('Response:', JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error('Error:', error.message);
  }); 