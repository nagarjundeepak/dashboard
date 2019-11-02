import {combineReducers} from 'redux';

import users from './userReducer';
import activities from './activityReducer';
import dates from './dateReducer';
import filter from './filterReducer';

const RootReducer = combineReducers ({users, activities, dates, filter});

export default RootReducer;
