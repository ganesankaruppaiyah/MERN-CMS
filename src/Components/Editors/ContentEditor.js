/* eslint-disable */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Editor, EditorState,convertToRaw} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';

class ContentEditor extends Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    editorState: EditorState.createEmpty()
  }

  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    this.setState({editorState});
    if (this.props.onChange) {
      let html = stateToHTML(contentState);
      this.props.onChange(
        html
      );
    }
  };

  render () {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
      />
    );
  }
}
export default ContentEditor;
