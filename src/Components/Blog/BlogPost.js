import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Form} from 'semantic-ui-react';
import classnames from 'classnames';
import {Editor, EditorState, RichUtils} from 'draft-js';
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
      <textarea {...input} rows={rows} cols={cols} placeholder={label} type={type}/> {touched && error && <span className="error">{error.message}</span>}
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
            <h2 className="blogTitle">
              <Field name="title" rows="1" header="title" type="text" component={this.renderField} label="Title"/>
            </h2>
            <Field rows="4" cols="50" name="content.start" className="teaser" type="text" component={this.renderField} label="teaser"/>
            <Field rows="4" cols="50" name="content.full" className="teaser" type="text" component={this.renderField}/>
            <button className="greenBtn" type='submit' disabled={pristine || submitting}>Save</button>
          </Form>
        </div>
      </div>
    )
  }
}
export default reduxForm({form: 'article', validate})(BlogPost)
