const notFound = require('./404');

describe('route 404', () => {
  it('should return 404', () => {
    const req = null;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };
    const next = null;

    notFound(req, res, next);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});