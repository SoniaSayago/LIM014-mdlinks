const { mdlinks } = require('../src/mdlinks')

//---------------MDLINK----------------------//
describe('TEST de mdlinks', () => {
  test('Esto deberá retornar un array de objetos con 3 propiedades validate:false', () => {
    const ouputMdlink = [
      {
        href: 'https://router.vuejs.org/api/',
        text: 'Vue',
        file: 'C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\PRUEBATEST\\test3.md'
      },
      {
        href: 'https://app.slack.com/client/T0NNB6T0R/C01HF3GS945',
        text: 'slack',
        file: 'C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\PRUEBATEST\\testfiles\\test4.md'
      }
    ];
    return expect(mdlinks('C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\PRUEBATEST', { validate: false })).resolves.toEqual(ouputMdlink);
  });

// describe('mdlinks ', () => {
//   test('Esto retorna un array de objetos con 5 propiedades validate:true', () => {
//     const ouputTrue = [
//       {
//         href: 'https://app.slack.com/client/T0NNB6T0R/C01HF3GS945',
//         text: 'slack',
//         path: 'C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\PRUEBATEST\\testfiles\\test4.md',
//         status: 200,
//         statusText: 'OK'
//       }
//       ];
//       return expect(mdlinks('C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\PRUEBATEST\\testfiles', { validate: true})).resolves.toEqual(ouputTrue);
    });

