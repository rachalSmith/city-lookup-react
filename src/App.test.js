import { render, screen } from '@testing-library/react';
import App from './App';

it('renders the Header component', () => {
  render(<App />);
  const headerComponent = screen.getByRole('heading');
  expect(headerComponent).toBeInTheDocument();
});

it('renders the InputField component', () => {
  render(<App />);
  const InputFieldComponent = screen.getByText('input field');
  expect(InputFieldComponent).toBeInTheDocument();
});

it('renders the RadarChart component', () => {
  render(<App />);
  const RadarChartComponent = screen.getByText('Radar Chart');
  expect(RadarChartComponent).toBeInTheDocument();
});

it('renders the AverageCalculation component', () => {
  render(<App />);
  const avCalcComponent = screen.getByText('Average Calculation');
  expect(avCalcComponent).toBeInTheDocument();
});
