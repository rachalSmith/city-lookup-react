import RadarChart from '../RadarChart';
import App from '../../../App'

import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

// *******Tests Not working because of Undefined charAt(0) *********

// *******This import overides the API call *********
//import { server, rest } from '../../../testServer'

it('Should render the RadarChart component', () => {
    render(<RadarChart city={'manchester'}/>);
    const radarChartComponent = screen.getByText(/Scores for/i);
    expect(radarChartComponent).toBeVisible();
});

// it('should initially not display a city name', () => {})


// // Renders REAL API DATA
// it('should render API data', async () => {
//     render(<App /> );
//     const asyncData = await screen.findByTestId('radarData');
//     const inputField = screen.getByPlaceholderText(/e.g. Manchester/i);
//     const buttonElement = screen.getByRole('button', {name: /Find/i});
//     const input = "manchester";
//     fireEvent.change(inputField, {
//       value: input
//     })
//     fireEvent.click(buttonElement);
//     expect(asyncData).toBeInTheDocument();
//     // expect(asyncData.textContent).toContain('Venture Capital');
//   })


  //Renders MOCK API DATA
//   it('should render data from MOCK', async () => {
//     render(<RadarChart/> );
//     const asyncData = await screen.findByText(/housing/i)
//     const asyncData = await screen.findByTestId('radarData')
//     expect(asyncData).toBeVisible();
//     expect(asyncData.textContent).toContain('i should fail')
//     expect(asyncData.textContent).toContain('Housing')

//   })

// it('should convert the city name to have an uppercase for the first letter', () => {})


// it('should display a city name after a city has been entered into the input field', () => {})
