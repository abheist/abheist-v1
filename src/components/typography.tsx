import React from 'react'

const H1 = ({ text }) => {
  return (
    <h1 className="font-serif font-normal tracking-normal text-gray-700 capitalize text-8xl">
      {text}
    </h1>
  )
}

const H2 = ({ text }) => {
  return (
    <h2 className="font-serif text-6xl font-normal tracking-normal text-gray-700 capitalize">
      {text}
    </h2>
  )
}

const H3 = ({ text }) => {
  return (
    <h3 className="font-serif text-5xl font-normal tracking-normal text-gray-700 capitalize">
      {text}
    </h3>
  )
}

const H4 = ({ text }) => {
  return (
    <h4 className="font-serif text-4xl font-normal tracking-normal text-gray-700 capitalize">
      {text}
    </h4>
  )
}

const H5 = ({ text }) => {
  return (
    <h5 className="font-serif text-2xl font-normal tracking-normal text-gray-700 capitalize">
      {text}
    </h5>
  )
}

const H6 = ({ text }) => {
  return (
    <h6 className="font-sans text-xl font-normal tracking-normal text-gray-700">
      {text}
    </h6>
  )
}

const Subtitle1 = ({ text }) => {
  return (
    <p className="font-sans text-base font-normal tracking-normal text-gray-700">
      {text}
    </p>
  )
}

const Subtitle2 = ({ text }) => {
  return (
    <p className="font-sans text-sm font-normal tracking-normal text-gray-700">
      {text}
    </p>
  )
}

const Body1 = ({ text }) => {
  return (
    <p className="font-sans text-base font-normal tracking-normal text-gray-700">
      {text}
    </p>
  )
}

const Body2 = ({ text }) => {
  return (
    <p className="font-sans text-sm font-normal tracking-normal text-gray-700">
      {text}
    </p>
  )
}

const Caption = ({ text }) => {
  return (
    <p className="font-sans text-xs font-normal tracking-normal text-gray-700">
      {text}
    </p>
  )
}

const Overline = ({ text }) => {
  return (
    <p className="font-sans text-xs font-normal tracking-normal text-gray-700 uppercase">
      {text}
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
