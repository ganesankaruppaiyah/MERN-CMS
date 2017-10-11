import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserList from '../UserList';
import {fetchUsers, deleteUser} from '../../../actions/UserActions'
class UserListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div className="wrapper">
        <h1>List of Users</h1>
        <UserList users={this.props.users} loading={this.props.loading} errors={this.props.errors} deleteUser={this.props.deleteUser}/>
      </div>
    )
  }
}
// Make users  array available in  props
function mapStateToProps(state) {
  return {
    users: state.userStore.users,
    loading: state.userStore.loading,
    errors: state.userStore.errors
  }
}
export default connect(mapStateToProps, {fetchUsers, deleteUser})(UserListPage);
