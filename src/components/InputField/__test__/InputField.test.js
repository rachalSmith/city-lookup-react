import InputField from '../InputField';

import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";



  describe('InputField Component', () => {
    it('should render an input field', () => {
      render(<InputField />);
      const inputField = screen.getByLabelText('Search');
      expect(inputField).toHaveAttribute('name', 'input-field');
    })
  })
