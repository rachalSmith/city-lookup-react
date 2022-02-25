import RadarChart from '../RadarChart';

import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";


it('Should render the RadarChart component', () => {
    render(<RadarChart city={'manchester'}/>);
    const radarChartComponent = screen.getByText(/Scores for/i);
    expect(radarChartComponent).toBeVisible();
});

// it('should initially not display a city name', () => {})

// it('should convert the city name to have an uppercase for the first letter', () => {})

// it('should display a city name after a city has been entered into the input field', () => {})
