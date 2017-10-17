/* eslint-disable */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Editor,
  EditorState,
  convertToRaw,
  convertFromRaw,
  RichUtils,
  ContentState
} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import {fetchBlogPost} from '../../actions/BlogActions';
class PageBuilder extends Component {
  static PropTypes = {
    onChange: PropTypes.func
  };
  state = {
    editorState: EditorState.createEmpty()
  }
  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }
  _onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }
  _onItaClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }
  _onUndClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }
  setDomEditorRef = (ref) => {
    this.domEditor = ref;
  }
  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    this.setState({editorState});
    if (this.props.onChange) {
      this.props.onChange(contentState);
    }
  };
  componentDidMount() {

}
  render() {
    return (
      <div>
        <div className='editBox' onMouseDown={(e) => e.preventDefault()}>
          <span className='editCtrl' onClick={this._onBoldClick.bind(this)}>b</span>
          <span className='editCtrl' onClick={this._onUndClick.bind(this)}>u</span>
          <span className='editCtrl' onClick={this._onItaClick.bind(this)}>i</span>
        </div>
        <Editor editorState={this.state.editorState} onChange={this.onChange} handleKeyCommand={this.handleKeyCommand} ref={this.setDomEditorRef}/>
      </div>
    );
  }
}
export default PageBuilder;
