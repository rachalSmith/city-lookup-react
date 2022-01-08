import { render, screen } from '@testing-library/react';
import App from './App';

import { setupServer } from 'msw/node';
import { rest } from 'msw';


//TODO: REFACTOR MOCKED RESPONSE TEST. TEST IS PASSING BUT SHOULDNT

// mock API data
const mockCityData = [
  {color: '#f3c32c', name: 'Housing', score_out_of_10: 6.455500000000001},
  {color: '#f3d630', name: 'Cost of Living', score_out_of_10: 5.049000000000001},
  {color: '#f4eb33', name: 'Startups', score_out_of_10: 5.769500000000001}
];

// set up server, server listens for any get request to the url and instead of returning a
// real response, returns a mock response with json body where recipes property is set to
// allRecipies declared above
const server = setupServer(
  rest.get('https://api.teleport.org/api/urban_areas/slug:vancouver/scores/', (req, res, ctx) => {
     res(ctx.json({data: mockCityData}))
  }),
)


// make sure server is listening to intercept http requests
//
// after all tests have run, close connection with server
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


it('should make a call to the API', async () => {
  render(<App /> );

  const data = await screen.findByTestId('data');
  expect(data).toBeVisible();
})


it('should render the Header component', () => {
  render(<App />);
  const headerComponent = screen.getByRole('heading');
  expect(headerComponent).toBeInTheDocument();
});



describe('InputField Component', () => {
  it('should render an input field', () => {
    render(<App />);
    const inputField = screen.getByLabelText('Search');
    expect(inputField).toHaveAttribute('name', 'input-field');
  })
})



it('Should render the RadarChart component', () => {
  render(<App />);
  const radarChartComponent = screen.getByText('Radar Chart');
  expect(radarChartComponent).toBeInTheDocument();
});

it('Should render the AverageCalculation component', () => {
  render(<App />);
  const avCalcComponent = screen.getByText('Average Calculation');
  expect(avCalcComponent).toBeInTheDocument();
});
