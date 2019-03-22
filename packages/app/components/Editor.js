import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Highlight, { Prism } from 'prism-react-renderer';
import CodeEditor from 'react-simple-code-editor';

import { color, fontFamily, fontSize, theme } from '../shared/constants';

const Pre = styled.pre`
  background: linear-gradient(
    to right,
    ${color.codGrey},
    ${color.codGrey} 50px,
    ${color.black} 50px,
    ${color.black}
  );
`;

const Line = styled.div`
  line-height: 24px;
  font-size: ${fontSize.medium};
  font-family: ${fontFamily.monospace};
`;

const Gutter = styled.span`
  width: 50px;
  text-align: right;
  margin: 0 15px 0 0;
  padding: 0 15px 0 0;
  display: inline-block;
  color: ${color.dustyGrey};
`;

const Token = styled.span``;

function Editor({ value, language }) {
  return (
    <CodeEditor
      value={value}
      highlight={(code) => (
        <Highlight Prism={Prism} code={code} language={language} theme={theme}>
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <Pre style={style}>
              {tokens.map((line, i) => (
                <Line {...getLineProps({ line, key: i })}>
                  <Gutter>{i}</Gutter>
                  {line.map((token, key) => (
                    <Token {...getTokenProps({ token, key })} />
                  ))}
                </Line>
              ))}
            </Pre>
          )}
        </Highlight>
      )}
    />
  );
}

Editor.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default Editor;
