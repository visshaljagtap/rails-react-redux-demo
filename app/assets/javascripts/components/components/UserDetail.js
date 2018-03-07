import React, { Component } from 'react';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 **/

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div style={{ textAlign: 'center' }}>Select a user...</div>);
        }
        return (
            <div className="thumbnail" >
                <div className="image" >
                    <img src={this.props.user.thumbnail} />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h3>{this.props.user.first} {this.props.user.last}</h3>
                    <h4>Location: {this.props.user.location}</h4>
                    <h4>Description: {this.props.user.description}</h4>
                </div>
            </div>
        );
    }
}

export default UserDetail;
