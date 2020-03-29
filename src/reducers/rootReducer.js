import { combineReducers } from '@reduxjs/toolkit'
import projectsListReducer from '../slices/projectsList';
import editProjectReducer from '../slices/editProject';

const rootReducer = combineReducers({
    projectsList: projectsListReducer,
    editProject: editProjectReducer
});

export default rootReducer;

