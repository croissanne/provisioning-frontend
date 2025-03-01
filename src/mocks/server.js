// src/mocks/server.js
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { handlers } from './handlers';

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);

window.msw = {
  server,
  rest,
};
