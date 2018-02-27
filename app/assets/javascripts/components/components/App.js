import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import Header from './Header'

const App = () => (
    <div>
        <Header />
        <h2 className="sub-header sub-header-top">User List</h2>
        <UserList />
        <hr />
        <h2 className="sub-header">User Details</h2>
        <UserDetails />
    </div>
);

export default App;
