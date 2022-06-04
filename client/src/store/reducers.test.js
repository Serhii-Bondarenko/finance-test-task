import appReducer, { setData } from './app.slice';

describe('TEST REDUX', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    ticker: 'GOOGL',
                    exchange: 'NASDAQ',
                    price: 100,
                    change: 0,
                    change_percent: 0,
                    dividend: 0.46,
                    yield: 1.18,
                    last_trade_time: '2021-04-30T11:53:21.000Z'
                },
                {
                    ticker: 'MSFT',
                    exchange: 'NASDAQ',
                    price: 100,
                    change: 0,
                    change_percent: 0,
                    dividend: 0.18,
                    yield: 0.98,
                    last_trade_time: '2021-04-30T11:53:21.000Z'
                },
                {
                    ticker: 'AMZN',
                    exchange: 'NASDAQ',
                    price: 100,
                    change: 0,
                    change_percent: 0,
                    dividend: 0.07,
                    yield: 0.42,
                    last_trade_time: '2021-04-30T11:53:21.000Z'
                }
            ]
        };
    });

    test('Initial state', () => {
        expect(appReducer({ data: [] }, setData({ data: response.data }))).toEqual({
            data: response.data
        });
    });

    test('Compare with prev state (grow true)', () => {
        expect(
            appReducer(
                { data: response.data },
                setData({
                    data: response.data.map((item) => {
                        return { ...item, price: Number(item.price) + 100 };
                    })
                })
            )
        ).toEqual({
            data: response.data.map((item) => {
                return { ...item, grow: true, price: 200, change: 100, change_percent: 100 };
            })
        });
    });

    test('Compare with prev state (grow false)', () => {
        expect(
            appReducer(
                { data: response.data },
                setData({
                    data: response.data.map((item) => {
                        return { ...item, price: Number(item.price) - 100 };
                    })
                })
            )
        ).toEqual({
            data: response.data.map((item) => {
                return { ...item, grow: false, price: 0, change: 100, change_percent: 100 };
            })
        });
    });

    test('Compare with prev state (without change)', () => {
        expect(appReducer({ data: response.data }, setData({ data: response.data }))).toEqual({
            data: response.data.map((item) => {
                return { ...item, grow: true };
            })
        });
    });
});
