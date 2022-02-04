import React, { useState } from 'react'
import Container from './Container'
import FooterList from './FooterList'
import Logo from './Logo'
import { Body2, Caption } from './Typography'

const allowedEmoji = [
  '✌',
  '😂',
  '😝',
  '😁',
  '😱',
  '🙌',
  '🍻',
  '🔥',
  '🌈',
  '☀',
  '🎈',
  '🌹',
  '🎀',
  '⚽',
  '🎾',
  '🏁',
  '👿',
  '🐻',
  '🐶',
  '🐬',
  '🐟',
  '🍀',
  '👀',
  '🚗',
  '🍎',
  '💝',
  '💙',
  '👌',
  '❤',
  '😍',
  '😉',
  '💪',
  '🍸',
  '🔑',
  '💖',
  '🌟',
  '🎉',
  '🌺',
  '🎶',
  '🏈',
  '⚾',
  '🏆',
  '🐵',
  '🐮',
  '🐩',
  '🐎',
  '💣',
  '🍓',
  '💘',
  '💜',
  '👊',
  '😘',
  '😜',
  '😵',
  '🙏',
  '👋',
  '💎',
  '🚀',
  '🌙',
  '🎁',
  '⛄',
  '🌊',
  '⛵',
  '🏀',
  '🎱',
  '💰',
  '👶',
  '👸',
  '🐰',
  '🐷',
  '🐍',
  '🐫',
  '🔫',
  '🚲',
  '🍉',
  '💛',
  '💚',
]

const getEmoji = () =>
  allowedEmoji[Math.floor(Math.random() * allowedEmoji.length)]

const Footer = () => {
  const [emoji, setEmoji] = useState(getEmoji)

  const listItems1 = [
    { name: 'Articles', link: '/articles/' },
    { name: 'Book Notes', link: '/book-notes/' },
    { name: 'About', link: '/about/' },
    {
      name: 'SiteMap',
      link: '/sitemap/sitemap-index.xml',
      newTab: true,
    },
    { name: 'RSS', link: '/rss.xml', newTab: true },
  ]

  const listItems2 = [
    { name: 'Uses', link: '/uses/' },
    { name: 'Now', link: '/now/' },
    { name: 'Favourite Links', link: '/links/' },
    { name: 'Algorithms', link: '/algorithms/' },
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
    <footer className="bg-black text-white">
      <Container className="py-28">
        <div className="flex flex-col md:flex-row md:gap-x-16 lg:gap-x-32">
          <div className="md:w-5/12">
            <Logo color="light" />
            <Body2 className="mt-8 leading-7 text-gray-400">
              Thanks for reading. It makes a difference. I'll try to help
              developers with tutorials & blogs. Blogs on design, development
              and happy-productive life. And it will also support and motivate
              me to share my knowledge with the community.
            </Body2>
          </div>
          <div className="mt-16 flex flex-row justify-between md:mt-0 md:w-7/12">
            <div className="grid grid-cols-2 justify-between gap-x-10">
              <FooterList title="PAGES" listItems={listItems1} />
              <FooterList listItems={listItems2} hidden />
            </div>
            <div className="flex flex-row justify-end">
              <FooterList title="SOCIAL" listItems={socialLinks} />
            </div>
          </div>
        </div>
        <Caption className="mt-16" style={{ color: '#FFFFFF' }}>
          &copy; {new Date().getFullYear()}, ABHISHEK KUMAR SINGH{' '}
          <span
            className="cursor-pointer text-xl"
            onClick={() => setEmoji(getEmoji)}
          >
            {emoji}
          </span>
        </Caption>
      </Container>
    </footer>
  )
}

export default Footer
