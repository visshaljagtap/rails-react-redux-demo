import { combineReducers } from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import ImageReducer from './reducer-images'
import AllUsersReducer from './reducer-all-users'
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    images: ImageReducer,
    allUsers: AllUsersReducer
});

export default allReducers
