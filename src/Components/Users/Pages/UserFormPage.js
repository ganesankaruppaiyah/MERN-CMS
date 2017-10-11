import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {SubmissionError} from 'redux-form';
import {connect} from 'react-redux';
import {newUser, saveUser, fetchUser, updateUser} from '../../../actions/UserActions'
import UserForm from '../UserForm';

class UserFormPage extends Component {
	state = {
		redirect: false
	}
	componentDidMount = () => {
		const {_id} = this.props.match.params;
		if (_id) {
			this.props.fetchUser(_id)
		} else {
			this.props.newUser();
		}
	}
	submit = (user) => {
		if (!user._id) {
			return this.props.saveUser(user).then(response => this.setState({redirect: true})).catch(err => {
				throw new SubmissionError(this.props.errors)
			})
		} else {
			return this.props.updateUser(user).then(response => this.setState({redirect: true})).catch(err => {
				throw new SubmissionError(this.props.errors)
			})
		}
	}
	render() {
		return (
			<div className="wrapper">
				{this.state.redirect
					? <Redirect to="/users"/>
					: <UserForm user={this.props.user} loading={this.props.loading} onSubmit={this.submit}/>}
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {user: state.userStore.user, errors: state.userStore.errors}
}
export default connect(mapStateToProps, {newUser, saveUser, fetchUser, updateUser})(UserFormPage);
