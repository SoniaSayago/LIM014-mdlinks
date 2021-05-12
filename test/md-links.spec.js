const {
  existsRoute,
  validatePath,
  isFile,
  isMd,
  searchRoutemd,
  extraerLinks
} = require('../src/index.js');


 // ------------- existsRoute ----------------------
describe('Comprueba la existencia de la ruta', () => {
  test('Valida si es una función', () => {
  expect(typeof existsRoute).toBe('function');
  });
  it('retorna un boleano si la ruta existe', () => {
     expect(existsRoute(`C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\PRUEBATEST\\testfiles\\test4.md`)).toBe(true);
  });

  it('tendrá que retornar falso si e path es invalido', () => {
      expect(existsRoute('./documents/example/')).toBe(false);
  });
});

 // ------------- validatePath ----------------------
describe('Comprobar si la ruta es absoluta', () => {
  test('Comprobar si es una función', () => {
    expect(typeof validatePath).toBe('function');
  });
  test('Si la ruta es relativa la convierte  a absoluta', () => {
      expect(validatePath('test/PRUEBATEST/testfiles/test4.md')).toEqual('c:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\PRUEBATEST\\testfiles\\test4.md');
    });
  });

   // ------------- isFile ----------------------
  describe('Comprobar si es un file', () => {
    test('Validar si es una función', () => {
      expect(typeof isFile).toBe('function');
    });
    it('Retorna true si es un file', () => {
      expect(isFile('C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\PRUEBATEST\\testfiles\\test4.md')).toBe(true);
    });
    it('Retonar falso si no es un file', () => {
      expect(isFile('./test')).toBe(false);
    });
  });

  // ------------- isMd ----------------------

  describe('Comprobar su isMd es una función', () => {
    it('isMd es una función', () => {
      expect(typeof isMd).toBe('function');
    });
    it('should return the file extension', () => {
      expect(isMd('c:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\PRUEBATEST\\testfiles\\test4.md')).toBe('.md');
    });
    it('retorna la extensión del archivo.txt si no es una extensión Md', () => {
      expect(isMd('c:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\FAIL\\test1.txt')).toBe('.txt');
    });
    it('retorna vacio si no es una extensión', () => {
      expect(isMd('.tex')).toBe('');
    });
  });

  // ------------- searchRoutemd ----------------------
  describe('Test busca Comprobar si lee los documentos con extensión .md de un file o directorio', () => {
    test('should be a function', () => {
      expect(typeof searchRoutemd).toBe('function');
    });
    it('it should return all searchRoutemd with an .md extension', () => {

      const outputMd = [
        'C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\FAIL\\test2.md',
        'C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\FAIL\\test6.md',
        'C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\PRUEBATEST\\test3.md',
        'C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\PRUEBATEST\\testfiles\\test4.md',
      ];
      expect(searchRoutemd('C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test')).toEqual(outputMd);
    });
  });

 // ------------- extraerLinks ----------------------

 describe('Test que extrae Links', () => {
  test('Este retorna un array de objetos con 3 propiedades: links, text, file', () => {

    const ouput = [
   {
    href: 'https://app.slack.com/client/T0NNB6T0R/C01HF3GS945',
    text: 'slack',
    file: 'C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\PRUEBATEST\\testfiles\\test4.md'
   }
  ];
    expect(extraerLinks('C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\PRUEBATEST\\testfiles\\test4.md')).toEqual(ouput);
  });
});

