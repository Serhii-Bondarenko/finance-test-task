import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import store from '../store/store.config';
import { Router } from '../router';

export const renderTestApp = (component, route) => {
    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[route]}>
                <Router />
                {component}
            </MemoryRouter>
        </Provider>
    );
};
