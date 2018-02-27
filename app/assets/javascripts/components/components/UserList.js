import React, { Component } from 'react';

class UserList extends Component {
    renderList() {
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

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                {this.renderList()}
            </div>
        );
    }
}

export default UserList;