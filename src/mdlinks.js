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

// mdlinks('C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\PRUEBATEST', { validate: true}).then((res) => { console.log(res) });
// mdlinks('C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\FAIL', { validate: true}).then((res) => { console.log(res) });

module.exports = mdlinks;
