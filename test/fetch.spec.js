const fetch = require('node-fetch');
const { validateOptions } = require('../src/index');
jest.mock('node-fetch');

describe('Validar links 200 - ok', () => {
  test('Validar status = 200', () => {
    const arrayLinks = [
      {
        "href": 'https://app.slack.com/client/T0NNB6T0R/C01HF3GS945/',
        "text": 'slack',
        "path": 'test\\testfiles\\test4.md'
      }
    ]
    const result = [
      {
        "href": "https://app.slack.com/client/T0NNB6T0R/C01HF3GS945",
        "text": "slack",
        "path": 'test\\testfiles\\test4.md',
        "status": 200,
        "statusText": "OK"
      }
    ];

    fetch.mockImplementation(() => Promise.resolve({
      "status": 200,
      "statusText": "OK"
    }));

    return Promise.all(validateOptions(arrayLinks)).then((res) => {
      expect(res).toEqual(result)
    });
  });
});

describe('Comprobar links 404 - fail', () => {
  test('Validar status = 404', () => {
    const arrayLinks = [
      {
        "href": 'https://githubxs.com/',
        "path": 'test\\FAIL\\test6.md',
        "text": 'github404'
      }
    ]
    const result = [
      {
        "href": 'https://githubxs.com/',
        "path": 'test\\FAIL\\test6.md',
        "text": 'github404',
        "status": 404,
        "statusText": 'fail'
      }
    ];
    fetch.mockImplementation(() => Promise.resolve({
      "status": 404,
      "statusText": 'fail'
    }));
    return Promise.all(validateOptions(arrayLinks)).then((res) => {
      expect(res).toEqual(result)
    });
  });
});
