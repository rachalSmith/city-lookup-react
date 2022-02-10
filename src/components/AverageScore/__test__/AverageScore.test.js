import Averagescore from '../AverageScore';

import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";


it('Should render the AverageScore component', () => {
    render(<Averagescore avScore="2"/>);
    const avScoreComponent = screen.getByText(/Average score/i);
    expect(avScoreComponent).toBeVisible();
  });



  it('should render the avScore prop', () => {
    render(<Averagescore avScore="2"/>);
    const avScore = screen.getByText(/2/i);
    expect(avScore).toBeVisible();
  })




