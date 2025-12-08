import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders the component without crashing', async () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/design architecture/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'loading' });
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByRole('status'));
  });

  test('renders error message if fetching data fails', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      status: 'error',
      error: new Error('Failed to fetch data'),
    });
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByText(/failed to fetch/i));
  });

  test('handles user interaction with buttons', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success' });
    const { getByRole } = render(<DesignArchitectureComponent />);
    fireEvent.click(getByRole('button', { name: /submit/i }));
    await waitFor(() => screen.getByText(/submitted successfully/i));
  });

  test('validates form inputs and displays error messages', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success' });
    const { getByRole, getByPlaceholderText } = render(<DesignArchitectureComponent />);
    fireEvent.change(getByPlaceholderText(/input placeholder/i), { target: { value: '' } });
    fireEvent.click(getByRole('button', { name: /submit/i }));
    await waitFor(() => screen.getByText(/required field/i));
  });

  test('ensures component is accessible', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success' });
    render(<DesignArchitectureComponent />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label');
    expect(button).toBeVisible();
  });

  test('handles edge cases such as empty data', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success', data: [] });
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByText(/no data available/i));
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders the component without crashing', async () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/design architecture/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'loading' });
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByRole('status'));
  });

  test('renders error message if fetching data fails', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      status: 'error',
      error: new Error('Failed to fetch data'),
    });
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByText(/failed to fetch/i));
  });

  test('handles user interaction with buttons', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success' });
    const { getByRole } = render(<DesignArchitectureComponent />);
    fireEvent.click(getByRole('button', { name: /submit/i }));
    await waitFor(() => screen.getByText(/submitted successfully/i));
  });

  test('validates form inputs and displays error messages', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success' });
    const { getByRole, getByPlaceholderText } = render(<DesignArchitectureComponent />);
    fireEvent.change(getByPlaceholderText(/input placeholder/i), { target: { value: '' } });
    fireEvent.click(getByRole('button', { name: /submit/i }));
    await waitFor(() => screen.getByText(/required field/i));
  });

  test('ensures component is accessible', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success' });
    render(<DesignArchitectureComponent />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label');
    expect(button).toBeVisible();
  });

  test('handles edge cases such as empty data', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success', data: [] });
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByText(/no data available/i));
  });
});