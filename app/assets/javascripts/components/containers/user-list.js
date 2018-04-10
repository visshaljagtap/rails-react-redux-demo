import { connect } from 'react-redux';
import { selectUser } from '../actions'
import { Link } from 'react-router-dom'
import UserList from '../components/UserList'
import {employeesFetch} from '../actions'

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users,
        allUsers: state.allUsers
    };
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, {selectUser, employeesFetch})(UserList);
