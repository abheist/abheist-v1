import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import * as React from 'react'
import Confetti from 'react-dom-confetti'
import styled, { css } from 'styled-components/macro'
import tw from 'twin.macro'

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
  ${tw`rounded`}
  ::before {
    content: '${props => props['data-language']}';
    ${tw`bg-red-900 rounded text-gray-800 bg-yellow-500 text-xs tracking-wide px-2 py-0.5 absolute left-8 text-center uppercase top-3`}
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
    className="absolute right-2 bg-indigo-200 border-none px-2 py-0.5 rounded bg-opacity-50 text-white text-xs top-8 hover:bg-indigo-400"
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
