import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
// require('../../../stylesheets/   application.css');

var styles = {
    color:'deepskyblue',
    textAlign: 'center'
};

const App = () => (
    <div>
        <h2 style={styles}>User List</h2>
        <UserList />
        <hr />
        <h2 style={styles}>User Details</h2>
        <UserDetails />
    </div>
);

export default App;
