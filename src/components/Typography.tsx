import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  style?: any
  level?: number
  title?: string
}

const H1 = ({ children, className, style }: Props) => {
  return (
    <h1
      className={`font-serif text-8xl font-normal  capitalize tracking-normal ${className}`}
      style={style}
    >
      {children}
    </h1>
  )
}

const H2 = ({ children, className, style }: Props) => {
  return (
    <h2
      className={`font-serif text-3xl font-normal capitalize leading-tight tracking-normal  md:text-6xl ${className}`}
      style={style}
    >
      {children}
    </h2>
  )
}

const H3 = ({ children, className, style, level }: Props) => {
  return (
    <h3
      className={`font-serif text-5xl font-normal capitalize  tracking-normal ${className}`}
      style={style}
      aria-level={level}
    >
      {children}
    </h3>
  )
}

const H4 = ({ children, className, style }: Props) => {
  return (
    <h4
      className={`font-serif text-4xl font-normal capitalize  tracking-normal ${className}`}
      style={style}
    >
      {children}
    </h4>
  )
}

const H5 = ({ children, className, style }: Props) => {
  return (
    <h5
      className={`font-sans text-2xl font-normal capitalize  tracking-normal ${className}`}
      style={style}
    >
      {children}
    </h5>
  )
}

const Quote = ({ children, className, style }: Props) => {
  return (
    <h5
      className={`-ml-32 -mr-32 border-l-8 pl-10 font-serif text-4xl font-light italic leading-snug tracking-wide ${className}`}
      style={style}
    >
      {children}
    </h5>
  )
}

const H6 = ({ children, className, style, level, title }: Props) => {
  return (
    <h6
      className={`font-sans text-xl font-normal tracking-normal  ${className}`}
      style={style}
      role="heading"
      aria-level={level}
      title={title}
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
      className={`font-sans text-xs font-normal uppercase  tracking-normal ${className}`}
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
  Quote,
}
