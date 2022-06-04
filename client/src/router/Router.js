import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '../components';
import { NotFound, QuoteDetails, QuotesTable } from '../screens';

const Router = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout />}>
                <Route index element={<QuotesTable />} />
                <Route path={':quote'} element={<QuoteDetails />} />
                <Route path={'*'} element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export { Router };
