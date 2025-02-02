import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "users",
    initialState: {
        names: [],

    },
    reducers: {
        setUsers: (state, action) => {
            state.names = action.payload;
        },
    },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
