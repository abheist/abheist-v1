import React from 'react'
import FooterList from './FooterList'
import Logo from './Logo'
import { Body2, Caption } from './typography'

const Footer = () => {
  const listItems1 = [
    { name: 'Articles', link: '/' },
    { name: 'Book Notes', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Contact', link: '/' },
    { name: 'SiteMap', link: '/' },
    { name: 'RSS', link: '/' },
  ]

  const listItems2 = [
    { name: 'Uses', link: '/' },
    { name: 'Now', link: '/' },
    { name: 'Poems', link: '/' },
    { name: 'Sketches', link: '/' },
    { name: 'Favourite Links', link: '/' },
  ]

  const socialLinks = [
    { name: 'Twitter', link: '/' },
    { name: 'Instagram', link: '/' },
    { name: 'LinkedIn', link: '/' },
  ]

  return (
    <footer className="text-white bg-black">
      <div className="container mx-auto py-28">
        <div className="flex flex-row">
          <div className="w-5/12">
            <Logo color="light" />
            <Body2 className="mt-8 leading-7 text-gray-400">
              Thanks for reading. It makes a difference. I donate 5 percent of
              profits to causes that improve the health of children, pregnant
              mothers, and families in low income communities. We have helped
              over 30,000 people so far.
            </Body2>
          </div>
          <div className="flex flex-row justify-between w-7/12 pl-32">
            <div className="flex flex-row justify-between flex-1">
              <FooterList title="PAGES" listItems={listItems1} />
              <FooterList listItems={listItems2} hidden />
            </div>
            <div className="flex flex-row justify-end flex-1">
              <FooterList title="SOCIAL" listItems={socialLinks} />
            </div>
          </div>
        </div>
        <Caption className="mt-16" style={{ color: '#FFFFFF' }}>
          &copy; {new Date().getFullYear()}, ABHISHEK KUMAR SINGH 🤘
        </Caption>
      </div>
    </footer>
  )
}

export default Footer
