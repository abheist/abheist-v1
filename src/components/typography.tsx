import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  style?: any
}

const H1 = ({ children, className }: Props) => {
  return (
    <h1
      className={`font-serif font-normal tracking-normal text-gray-700 capitalize text-8xl ${className}`}
    >
      {children}
    </h1>
  )
}

const H2 = ({ children, className }: Props) => {
  return (
    <h2
      className={`font-serif text-6xl font-normal tracking-normal text-gray-700 capitalize ${className}`}
    >
      {children}
    </h2>
  )
}

const H3 = ({ children, className, style }: Props) => {
  return (
    <h3
      className={`font-serif text-5xl font-normal tracking-normal text-gray-700 capitalize ${className}`}
      style={style}
    >
      {children}
    </h3>
  )
}

const H4 = ({ children, className }: Props) => {
  return (
    <h4
      className={`font-serif text-4xl font-normal tracking-normal text-gray-700 capitalize ${className}`}
    >
      {children}
    </h4>
  )
}

const H5 = ({ children, className }: Props) => {
  return (
    <h5
      className={`font-serif text-2xl font-normal tracking-normal text-gray-700 capitalize ${className}`}
    >
      {children}
    </h5>
  )
}

const H6 = ({ children, className }: Props) => {
  return (
    <h6
      className={`font-sans text-xl font-normal tracking-normal text-gray-700 ${className}`}
    >
      {children}
    </h6>
  )
}

const Subtitle1 = ({ children, className }: Props) => {
  return (
    <p
      className={`font-sans text-base font-normal tracking-normal text-gray-700 ${className}`}
    >
      {children}
    </p>
  )
}

const Subtitle2 = ({ children, className }: Props) => {
  return (
    <p
      className={`font-sans text-sm font-normal tracking-normal text-gray-700 ${className}`}
    >
      {children}
    </p>
  )
}

const Body1 = ({ children, className }: Props) => {
  return (
    <p
      className={`font-sans text-base font-normal tracking-normal text-gray-700 ${className}`}
    >
      {children}
    </p>
  )
}

const Body2 = ({ children, className }: Props) => {
  return (
    <p
      className={`font-sans text-sm font-normal tracking-normal text-gray-700 ${className}`}
    >
      {children}
    </p>
  )
}

const Caption = ({ children, className }: Props) => {
  return (
    <p
      className={`font-sans text-xs font-normal tracking-normal text-gray-700 ${className}`}
    >
      {children}
    </p>
  )
}

const Overline = ({ children, className }: Props) => {
  return (
    <p
      className={`font-sans text-xs font-normal tracking-normal text-gray-700 uppercase ${className}`}
    >
      {children}
    </p>
  )
}

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Subtitle1,
  Subtitle2,
  Body1,
  Body2,
  Caption,
  Overline,
}
