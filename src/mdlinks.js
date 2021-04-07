const { validateOptions } = require('./index.js');
const funciones = require('./index.js');


const mdlinks = (stringpath, options={}) => {
  if (!funciones.existsRoute(stringpath)) {
    throw new Error('Ruta invalida');
  }
  const links = funciones.extraerLinks(stringpath);
  return new Promise(
    (resolve) => {
      if (options.validate === true) {
        resolve(validateOptions(links))
      } else if (options.validate === false) {
        resolve(links);
      }
    }
  )
};

mdlinks('C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\src\\Pruebas', { validate: true }).then((response) => { console.log(response) });

module.exports = mdlinks;
