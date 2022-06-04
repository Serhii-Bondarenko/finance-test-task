import { screen } from '@testing-library/react';

import { renderTestApp } from './test-helpers';

test('App has been started', () => {
    renderTestApp(null);
    const linkElement = screen.getByText(/QUOTES FINANCE/i);
    expect(linkElement).toBeInTheDocument();
});
