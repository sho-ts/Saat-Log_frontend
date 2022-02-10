import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './index.page';

it('Should render hello text', () => {
  render(<Home />)
  expect(screen.getByText('Home')).toBeInTheDocument()
})