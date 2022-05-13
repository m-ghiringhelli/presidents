import fetch from 'cross-fetch';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { presidentData } from './tests/fixtures/presidentData';

global.fetch = fetch;

const server = setupServer(
  rest.get('https://api.sampleapis.com/presidents/presidents', (req, res, ctx) => {
    return res(ctx.json(presidentData))
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());