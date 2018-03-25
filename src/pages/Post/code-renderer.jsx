import React from 'react';
import Lowlight from 'react-lowlight';
import shallowCompare from 'react-addons-shallow-compare';
import js from 'highlight.js/lib/languages/javascript';

Lowlight.registerLanguage('js', js);

class CodeBlock extends React.Component {
  displayName = 'CodeBlock'

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render () {
    return (
      <Lowlight
        language={this.props.language || 'js'}
        value={this.props.literal}
        inline={this.props.inline}
      />
    )
  }
}

export default CodeBlock;
