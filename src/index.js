const path = require('path');
const fs = require('fs');

//función que verifica si la ruta es absoluta y si es archivo
var prueba = path.isAbsolute('./mdtest/readme.md')
console.log(prueba)
try {
    const stats = fs.statSync('./src/index.js')
    console.log(stats)
  } catch (err) {
    console.error(err)
  }

//función que verifica si la ruta es absoluta y la devuelve
const rute = './mdtest/readme.md';
function validatePath (rute){
  console.log(path.isAbsolute(rute))
  return path.isAbsolute(rute)===true ?rute : path.resolve(rute) // operator ternario condiciones? expr1 :expr2
}
