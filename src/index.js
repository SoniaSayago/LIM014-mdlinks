const path = require('path');
const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');


// ejemplos de rutas *absoluta & relativa *
const relativePath = 'src\\Pruebas';
const absolutePath = 'C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\src\\test\\Pruebas';

//función que verifica si la ruta es absoluta
var isAbsolute = path.isAbsolute(absolutePath)

//función que verifica si la ruta es absoluta y la devuelve; si es relativa, la vuelve absoluta
function validatePath(relativePath){
return path.isAbsolute(relativePath)===true ?relativePath : path.resolve(relativePath)} // operator ternario condiciones? expr1 :expr2
// **console.log(validatePath(absolutePath),"25")

// Funcion que verifica si existe la ruta
function existsRoute(absolutePath) {
  return fs.existsSync(absolutePath);
}
//** console.log(existsRoute(absolutePath),30)

//función que verifica si es archivo
const isFile = ((absolutePath) => fs.statSync(absolutePath).isFile());
// console.log(isFile(absolutePath),"27")

//Función que extrae si tiene extención .md
const isMd = (absolutePath) => (path.extname(absolutePath));
// console.log(isMd(absolutePath),"28")

// función que lee directorio
const readDirectorio = (absolutePath) => fs.readdirSync(absolutePath);
// console.log(readDirectorio(absolutePath),"29")


//FUNCIÓN que lee directorio//

const ArrayFilesandDirectories = (route) => {
  return readDirectorio(route).map(element =>//se crea una nueva matriz con los elementos encontrados
    path.join(route, element)); //une los segmentos de ruta especificados en una ruta
};

//FUNCIÓN que trae archivos .md//

const searchRoutemd = (route) => {
  let arrayMdFiles = [];
  const filePath = validatePath(route);
  if (isFile(filePath)) {
    if (isMd(filePath) === '.md') { //por cada elemento preguntamos si tiene extencion .md y la extrae
      arrayMdFiles.push(filePath);
    }
  } else {
    ArrayFilesandDirectories(route).forEach((element) => {// recorrido por cada elemento de directorio
      const filesOfNewRoute = element;
      const getMDFilesInNewRoute = searchRoutemd(filesOfNewRoute);// recursion searchRoutemd se llama a si mismo
      arrayMdFiles = arrayMdFiles.concat(getMDFilesInNewRoute);
    });
  }
  return arrayMdFiles;
};

// FUNCIÓN que trae archivo, resultado trae todo la información del archivoo//
const readFilePath = (route) => fs.readFileSync(route).toString();


// FUNCIÓN que permite extraer links de archivos //
// *** devuelve array de objetos
const extraerLinks = (route) => {
  let arrayLinks = [];
  const renderer = new marked.Renderer();
  searchRoutemd(route).forEach((file) => {
    renderer.link = (href, title, text) => { // renderer define salida ouput con tres propiedades
      const linkProperties = {
        href,
        text,
        file
      };
      arrayLinks.push(linkProperties);
    };
    marked(readFilePath(file), { renderer });
  });
  return arrayLinks;
};

// FUNCIÓN que retorna 5 propiedades

const validateOptions = (arrAllLinks) => {
  const statusLinks = arrAllLinks.map((element) =>
  fetch(element.href)
    .then((res) => { //la interfaz Response contiene el código de estado de la respuesta (ejm., 200 para un éxito).
      if((res.status >= 200) && (res.status <= 399)){
        return {
          href: element.href,
          text: (element.text.substring(0, 50)),
          path: element.file,
          status: res.status,
          statusText: 'OK'
        }
      } else if((res.status < 200 )|| (res.status >=400)){
      	return {
          href: element.href,
          text: (element.text.substring(0, 50)),
          path: element.file,
          status: res.status,
          statusText: 'fail'
        }
      }})
    .catch(() => {
      return {
        href: element.href,
        text: (element.text.substring(0, 50)),
        path: element.file,
        status:404,
        statusText: 'fail'
      }
    })
    );
  return Promise.all(statusLinks);
};

const saveArray = extraerLinks(absolutePath)
validateOptions(saveArray).then((res)=>console.log(res));


module.exports = {
  existsRoute,
  validatePath,
  validateOptions,
  ArrayFilesandDirectories,
  readFilePath,
  searchRoutemd,
  extraerLinks,
  isMd,
  readDirectorio,
  isFile
};
