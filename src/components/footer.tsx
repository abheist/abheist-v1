import React from 'react'
import Logo from './Logo'
import { Body1, Caption, Subtitle1 } from './typography'

const Footer = () => {
  return (
    <footer className="text-white bg-black">
      <div className="container mx-auto py-28">
        <div className="flex flex-row">
          <div className="w-2/5">
            <Logo color="light" />
            <Body1 className="mt-8" style={{ color: '#FFFFFF' }}>
              Thanks for reading. It makes a difference. I donate 5 percent of
              profits to causes that improve the health of children, pregnant
              mothers, and families in low income communities. We have helped
              over 30,000 people so far.
            </Body1>
          </div>
          <div className="flex flex-row justify-between w-3/5 pl-24">
            <div className="flex flex-row justify-between flex-1">
              <div>
                <Subtitle1 style={{ color: '#FFFFFF' }}>PAGES</Subtitle1>
                <ol className="mt-8">
                  <li>Articles</li>
                  <li>Book Notes</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>SiteMap</li>
                  <li>RSS</li>
                </ol>
              </div>
              <div>
                <Subtitle1 style={{ color: '#FFFFFF' }}>PAGES</Subtitle1>
                <ol className="mt-8">
                  <li>Uses</li>
                  <li>Now</li>
                  <li>Poems</li>
                  <li>Sketches</li>
                  <li>Favourite Links</li>
                </ol>
              </div>
            </div>
            <div className="flex flex-row justify-end flex-1">
              <div>
                <Subtitle1 style={{ color: '#FFFFFF' }}>Social</Subtitle1>
                <ol className="mt-8">
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>LinkedIn</li>
                </ol>
              </div>
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
