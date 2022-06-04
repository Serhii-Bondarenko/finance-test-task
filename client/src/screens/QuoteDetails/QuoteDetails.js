import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import './QuoteDetails.css';
import { Quote } from '../../components';

const QuoteDetails = () => {
    dayjs.extend(utc);

    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!state) {
            navigate('/', { replace: true });
        }
    }, []);

    const prevPrice = state?.grow
        ? Number(state?.price) - state?.change
        : Number(state?.price) + state?.change;

    return (
        <>
            {state && (
                <div className="wrap-details">
                    <div className="details-info">
                        <h3>Exchange by {state.exchange}</h3>
                        <p>
                            At {dayjs(state.last_trade_time).utc().format('hh:mm:ssA YYYY.MM.DD')}
                        </p>
                    </div>
                    <div className="current-state">
                        <Quote value={state} prevPrice={prevPrice} />
                    </div>
                    <div className="add-info">
                        <div>dividend: {state.dividend}</div>
                        <div>yield: {state.yield}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export { QuoteDetails };
