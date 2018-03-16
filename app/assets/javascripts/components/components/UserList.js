import React, { Component } from 'react';
import {store} from '../store/Root'

class UserList extends Component {

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                console.log('get api response and calling dispatch')
                var action = {
                    type: 'ALL_USERS',
                    payload: json
                }
                store.dispatch(action)
            })
    }

    renderList() {
        if (!this.props.allUsers) {
            return (<div style={{ textAlign: 'center' }}>Select a user...</div>);
        }
        return this.props.users.map((user) => {
            return (
                <h4 className="intro"
                    key={user.id}
                    onClick={() => this.props.selectUser(user)}
                >
                    {user.first} {user.last}
                </h4>

            );
        });       
    }

    renderAllList() {
        if (!this.props.allUsers) {
            return (<div style={{ textAlign: 'center' }}>Select a user...</div>);
        }
        return this.props.allUsers.map((user) => {
            return (
                <h4 className="intro"
                    key={user.id}
                    onClick={() => this.props.selectUser(user)}
                >
                    {user.name}
                </h4>

            );
        });       
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                {this.renderList()}
                {this.renderAllList()}
            </div>
        );
    }
}

export default UserList;