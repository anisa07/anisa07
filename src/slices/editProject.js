import { createSlice } from '@reduxjs/toolkit';
import { updateItems } from "../fakeData";

const initialState = {
    editProjectDescription: false,
    fields: {
        id: '',
        text: '',
        description: ''
    }
};

const editProjectSlice = createSlice({
    name: 'editProject',
    initialState,
    reducers: {
        editDescription(state, action) {
            state.editProjectDescription = true;
            state.fields = action.payload;
        },
        updateState(state, action) {
            const {payload} = action;
            state.fields[payload.fieldName] = payload.fieldValue;
        },
        submitEditResult(state) {
            state.editProjectDescription = false;
        }
    }
});

export const fakeUpdateListItems = (item) =>{
    updateItems(item);
};


export const {
    updateState,
    submitEditResult,
    editDescription,
} = editProjectSlice.actions;

export default editProjectSlice.reducer;
