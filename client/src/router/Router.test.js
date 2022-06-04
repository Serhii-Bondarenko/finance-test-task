import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import { renderTestApp, renderWithRouter } from '../test-helpers';

describe('TEST ROUTER', () => {
    test('Move to home page', () => {
        renderTestApp(<App />);
        const home = screen.getByTestId('home-link');
        userEvent.click(home);
        expect(screen.getByTestId('table')).toBeInTheDocument();
    });

    test('Not found page test', () => {
        renderWithRouter(<App />, '/FB/asfasfafasf');
        expect(screen.getByTestId('not-found')).toBeInTheDocument();
    });
});
