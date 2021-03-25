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
const route = './mdtest/readme.md'
function validatePath (route){
  console.log(path.isAbsolute(route))
  return path.isAbsolute(route)===true ?route : path.resolve(route) // operator ternario condiciones? expr1 :expr2
} 