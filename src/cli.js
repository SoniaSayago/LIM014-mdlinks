#!/usr/bin/env node

const colors = require('colors')
const { totalUnique, broken } = require('./Option.js')
const mdlinks = require('./mdlinks.js');

const argumento = process.argv.slice(2)
if (argumento.length === 1) {
  mdlinks(argumento[0], { validate: false })
    .then(resp => {
    // resp.forEach(element => {
    //   // console.table(colors.cyan(`│ Link: ${element.href} │ Text: ${element.text} │ Path: ${element.path} `))
    // validate.push(element)
    // },
    console.table(resp)
  })
}
if (argumento.length === 2) {
  switch (argumento[1]) {
    case '--validate':
  // if ((argumento[1] === )  (argumento[1] === )) { //argumento es array posicion 0=url 1=validate 2=stats
      mdlinks(argumento[0], { validate: true })
      .then(resp => {
      // resp.forEach(element => {
      //   console.log(colors.cyan(`│ Link: ${element.href} │ Text: ${element.text} │ Path: ${element.path} │ Status: ${element.status} │ Status Text: ${element.statusText}`))
      // })
      console.table(resp)
    })
    break;
    case '--stats':
  // } else if ((argumento[1] === )  (argumento[1] === )) {
      mdlinks(argumento[0], { validate: true }).then(resp =>console.log(colors.bgMagenta(totalUnique(resp))));
  // }
    break;
    case '--help':
      const help = `
      **********************************************************************************************************************************
      ${colors.cyan.bold('Puede usar las siguientes opciones:')}
      ${colors.yellow('--stats')} se utiliza para obtener el número total de links y los que no se repiten (links únicos).
      ${colors.green('--validate')} se utiliza para validar cada link (si es OK o FAIL, dependiendo del estado) también obtener su href, texto y archivo.
      ${colors.magenta('--stats --validate')} Tambien puede ingresar ambas opciones y obtendra como resultado el total de links, únicos y rotos.
      ${colors.blue('--stats --validate --detail')} Tambien puede agregar el comando --detail y el resultado se mostrara de forma detallada.
      En caso de que no use ninguna opción, solo debe ingresar la${colors.cyan(' ruta')} y tendra como resultado href, el texto y el archivo de cada link.
      **********************************************************************************************************************************`;
      console.log(help);
      break;
    default:
    console.log(colors.blackBright('Lo siento, no es un comando válido.'));
}
}

if (argumento.length === 3) {
  if ((argumento[1] === '--validate' && argumento[2] === '--stats') || (argumento[1] === '--stats' && argumento[2] === '--validate')) {
    mdlinks(argumento[0], { validate: true }).then(resp => console.log(colors.bgMagenta(totalUnique(resp) + '\n' + (colors.bgRed(broken(resp))))));
  } else {
    console.log(colors.blackBright('Lo siento, no es un comando válido.'))
  }
}
