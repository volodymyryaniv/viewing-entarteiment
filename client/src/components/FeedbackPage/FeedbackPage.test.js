import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeedbackPage from './FeedbackPage';

describe('<FeedbackPage />', () => {
  test('it should mount', () => {
    render(<FeedbackPage />);
    
    const feedbackPage = screen.getByTestId('FeedbackPage');

    expect(feedbackPage).toBeInTheDocument();
  });
});