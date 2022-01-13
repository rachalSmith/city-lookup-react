import RadarChart from '../RadarChart';
import App from '../../../App';

import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { server, rest } from '../../../testServer'

it('Should render the RadarChart component', () => {
    render(<RadarChart />);
    const radarChartComponent = screen.getByText(/Radar Chart/i);
    expect(radarChartComponent).toBeVisible();
});

it('should render API data', async () => {
    render(<App/> );
//      const asyncData = await screen.findByText(/housing/i)
//      const asyncData = await screen.findByTestId('radarData')
    const asyncData = await screen.findByText(/i-should-fail/i)

    expect(asyncData).toBeVisible();
//    expect(asyncData.textContent).toContain('i should fail')

  })
