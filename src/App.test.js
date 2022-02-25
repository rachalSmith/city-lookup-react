import App from './App'

import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";


import { server, rest } from './testServer'

it('should do some async stuff with mocking', async () => {
    render(<App />)
    const avScore = await screen.findByTestId('av-score');
    expect(avScore).toBeInTheDocument();
})
















// it('should have an initial state of null/undefined for cityQuery', () => {})
// it('should clean the input field text to lowercase, no trailling space and any space in the middle with a hyphen', () => {})
// it('should make the api call with the text input', () => {})
// it('should only make the api call after text is inputed', () => {})
// it('should only make the api call once after the text input', () => {})
// it('should parse the data so there is only 6 categories returned', () => {})
// it('should parse the city data so numbers are rounded to one decimal point', () => {})
// it('should parse an average score and return to one decimal point', () => {})