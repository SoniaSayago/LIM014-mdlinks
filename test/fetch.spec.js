const fetchMock = require('../src/__mocks__/node-fetch.js');
const fetch = require('node-fetch');
const { validateOptions } = require('../src/index');
const mdlinks = require('../src/mdlinks.js');
jest.mock('node-fetch');

describe('validate 200', () => {
  it('validar status 200', (done) => {
    const resultValidateLinks = [
      {
        href: 'https://router.vuejs.org/api/',
        text: 'Vue',
        path: 'C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\PRUEBATEST\\test3.md',
      },
      {
        href: 'https://app.slack.com/client/T0NNB6T0R/C01HF3GS945',
        text: 'slack',
        path: 'C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\PRUEBATEST\\testfiles\\test4.md',
      }
    ]
    const result = [
      {
        href: 'https://router.vuejs.org/api/',
        text: 'Vue',
        path: 'C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\PRUEBATEST\\test3.md',
        status: 200,
        statusText: 'OK'
      },
      {
        href: 'https://app.slack.com/client/T0NNB6T0R/C01HF3GS945',
        text: 'slack',
        path: 'C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\PRUEBATEST\\testfiles\\test4.md',
        status: 200,
        statusText: 'OK'
      }
    ];
    fetch.mockImplementation({
      status: 200,
      statusText: 'OK'
    });
    return validateOptions(resultValidateLinks).then((res) => {expect(res).toEqual(result)
  });
});

describe('Comprobar links 404 - fail', () => {
  test('Validar status = 404', () => {
    const arrayLinks = [
      {
        href: 'https://github.com/Sonia//-',
        text: 'github404',
        file: 'C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\FAIL\\test6.md'
      }
    ]
    const result = [
      {
        href: 'https://github.com/Sonia//-',
        text: 'github404',
        path: 'C:\\Users\\N20\\Documents\\GitHub\\LIM014-mdlinks\\test\\FAIL\\test6.md',
        status: 404,
        statusText: 'fail'
      }
    ];
    fetch.mockImplementation({
      status: 404,
      statusText: 'fail'
    });
    return validateOptions(arrayLinks).then((res) => {expect(res).toEqual(result)
    });
  });
})
