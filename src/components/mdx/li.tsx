import * as React from 'react'

const Li = ({ children, check }) => {
  return (
    <li
      // css={css({
      //   verticalAlign: 'middle',
      //   listStyleType: check ? 'none' : 'circle',
      //   // background: check && `url(${CheckIcon}) no-repeat 0 2px transparent`,
      //   paddingLeft: check ? '40px' : '0',
      //   // [bpMaxSM]: {
      //   //   paddingLeft: check ? '35px' : '0',
      //   // },
      // })}
      css={`
        background: papayawhip;
        color: ${props => props.theme.colors.text};
      `}
    >
      {children}
    </li>
  )
}

export default Li
