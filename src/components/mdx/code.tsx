import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import * as React from 'react'
import styled, { css } from 'styled-components/macro'

const RE = /{([\d,-]+)}/

const wrapperStyles = css`
  margin-left: -40px;
  margin-right: -40px;
`

const CodeWrapper = styled.pre`
  ::before {
    content: '${props => props['data-language']}';
  }
`

const preStyles = css`
  float: left;
  min-width: 100%;
  width: 100%;
  overflow: auto;
  padding: 10px 10px !important;
  border-radius: 10px;
`

function calculateLinesToHighlight(meta) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(',')
      .map(v => v.split('-').map(y => parseInt(y, 10)))
    return index => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      )
      return inRange
    }
  } else {
    return () => false
  }
}

function Code({ codeString, language, metastring }) {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={nightOwl}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="relative gatsby-highlight" css={wrapperStyles}>
          <CodeWrapper
            className={className}
            style={style}
            css={preStyles}
            data-language={language}
          >
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({
                  line,
                  key: i,
                  className: shouldHighlightLine(i) ? 'highlight-line' : '',
                })}
              >
                <span
                  css={`
                    display: inline-block;
                    width: 2em;
                    user-select: none;
                    opacity: 0.3;
                  `}
                >
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </CodeWrapper>
        </div>
      )}
    </Highlight>
  )
}

export default Code
