import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'appSlice',

    initialState: {
        data: []
    },

    reducers: {
        setData: (state, action) => {
            if (!state.data.length) {
                state.data = action.payload.data;

                return;
            }

            state.data = action.payload.data.map((currentState, index) => {
                const prevState = state.data[index];

                if (currentState.price < prevState.price) {
                    const change = Number(prevState.price) - Number(currentState.price);
                    const change_percent = (change / Number(prevState.price)) * 100;
                    return { ...currentState, grow: false, change, change_percent };
                }

                const change = Number(currentState.price) - Number(prevState.price);
                const change_percent = (change / Number(prevState.price)) * 100;
                return { ...currentState, grow: true, change, change_percent };
            });
        }
    }
});

const appReducer = appSlice.reducer;

export default appReducer;

export const { setData } = appSlice.actions;
