import React from 'react'
import FooterList from './FooterList'
import Logo from './Logo'
import { Body2, Caption } from './Typography'

const Footer = () => {
  const listItems1 = [
    { name: 'Articles', link: '/articles/' },
    { name: 'Book Notes', link: '/book-notes/' },
    { name: 'About', link: '/me/' },
    { name: 'Contact', link: '/contact/' },
    { name: 'SiteMap', link: '/sitemap.xml' },
    { name: 'RSS', link: '/rss.xml' },
  ]

  const listItems2 = [
    { name: 'Uses', link: '/uses/' },
    { name: 'Now', link: '/now/' },
    { name: 'Favourite Links', link: '/links/' },
  ]

  const socialLinks = [
    { name: 'Twitter', link: 'https://twitter.com/abheist/', newTab: true },
    { name: 'Instagram', link: 'https://instagram.com/abheist/', newTab: true },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/abheist/',
      newTab: true,
    },
  ]

  return (
    <footer className="text-white bg-black">
      <div className="container mx-auto py-28">
        <div className="flex flex-row">
          <div className="w-5/12">
            <Logo color="light" />
            <Body2 className="mt-8 leading-7 text-gray-400">
              Thanks for reading. It makes a difference. I'll try to help as
              many developers as I can with the content and problem solving who
              are helping in to make a world a better place. And it also support
              me and motivate me to share my knowledge to the community.
            </Body2>
          </div>
          <div className="flex flex-row justify-between w-7/12 pl-32">
            <div className="grid justify-between grid-cols-2 gap-x-10">
              <FooterList title="PAGES" listItems={listItems1} />
              <FooterList listItems={listItems2} hidden />
            </div>
            <div className="flex flex-row justify-end">
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
