import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import classnames from 'classnames';
const validate = (values) => {
  const errors = {
    name: {}
  };
  if (!values.name || !values.name.first) {
    errors.name.first = {
      message: 'You need to provide First Name'
    }
  }
  if (!values.phone) {
    errors.phone = {
      message: 'You need to provide a Phone number'
    }
  } else if (!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values.phone)) {
    errors.phone = {
      message: 'Phone number must be in International format'
    }
  }
  if (!values.email) {
    errors.email = {
      message: 'You need to provide an Email address'
    }
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = {
      message: 'Invalid email address'
    }
  }
  return errors;
}
class UserForm extends Component {
  componentWillReceiveProps = (nextProps) => { // Load User Asynchronously
    const {user} = nextProps;
    if (user._id !== this.props.user._id) { // Initialize form only once
      this.props.initialize(user)
    }
  }
  renderField = ({
    input,
    label,
    type,
    meta: {
      touched,
      error
    }
  }) => (
    <Form.Field className={classnames({
      error: touched && error
    })}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/> {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )
  render() {
    const {handleSubmit, pristine, submitting, loading, user} = this.props;
    return (
        <div className="wrapper">
          <h1>{user._id
              ? 'Edit User'
              : 'Add New User'}</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <div className="menu">
              <Field name="name.first" className="menu-item" type="text" component={this.renderField} label="First Name"/>
              <Field name="name.last" className="menu-item" type="text" component={this.renderField} label="Last Name"/>
            </div>
            <p><Field name="phone" type="text" component={this.renderField} label="Phone"/></p>
            <p><Field name="email" type="text" component={this.renderField} label="Email"/></p>
            <button className="greenBtn" type='submit' disabled={pristine || submitting}>Save</button>
          </Form>
        </div>
    )
  }
}
export default reduxForm({form: 'user', validate})(UserForm);
