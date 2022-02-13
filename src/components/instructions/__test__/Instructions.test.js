import Instructions from '../Instructions';

import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";


it('should render the Instructions component', () => {
    render(<Instructions totalCities={5}/>);
    const instructionsComponent = screen.getByText(/Search/i);
    expect(instructionsComponent).toBeVisible();
})


it('should render the total cities prop', () => {
    render(<Instructions totalCities={5}/>);
    const totalCities = screen.getByText(/5/i);
    expect(totalCities).toBeVisible();
})
