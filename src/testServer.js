import "@testing-library/jest-dom/extend-expect";
import mockRawData from "./mocks/mockRawData.json"

import { setupServer } from 'msw/node';
import { rest } from 'msw';


const citiesUrl = 'https://api.teleport.org/api/urban_areas/slug:manchester/scores/'


const server = setupServer(
  rest.get(citiesUrl, (req, res, ctx) => {
    return res(
        ctx.json(mockRawData)
      )
  }),
)


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


export { server, rest };

