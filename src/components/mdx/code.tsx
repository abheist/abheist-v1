import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import * as React from 'react'
import Confetti from 'react-dom-confetti'
import styled, { css } from 'styled-components/macro'

const RE = /{([\d,-]+)}/

const wrapperStyles = css`
  margin-left: -40px;
  margin-right: -40px;
`

const CodeWrapper = styled.pre`
  float: left;
  min-width: 100%;
  width: 100%;
  overflow: auto;
  padding: 10px 10px !important;
  border-radius: 10px;
  ::before {
    content: '${props => props['data-language']}';
  }
`

const confettiConfig = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: '10px',
  height: '10px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
}

const Button = props => (
  <button
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
      border: 'none',
      boxShadow: 'none',
      textDecoration: 'none',
      margin: '8px',
      padding: '8px 12px',
      background: '#1966ca',
      borderRadius: '8px',
      cursor: 'pointer',
      color: '#E2E8F0',
      fontSize: '14px',
      fontFamily: 'sans-serif',
      lineHeight: '1',
    }}
    {...props}
  />
)

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
  const [isCopied, setIsCopied] = React.useState(false)
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  const copyToClipboard = str => {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

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
            data-language={language}
          >
            <Button
              onClick={() => {
                copyToClipboard(codeString)
                setIsCopied(true)
                setTimeout(() => setIsCopied(false), 3000)
              }}
            >
              <Confetti active={isCopied} config={confettiConfig} />
              {isCopied ? '🎉 Copied!' : 'Copy'}
            </Button>
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
