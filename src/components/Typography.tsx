import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  style?: any
}

const H1 = ({ children, className, style }: Props) => {
  return (
    <h1
      className={`font-serif font-normal tracking-normal  capitalize text-8xl ${className}`}
      style={style}
    >
      {children}
    </h1>
  )
}

const H2 = ({ children, className, style }: Props) => {
  return (
    <h2
      className={`font-serif text-6xl font-normal tracking-normal  capitalize ${className}`}
      style={style}
    >
      {children}
    </h2>
  )
}

const H3 = ({ children, className, style }: Props) => {
  return (
    <h3
      className={`font-serif text-5xl font-normal tracking-normal  capitalize ${className}`}
      style={style}
    >
      {children}
    </h3>
  )
}

const H4 = ({ children, className, style }: Props) => {
  return (
    <h4
      className={`font-serif text-4xl font-normal tracking-normal  capitalize ${className}`}
      style={style}
    >
      {children}
    </h4>
  )
}

const H5 = ({ children, className, style }: Props) => {
  return (
    <h5
      className={`font-sans text-2xl font-normal tracking-normal  capitalize ${className}`}
      style={style}
    >
      {children}
    </h5>
  )
}

const H6 = ({ children, className, style }: Props) => {
  return (
    <h6
      className={`font-sans text-xl font-normal tracking-normal  ${className}`}
      style={style}
    >
      {children}
    </h6>
  )
}

const Subtitle1 = ({ children, className, style }: Props) => {
  return (
    <p
      className={`font-sans text-base font-normal tracking-normal  ${className}`}
      style={style}
    >
      {children}
    </p>
  )
}

const Subtitle2 = ({ children, className, style }: Props) => {
  return (
    <p
      className={`font-sans text-sm font-normal tracking-normal  ${className}`}
      style={style}
    >
      {children}
    </p>
  )
}

const Body1 = ({ children, className, style }: Props) => {
  return (
    <p
      className={`font-sans text-base font-normal tracking-normal  ${className}`}
      style={style}
    >
      {children}
    </p>
  )
}

const Body2 = ({ children, className, style }: Props) => {
  return (
    <p
      className={`font-sans text-sm font-normal tracking-normal  ${className}`}
      style={style}
    >
      {children}
    </p>
  )
}

const Caption = ({ children, className, style }: Props) => {
  return (
    <p
      className={`font-sans text-xs font-normal tracking-normal  ${className}`}
      style={style}
    >
      {children}
    </p>
  )
}

const Overline = ({ children, className, style }: Props) => {
  return (
    <p
      className={`font-sans text-xs font-normal tracking-normal  uppercase ${className}`}
      style={style}
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
