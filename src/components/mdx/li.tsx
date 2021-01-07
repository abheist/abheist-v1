import * as React from 'react'

const Li = ({ children, check }) => {
  return (
    <li
      //   // [bpMaxSM]: {
      //   //   paddingLeft: check ? '35px' : '0',
      //   // },
      css={`
        verticalalign: middle;
        liststyletype: ${check ? 'none' : 'circle'}
        background: ${check && 'url(./check.svg) no-repeat 0 2px transparent'};
        paddingLeft: ${check ? '40px' : '0'}
      `}
    >
      {children}
    </li>
  )
}

export default Li
