import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                    <h2>{this.props.user.first} {this.props.user.last}</h2>
                    <h3>Location: {this.props.user.location}</h3>
                    <h3>Description: {this.props.user.description}</h3>
                </div>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
