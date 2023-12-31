import Fastify from 'fastify';
import openAPIGlue from 'fastify-openapi-glue';
import swagger from '@fastify/swagger';

import { Service } from './services/index.js';

import sensible from '@fastify/sensible';
import { specification } from './specification/index.js';

import cookie from '@fastify/cookie';
import session from '@fastify/secure-session';
import jwt from '@fastify/jwt';
import stat from '@fastify/static';

import { Security } from './security/index.js';

const prefix = '/api';

export async function build () {
  const fastify = Fastify({ logger: true });

  fastify.register(cookie);
  fastify.register(session, {
    secret: 'A very long string for the secret that should work',
    salt: '1234567890123456',
    cokkie: {
      httpOnly: true,
      maxAge: 60 * 60
    }
  });

  fastify.register(jwt, {
    secret: 'this is a very long string that will be used for the jwt secret'
  });

  fastify.register(sensible);

  const service = new Service();
  const securityHandlers = new Security(fastify);

  const openAPIGlueOptions = {
    specification,
    service,
    securityHandlers,
    prefix
  };

  const swaggerOptions = {
    openapi: specification,
    routePrefix: '/docs',
    exposeRoute: true
  };

  fastify.setNotFoundHandler(function (_request, reply) {
    // bad practice but force 404 to 200
    reply.statusCode = 200;
    // send the public/index.html
    reply.sendFile('index.html');
  });

  fastify.register(stat, {
    root: `${process.cwd()}/src/public`,
    preCompressed: true
  });

  fastify.register(swagger, swaggerOptions);
  fastify.register(openAPIGlue, openAPIGlueOptions);

  return fastify;
}