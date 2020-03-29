import { createSlice } from '@reduxjs/toolkit'
import { items } from "../fakeData";

const initialState = {
    listItems: {},
    listItemsNums: [],
    showDetail: false,
    detailItemId: ''
};

const projectsListSlice = createSlice({
    name: 'projectsList',
    initialState: initialState,
    reducers: {
        getList(state, action) {
            const { items } = action.payload;
            items.forEach(item => {
                state.listItems[item.id] = item;
            });
            state.listItemsNums = items.map(item => item.id);
        },
        getItem(state, action) {
            state.showDetail = true;
            state.detailItemId = action.payload;
        },
        hideItem(state) {
            state.showDetail = false;
            state.detailItemId = '';
        }
    }
});

export const {
    getList,
    getItem,
    hideItem
} = projectsListSlice.actions;


export const fakeFetchListItems = () => (dispatch) =>{
    setTimeout(() => {
        dispatch(getList({items}));
    }, 500);
};

export default projectsListSlice.reducer;

