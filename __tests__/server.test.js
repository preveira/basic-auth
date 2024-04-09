'use strict';


const supertest = require('supertest');
const { sequelize, User } = require('../src/auth/models');
const { app } = require('../src/server.js');

const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
  User.create({
    username: 'test',
    password: '456',
  });
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Server Tests', () => {
  it('should give a status 200 and return"Youve signed up!!!"', async () => {
    let response = await request.post('/api/signup').send({
      username: 'Kawika',
      password: 'oompahloompah',
    });
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Youve signed up');
  });
  it('should give status 200 and return \'Youve signed in\'', async () => {
    let response = await request.post('/api/signin').auth('Kawika', 'oompahloompah');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Youve signed in');
  });
});