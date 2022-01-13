import "@testing-library/jest-dom/extend-expect";

import { setupServer } from 'msw/node';
import { rest } from 'msw';


// mock API data for Manchester
const radarData = {
  categories: [
  {color: '#f3c32c', name: 'Housing', score_out_of_10: 6.455500000000001},
  {color: '#f3d630', name: 'Cost of Living', score_out_of_10: 5.049000000000001},
  {color: '#f4eb33', name: 'Startups', score_out_of_10: 5.769500000000001}
  ],
  summary: "Manchester, United Kingdom, is among the top cities with",
  teleport_city_score: 60.752702702702685
}

const citiesUrl = 'https://api.teleport.org/api/urban_areas/slug:manchester/scores/'

// sets up a server which listens for any get request to the url and
// returns a mock response with json body where data property is set to
// the mock data declared above
const server = setupServer(
  rest.get(citiesUrl, (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json({
          data: radarData,
        }),
      )
  }),
)

// ensure server is listening to intercept http requests
//
// close connection with server
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


export { server, rest };

