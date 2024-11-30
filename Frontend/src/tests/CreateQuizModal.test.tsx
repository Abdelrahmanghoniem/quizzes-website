import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateQuizModal from '../components/CreateQuizModal';
import { BASE_URL } from '../constants/BaseUrl';


// Mocking fetch to avoid actual API calls
jest.mock('../constants/BaseUrl', () => ({
    BASE_URL: 'http://mockedurl.com'
  }));
  
  describe('CreateQuizModal', () => {
    let onCloseMock: jest.Mock;
  
    beforeEach(() => {
      onCloseMock = jest.fn();
    });
  
    test('renders modal and form fields', () => {
      render(<CreateQuizModal onClose={onCloseMock} />);
  
      expect(screen.getByLabelText(/ID/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Instructor Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
      expect(screen.getByText(/Create/)).toBeInTheDocument();
      expect(screen.getByText(/Cancel/)).toBeInTheDocument();
    });
  
    test('shows error message if fields are missing', async () => {
      render(<CreateQuizModal onClose={onCloseMock} />);
  
      fireEvent.click(screen.getByText(/Create/)); // Click create button to trigger validation
  
      await waitFor(() => expect(screen.getByText(/All fields are required./)).toBeInTheDocument());
    });
  
    test('submits the form and calls onClose on success', async () => {
      render(<CreateQuizModal onClose={onCloseMock} />);
  
      // Fill out the form
      fireEvent.change(screen.getByLabelText(/ID/i), { target: { value: '123' } });
      fireEvent.change(screen.getByLabelText(/Instructor Name/i), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/Subject/i), { target: { value: 'Math' } });
      fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'A fun quiz' } });
  
      // Mock the fetch API response
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
      });
  
      // Submit the form
      fireEvent.click(screen.getByText(/Create/));
  
      // Wait for modal to close after successful submit
      await waitFor(() => expect(onCloseMock).toHaveBeenCalledTimes(1));
      expect(screen.queryByText(/All fields are required./)).not.toBeInTheDocument();
    });
  
    test('displays error message if API call fails', async () => {
      render(<CreateQuizModal onClose={onCloseMock} />);
  
      // Fill out the form
      fireEvent.change(screen.getByLabelText(/ID/i), { target: { value: '123' } });
      fireEvent.change(screen.getByLabelText(/Instructor Name/i), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/Subject/i), { target: { value: 'Math' } });
      fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'A fun quiz' } });
  
      // Mock the fetch API to simulate a failed response
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
  
      // Submit the form
      fireEvent.click(screen.getByText(/Create/));
  
      // Wait for the error message to appear
      await waitFor(() => expect(screen.getByText(/Failed to create quiz. Please try again./)).toBeInTheDocument());
    });
  
    test('closes modal when Cancel button is clicked', () => {
      render(<CreateQuizModal onClose={onCloseMock} />);
  
      fireEvent.click(screen.getByText(/Cancel/));
  
      // Check if onClose is called when cancel button is clicked
      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
  });
  