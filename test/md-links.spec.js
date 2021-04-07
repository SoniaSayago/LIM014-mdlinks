const {
  existsRoute,
  validateAbsolute,
  IsFile,
  IsMd,
  extraerLinks,
  convertAbsolute,
  validatePath,
} = require('../src/index.js');

describe('existRoute', () => {
  it('should be a function', () => {
    expect(typeof existsRoute).toBe('function');
  });

  it('returns a boolean if the route existsRoute', () => {
     expect(existsRoute('C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\src\\Pruebas\\archivo1.md')).toBe(true);
  });

  it('should return false for invalid path', () => {
      expect(existsRoute('./documents/example/')).toBe(false);
  });
});


describe('Testing to find out if validatePath is a function', () => {
  it('should be a function', () => {
    expect(typeof validatePath).toBe('function');
  });
    it('should convert an absolute path', () => {
      expect(validatePath('..//Pruebas//archivo2.md')).toBe('C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\src\\Pruebas\\archivo2.md');
    });
  });


describe('Testing to find out if IsFile is a function', () => {
  it('should be a function', () => {
    expect(typeof IsFile).toBe('function');
  });
  it('it is expected to be a IsFile', () => {
    expect(IsFile('C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\src\\Pruebas\\archivo2.md')).toBe(true);
  });
  it('It should return false if it is not an IsFile', () => {
    expect(IsFile('./test')).toBe(false);
  });
});


describe('Testing to find out if IsMd is a function', () => {
  it('should be a function', () => {
    expect(typeof IsMd).toBe('function');
  });
  it('should return the file extension', () => {
    expect(IsMd('C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\src\\Pruebas\\archivo2.md')).toBe('.md');
  });
  it('should return empty if there is no extension', () => {
    expect(IsMd('.tex')).toBe('');
  });
});


describe('Testing to find out if searchRoutemd is a function', () => {
  it('should be a function', () => {
    expect(typeof searchRoutemd).toBe('function');
  });
  it('it should return all searchRoutemd with an .md extension', () => {

    const outputMd = [
      'C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\src\\Pruebas\\archivo1.md',
      'C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\src\\Pruebas\\archivo2.md'
    ];
    expect(searchRoutemd('./test')).toEqual(outputMd);
  });
});


describe('test to extract Links', () => {
  test('it should return an array of objects with the 3 properties', () => {

    const ouput = [
   {
    href: 'https://nodejs.org/es/about/',
    text: 'Definicón de Node js',
    file: 'C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\src\\Pruebas\\archivo1.md'
   }
  ];

    expect(extraerLinks('C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\src\\Pruebas\\archivo1.md')).toEqual(ouput);
  });
});
