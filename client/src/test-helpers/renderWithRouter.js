import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export const renderWithRouter = (component, initialRoute = '/') => {
    return render(<MemoryRouter initialEntries={[initialRoute]}>{component}</MemoryRouter>);
};
