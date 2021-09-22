import { createSlice } from '@reduxjs/toolkit';

export const editSlice = createSlice({
    name: "edit",
    initialState: { id: '' },
    reducers: {
        edit: (state, action) => {
            state.id = action.payload.id;
        }
    }
});

export const { edit } = editSlice.actions;
export default editSlice.reducer;