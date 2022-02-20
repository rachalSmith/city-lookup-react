import InputField from '../InputField';

import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event';

const mockFunc = jest.fn()

describe('InputField Component', () => {

  it('should render an input field', () => {
    render(<InputField onSubmit={mockFunc} cityNames={['liverpool', 'london']}/>);
    const inputField = screen.getByLabelText('Search');
    expect(inputField).toHaveAttribute('name', 'input-field');
  })
})


describe('text inside the input field', () => {

  it('should display the text inside the input field when typing', () => {
    render(<InputField onSubmit={mockFunc} cityNames={['liverpool', 'london']} />);
    const inputField = screen.getByPlaceholderText(/e.g. Manchester/i);
    const input = "manchester";
    fireEvent.change(inputField, {
      value: input
    })
    expect(inputField.value).toBeVisible;
  })


  it('should clear text from the input field after find button is pressed', () => {
    render(<InputField onSubmit={mockFunc} cityNames={['liverpool', 'london']}/>);
    const inputField = screen.getByPlaceholderText(/e.g. Manchester/i);
    const buttonElement = screen.getByRole('button', {name: /Find/i});
    const input = "manchester";

    fireEvent.change(inputField, {
      value: input
    })
    fireEvent.click(buttonElement);

    expect(inputField.value).toBe('');
  })
})

describe('Suggestions box', () => {

  it('should not show suggestions when the input field is empty', () => {
    render(<InputField onSubmit={mockFunc} cityNames={['liverpool', 'london']} />);
    const inputField = screen.getByPlaceholderText(/e.g. Manchester/i);
    const input = "";
    const suggestionsElement = screen.queryByTestId('suggestions');

    fireEvent.change(inputField, {
      value: input
    })

    expect(suggestionsElement).not.toBeInTheDocument();
  })


  it('should not show suggestions when the input field is empty', () => {
    render(<InputField onSubmit={mockFunc} cityNames={['liverpool', 'london']} />);
    const inputField = screen.getByPlaceholderText(/e.g. Manchester/i);

    userEvent.type(inputField, 'liverpool');

    // suggestionElepment queried after userEvent because of conditional rendering
    const suggestionsElement = screen.queryByTestId('suggestions');

    expect(suggestionsElement).toBeInTheDocument();
  })
})

// PROPERLY MOCK PROPS THAT ARE COMING FROM API
// it('should display suggestions based on the users input', () => {})