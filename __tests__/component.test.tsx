import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mocking external dependencies
jest.mock('./ExternalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with initial loading state', async () => {
    // Arrange
    (useExternalService as jest.Mock).mockReturnValue({ data: null, isLoading: true });

    // Act & Assert
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders component with error message when loading fails', async () => {
    // Arrange
    (useExternalService as jest.Mock).mockReturnValue({ data: null, isLoading: false, error: 'Error fetching data' });

    // Act & Assert
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  test('renders component with fetched data', async () => {
    // Arrange
    const mockData = { id: 1, name: 'Product Name', price: 20.5 };
    (useExternalService as jest.Mock).mockReturnValue({ data: mockData, isLoading: false, error: null });

    // Act & Assert
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/product name/i)).toBeInTheDocument();
    expect(screen.getByText(/price: 20.50/i)).toBeInTheDocument();
  });

  test('handles user interaction to add product to cart', async () => {
    // Arrange
    const mockData = { id: 1, name: 'Product Name' };
    (useExternalService as jest.Mock).mockReturnValue({ data: mockData, isLoading: false, error: null });
    
    render(<CoreFunctionalityComponent />);
    
    // Act & Assert
    fireEvent.click(screen.getByText(/add to cart/i));
    expect(window.alert).toHaveBeenCalledWith('Added Product Name to cart');
  });

  test('handles edge case where product is already in cart', async () => {
    // Arrange
    const mockData = { id: 1, name: 'Product Name' };
    (useExternalService as jest.Mock).mockReturnValue({ data: mockData, isLoading: false, error: null });
    
    render(<CoreFunctionalityComponent />);
    
    // Act & Assert
    fireEvent.click(screen.getByText(/add to cart/i));
    fireEvent.click(screen.getByText(/already in cart/i));
    expect(window.alert).toHaveBeenCalledWith('Product Name is already in your cart');
  });

  test('component meets accessibility standards', () => {
    // Arrange & Act
    render(<CoreFunctionalityComponent />);
    
    // Assert
    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
  });

  test('component handles user interaction with keyboard navigation', () => {
    // Arrange & Act
    render(<CoreFunctionalityComponent />);
    
    const button = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.keyDown(button, { key: 'Enter' });

    // Assert
    expect(window.alert).toHaveBeenCalledWith('Added Product Name to cart');
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mocking external dependencies
jest.mock('./ExternalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with initial loading state', async () => {
    // Arrange
    (useExternalService as jest.Mock).mockReturnValue({ data: null, isLoading: true });

    // Act & Assert
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders component with error message when loading fails', async () => {
    // Arrange
    (useExternalService as jest.Mock).mockReturnValue({ data: null, isLoading: false, error: 'Error fetching data' });

    // Act & Assert
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  test('renders component with fetched data', async () => {
    // Arrange
    const mockData = { id: 1, name: 'Product Name', price: 20.5 };
    (useExternalService as jest.Mock).mockReturnValue({ data: mockData, isLoading: false, error: null });

    // Act & Assert
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/product name/i)).toBeInTheDocument();
    expect(screen.getByText(/price: 20.50/i)).toBeInTheDocument();
  });

  test('handles user interaction to add product to cart', async () => {
    // Arrange
    const mockData = { id: 1, name: 'Product Name' };
    (useExternalService as jest.Mock).mockReturnValue({ data: mockData, isLoading: false, error: null });
    
    render(<CoreFunctionalityComponent />);
    
    // Act & Assert
    fireEvent.click(screen.getByText(/add to cart/i));
    expect(window.alert).toHaveBeenCalledWith('Added Product Name to cart');
  });

  test('handles edge case where product is already in cart', async () => {
    // Arrange
    const mockData = { id: 1, name: 'Product Name' };
    (useExternalService as jest.Mock).mockReturnValue({ data: mockData, isLoading: false, error: null });
    
    render(<CoreFunctionalityComponent />);
    
    // Act & Assert
    fireEvent.click(screen.getByText(/add to cart/i));
    fireEvent.click(screen.getByText(/already in cart/i));
    expect(window.alert).toHaveBeenCalledWith('Product Name is already in your cart');
  });

  test('component meets accessibility standards', () => {
    // Arrange & Act
    render(<CoreFunctionalityComponent />);
    
    // Assert
    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
  });

  test('component handles user interaction with keyboard navigation', () => {
    // Arrange & Act
    render(<CoreFunctionalityComponent />);
    
    const button = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.keyDown(button, { key: 'Enter' });

    // Assert
    expect(window.alert).toHaveBeenCalledWith('Added Product Name to cart');
  });
});