import server from '$server';
import type { FastifyInstance, FastifyServerFactory } from 'fastify';
import Fastify from 'fastify';

export const init = (serverFactory?: FastifyServerFactory): FastifyInstance => {
  const app = Fastify({ serverFactory });
  server(app);

  return app;
};
