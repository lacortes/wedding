import { render, screen } from '@testing-library/react';
import React from 'react';
import ComingSoon from '../ComingSoon';

test('First Test', () => {
    render(<ComingSoon />);

    expect(screen.getByText(/coming soon/i)).toBeVisible();
});