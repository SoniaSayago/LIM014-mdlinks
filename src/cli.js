#!/usr/bin/env node

const colors = require('colors')
const { totalUnique, broken } = require('./Option.js')
const mdlinks = require('./mdlinks.js');

const argumento = process.argv.slice(2)
if (argumento.length === 1) {
  mdlinks(argumento[0], { validate: true }).then(resp => {
    resp.forEach(element => {
      console.log(colors.cyan(`${element.href} ${element.text} ${element.path} `))

    })
  })
}
if (argumento.length === 2) {
  if (argumento[1] === '--validate') { //argumento es array posicion 0=url 1=validate 2=stats
    mdlinks(argumento[0], { validate: true }).then(resp => {
      resp.forEach(element => {
        console.log(colors.cyan(`${element.href} ${element.text} ${element.path} ${element.status} ${element.statusText}`))
      })
    })
  } else if (argumento[1] === '--stats') {
    mdlinks(argumento[0], { validate: true }).then(resp => console.log(colors.bgMagenta(totalUnique(resp))))
  }
}

if (argumento.length === 3) {
  if ((argumento[1] === '--validate' && argumento[2] === '--stats') || (argumento[1] === '--stats' && argumento[2] === '--validate')) {
    mdlinks(argumento[0], { validate: true }).then(resp => console.log(colors.bgMagenta(totalUnique(resp) + '\n' + (colors.bgRed(broken(resp))))));
  } else {
    console.log(colors.blackBright('Lo siento, no es un comando válido.'))
  }
}
