import tap from 'tap';
import { build } from '../../../src/app.js';
import 'must/register.js';
import Chance from 'chance';

const chance = new Chance();

tap.mochaGlobals();

const prefix = '/api';

describe('Get a blog should work', async () => {
  let app;

  before(async () => {
    app = await build({
      forceCloseConnections: true
    });
  });

  const newUser = {
    username: chance.email({ domain: 'example.com' }),
    password: chance.string({ length: 12 }),
    firstName: chance.first(),
    lastName: chance.last()
  };

  let cookie = '';

  it('it should return an error when the user is not yet logged in', async () => {
    const newTodo = {
      title: 'New Todo',
      description: 'Some description'
    };

    const response = await app.inject({
      method: 'GET',
      url: `${prefix}/user/HotStar68`,
      headers: {
        'Content-Type': 'application/json',
        cookie
      },
      body: JSON.stringify(newTodo)
    });

    // must be a bad request
    response.statusCode.must.be.equal(401);
    response.statusMessage.must.be.equal('Unauthorized');
  });

  it('Should return the user that was created a new user', async () => {
    const response = await app.inject({
      method: 'POST',
      url: `${prefix}/user`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    // this checks if HTTP status code is equal to 200
    response.statusCode.must.be.equal(200);

    const result = await response.json();

    // expect that id exists
    result.username.must.be.equal(newUser.username);
    result.firstName.must.be.equal(newUser.firstName);
    result.lastName.must.be.equal(newUser.lastName);

    // expect createdDate and updatedDate is not null
    result.createdDate.must.not.be.null();
    result.updatedDate.must.not.be.null();
  });

  it('Login should work', async () => {
    const response = await app.inject({
      method: 'POST',
      url: `${prefix}/login`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: newUser.username,
        password: newUser.password
      })
    });

    // this checks if HTTP status code is equal to 200
    response.statusCode.must.be.equal(200);

    cookie = response.headers['set-cookie'];
  });

  // Start test here
  it('Should return the object given an ID', async () => {
    const newTodo = {
      title: 'New User for get',
      description: 'Some description'
    };

    const createResponse = await app.inject({
      method: 'GET',
      url: `${prefix}/user/${newUser.username}`,
      headers: {
        cookie
      },
      body: JSON.stringify(newTodo)
    });

    // this checks if HTTP status code is equal to 200
    createResponse.statusCode.must.be.equal(200);

    const result = await createResponse.json();

    // expect that all of the values should be equal to newTodo properties
    result.username.must.be.equal(newUser.username);
    result.firstName.must.be.equal(newUser.firstName);
    result.lastName.must.be.equal(newUser.lastName);

    result.createdDate.must.not.be.null();
    result.updatedDate.must.not.be.null();
  });

  after(async () => {
    await app.close();
  });
});