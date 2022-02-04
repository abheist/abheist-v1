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
  box-shadow: 0 0px 12px -6px rgba(0, 24, 40, 0.3);
  ${tw`float-left w-full py-6`}
  ::before {
    content: '${props => props['data-language']}';
    ${tw`rounded-t-sm bg-red-900 rounded-b-lg text-gray-800 bg-yellow-500 text-xs tracking-wide px-2 py-0.5 absolute left-8 text-center uppercase -mt-5 z-10`}
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
      language={language.split(':')[0]}
      theme={nightOwl}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight relative" css={wrapperStyles}>
          <CodeWrapper
            className={className}
            style={style}
            data-language={language.split(':')[0]}
            css={`
              border-radius: ${language.split(':')[1]
                ? '0 0 0.375rem 0.375rem !important'
                : '0.375rem !important'};
            `}
          >
            {language.split(':')[1] && (
              <div
                className="absolute w-full rounded-t-lg bg-indigo-100 py-2 px-9 text-sm text-gray-800"
                css={`
                  margin-top: -52px;
                  box-shadow: 0 0px 12px -6px rgba(0, 24, 40, 0.3);
                `}
              >
                {language.split(':')[1]}
              </div>
            )}
            <button
              className="absolute right-3 -mt-1 rounded border-none bg-indigo-200 bg-opacity-50 px-2 py-0.5 text-xs text-white hover:bg-indigo-400"
              onClick={() => {
                copyToClipboard(codeString)
                setIsCopied(true)
                setTimeout(() => setIsCopied(false), 3000)
              }}
            >
              <Confetti active={isCopied} config={confettiConfig} />
              {isCopied ? '🎉 Copied!' : 'Copy'}
            </button>
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({
                  line,
                  key: i,
                  className: shouldHighlightLine(i)
                    ? 'highlight-line hover:bg-indigo-50 hover:bg-opacity-5 px-5'
                    : 'hover:bg-indigo-50 hover:bg-opacity-5 px-5',
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
