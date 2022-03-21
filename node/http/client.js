// const http = require('http');
// const opts = {
//   hostname: '127.0.0.1',
//   port: 3020,
//   path: '/timeout',
//   method: 'GET',
// };

// http.get(opts, (res) => {
//   let rawData = '';
//   res.on('data', (chunk) => { rawData += chunk; });
//   res.on('end', () => {
//     try {
//       console.log(rawData);
//     } catch (e) {
//       console.error(e.message);
//     }
//   });
// }).on('error', err => {
//   console.error(err);
// });

const request = require('request');
request({
  url: 'http://127.0.0.1:3020/timeout',
  timeout: 5000,
}, (err, response, body) => {
  console.log(err, body);
});