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
  return errors;
}
class BlogPost extends Component {
  componentWillReceiveProps = (nextProps) => { //async load
    const {article} = nextProps;
    if (article._id !== this.props.article._id) {
      this.props.initialize(article)
    }
  }
  renderField = ({
    input,
    label,
    header,
    type,
    rows,
    cols,
    meta: {
      touched,
      error
    }
  }) => (
    <Form.Field className={classnames({
      error: touched && error
    })}>
      <label>{header}</label>
      <textarea rows={rows} cols={cols} {...input} placeholder={label} type={type}/> {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )
  render() {
    const {handleSubmit, pristine, submitting, loading, article} = this.props;
    return (
      <div className="wrapper">
        <h1>{article._id
            ? 'Edit Article'
            : 'Add New Article'}</h1>
        <Form onSubmit={handleSubmit} loading={loading}>
          <h2 className="blogTitle">
            <Field name="title" rows="1" header="title" type="text" component={this.renderField} label="Title"/>
          </h2>
          <div className="blogBody">
            <Field rows="4" cols="50" name="content.start" className="teaser" type="textarea" component={this.renderField} label="teaser"/>
            <Field rows="4" cols="50" name="content.full" className="teaser" type="textarea" component={this.renderField}/>
            <button className="greenBtn" type='submit' disabled={pristine || submitting}>Save</button>
          </div>
        </Form>
      </div>
    )
  }
}
export default reduxForm({form: 'article'})(BlogPost)
