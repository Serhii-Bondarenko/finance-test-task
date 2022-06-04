import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import './Layout.css';

const Layout = () => {
    return (
        <div className="wrapper">
            <header>
                <Link data-testid="home-link" to={'/'}>
                    QUOTES FINANCE
                </Link>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export { Layout };
