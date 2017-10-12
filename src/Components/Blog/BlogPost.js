/* eslint-disable */
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Form} from 'semantic-ui-react';
import classnames from 'classnames';
import ContentEditor from '../Editors/ContentEditor';
const validate = (values) => {
  const errors = {
    name: {}
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
    meta: {
      touched,
      error
    }
  }) => (
    <Form.Field className={classnames({
      error: touched && error
    })}>
      <label>{header}</label>
      <ContentEditor {...input} placeholder={label} type={type}/> {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )
  render() {
    const {handleSubmit, pristine, submitting, loading, article} = this.props;
    return (
      <div className="wrapper">
        <h1>{article._id
            ? 'Edit Article'
            : 'Add New Article'}</h1>
        <div className="article">
          <Form onSubmit={handleSubmit} loading={loading}>
            <h2 className="articleTitle">
              <Field name="title" header="title" type="text" component={this.renderField} label="Title"/>
            </h2>
            <div className="articleBody">
            <Field name="content" type="text" component={this.renderField} label="teaser"/>
            </div>
            <button className="greenBtn" type='submit'>Save</button>
          </Form>
        </div>
      </div>
    )
  }
}
export default reduxForm({form: 'article'})(BlogPost)
