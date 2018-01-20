'use strict';

const mock = require('egg-mock');

describe('test/boom.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/boom-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, boom')
      .expect(200);
  });
});
