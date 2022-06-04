import React from 'react';
import { Link } from 'react-router-dom';

import './Quote.css';

const Quote = ({ value, index, prevPrice, active }) => {
    const { ticker, price, change, change_percent } = value;
    const names = ['Apple', 'Alphabet', 'Microsoft', 'Amazon', 'Facebook', 'Tesla'];

    const hideRow = (e) => {
        e.target.classList.toggle('rotate');
        e.target.nextElementSibling.classList.toggle('hide');
    };

    return (
        <div className="table-row">
            {!prevPrice && <i className="fas fa-chevron-up" onClick={(e) => hideRow(e)} />}
            <Link
                data-testid="details-link"
                to={`${value.ticker}`}
                state={value}
                className="inner-block"
                style={{ pointerEvents: active ? 'auto' : 'none' }}
            >
                <div className="table-column quote-icon">{ticker}</div>
                {prevPrice ? (
                    <div className="table-column quote-prev">
                        Prev price: {typeof prevPrice === 'string' ? 'null' : prevPrice.toFixed(2)}
                    </div>
                ) : (
                    <div className="table-column quote-name">{names[index]}</div>
                )}
                <div className="table-column quote-price">{price} $</div>
                <div
                    className="table-column quote-change"
                    style={{ color: value.grow ? 'green' : 'darkred' }}
                >
                    {value.grow ? '+' : '-'} {Number(change).toFixed(2)}$
                </div>
                <div className={value.grow ? 'grow' : 'fall'}>
                    {Number(change_percent).toFixed(2)}%
                </div>
            </Link>
            <hr />
        </div>
    );
};

export { Quote };
