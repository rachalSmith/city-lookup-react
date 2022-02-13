import Header from "../Header";

import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

const mockFunc = jest.fn()

it('should render the Header component', () => {
    render(<Header executeScroll={mockFunc}/>);
    const headerComponent = screen.getByRole('heading', {name: /City Score/i});
    expect(headerComponent).toBeVisible();
  })

  describe('arrow image', () => {
    it('should display an arrow image', () => {
      render(<Header executeScroll={mockFunc}/>);
      const arrowImage= screen.getByRole(/img/i);
      expect(arrowImage).toHaveAttribute('alt', "arrow");
    })
  })

  // it('should have an onClick attached to the arrow image', () => {})
  // it('should scroll down onclick', () => {})