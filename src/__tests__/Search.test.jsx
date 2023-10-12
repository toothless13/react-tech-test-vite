import { render, screen } from '@testing-library/react';
import Search from '../components/Search';

describe('Search', () => {
  const validProps = {
    setSearchResults: jest.fn()
  }

  it('renders correctly', () => {
    const { asFragment } = render(<Search setSearchResults={validProps}/>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a search button', () => {
    render(<Search setSearchResults={validProps} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Search');
  });
});