import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Form} from 'semantic-ui-react';
import classnames from 'classnames';
const validate = (values) => {
  const errors = {
    title: {}
  };
  if (!values.title) {
    errors.title = {
      message: 'Title Required'
    }
  }
  if (!values.body.snippet) {
    errors.body.snippet = {
      message: 'introductory paragraph required'
    }
  }
  return errors;
}
class BlogEditor extends Component {
  componentWillReceiveProps = (nextProps) => { //async load
    const {blogPost} = nextProps;
    if (blogPost._id !== this.props.blogPost._id) {
      this.props.initialize(blogPost)
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
    const {handleSubmit, pristine, submitting, loading, blogPost} = this.props;
    return (
      <div className="wrapper">
        <h1>{blogPost._id
            ? 'Edit Contact'
            : 'Add New Contact'}</h1>
        <Form onSubmit={handleSubmit} loading={loading}>
         <h2 className="blogTitle">
          <Field name="title" type="text" component={this.renderField} label="Title"/>
         </h2>
         <div className="blogBody">
          <Field name="body.snippet" className="teaser" type="text" component={this.renderField} label="teaser"/>
          <Field name="body.bulk" type="text" component={this.renderField}/>
         </div>
        </Form>
      </div>
    )
  }
}
export default reduxForm({
  form: 'blogPost',
  validate
})(BlogEditor);
