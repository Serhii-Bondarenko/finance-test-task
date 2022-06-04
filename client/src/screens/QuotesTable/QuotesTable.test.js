import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderTestApp } from '../../test-helpers';

describe('TEST EVENT', () => {
    test('Opacity true', () => {
        renderTestApp(null);
        const btn = screen.getByRole('button');
        const table = screen.getByTestId('table');
        userEvent.click(btn);
        expect(table).toHaveStyle({ opacity: '60%' });
    });
});
