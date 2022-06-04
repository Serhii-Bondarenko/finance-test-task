import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';

import './QuotesTable.css';
import { API } from '../../config';
import { setData } from '../../store';
import { Quote } from '../../components';

const QuotesTable = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state['appReducer']);

    const tableRef = useRef();
    const [flag, setFlag] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const socket = io(API);

        if (flag) {
            socket.removeAllListeners('ticker');
            tableRef.current.style.opacity = '60%';
            return;
        }

        tableRef.current.style.opacity = null;
        socket.emit('start');
        socket.on('ticker', (data) => {
            dispatch(setData({ data }));
        });

        return () => {
            socket.disconnect();
        };
    }, [flag]);

    useEffect(() => {
        const preload = setTimeout(() => {
            setActive(true);
        }, 5000);
        return () => clearTimeout(preload);
    }, []);

    return (
        <div data-testid="table" className="wrap-table" ref={tableRef}>
            {
                <div className="table">
                    {data.map((value, index) => (
                        <Quote key={value.ticker} value={value} index={index} active={active} />
                    ))}
                    <button className="btn" onClick={() => setFlag(!flag)}>
                        {flag ? 'PLAY' : 'PAUSE'}
                    </button>
                </div>
            }
        </div>
    );
};

export { QuotesTable };
