import { Link } from 'gatsby'
import React from 'react'
import { Body1, Body2, H2, H5, H6, Subtitle1 } from './typography'

const AboutMe = ({ posts }) => {
  return (
    <div>
      <header className="w-full">
        <div
          className={`w-full`}
          style={{
            height: '524px',
            background: `#F8CD5F`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}
        >
          <div className="container relative mx-auto">
            <H2 className="container absolute mx-auto top-24 left-8">
              About Me
            </H2>
          </div>
          <img
            src="./me-header-1.png"
            width="1200"
            alt="Abhishek Kumar Singh"
            className="mx-auto"
          />
        </div>
      </header>
      <div className="container flex flex-row mx-auto mt-52">
        <div className="flex flex-col w-1/4 gap-y-6">
          <H5 className="mt-8 normal-case">hi@abheist.com</H5>
          <Body2>
            ---------- <a href="https://twitter.com/abheist">Twitter</a>
          </Body2>
          <Body2>
            ---------- <a href="https://instagram.com/abheist">Instagram</a>
          </Body2>
          <Body2>
            ---------- <a href="https://linkedin.com/in/abheist">LinkedIn</a>
          </Body2>
        </div>
        <div className="w-3/4">
          <H2>Hi Friends</H2>
          <Body1 className="mt-10">
            I’m Abhishek Kumar Singh, Product Developer and Designer who is
            passionate about the intersection of design and technology. And, how
            it can be used to make a positive impact on earth and its being.
            Product Developer and Designer who is passionate about the
            intersection of design and technology. And, how it can be used to
            make a positive impact on earth and its being. Product Developer and
            Designer who is passionate about the intersection of design and
            technology. And, how it can be used to make a positive impact on
            earth and its being.
          </Body1>
          <Body1 className="mt-6">
            Product Developer and Designer who is passionate about the
            intersection of design and technology. And, how it can be used to
            make a positive impact on earth and its being. Product Developer and
            Designer who is passionate about the intersection of design and
            technology. And, how it can be used to make a positive impact on
            earth and its being. Product Developer and Designer who is
            passionate about the intersection of design and technology. And, how
            it can be used to make a positive impact on earth and its being.
          </Body1>
          <Body1 className="mt-6">
            Product Developer and Designer who is passionate about the
            intersection of design and technology. And, how it can be used to
            make a positive impact on earth and its being.
          </Body1>
          <Body1 className="mt-10">Thanks</Body1>
          <Body1 className="mt-2">Abhishek Kumar Singh</Body1>
        </div>
      </div>
      <div className="container mx-auto py-52">
        <H2>Popular Links</H2>
        <Subtitle1 className="mt-10">
          To help you find something that interests you, I’ve made a list of my
          favorite creations below.
        </Subtitle1>
        <div className="flex flex-row justify-between gap-16 mt-16">
          <div className="flex-1">
            <H6 className="font-bold uppercase">Popular blog post</H6>
            {posts.map(post => (
              <Subtitle1 key={post.fields.slug} className="mt-4">
                <Link to={post.fields.slug} itemProp="url">
                  <span itemProp="headline">{post.frontmatter.title}</span>
                </Link>
              </Subtitle1>
            ))}
          </div>
          <div className="flex-1">
            <H6 className="font-bold uppercase">Popular long blog post</H6>
            {posts.map(post => (
              <Subtitle1 key={post.fields.slug} className="mt-4">
                <Link to={post.fields.slug} itemProp="url">
                  <span itemProp="headline">{post.frontmatter.title}</span>
                </Link>
              </Subtitle1>
            ))}
          </div>
          <div className="flex-1">
            <H6 className="font-bold uppercase">Popular book notes</H6>
            {posts.map(post => (
              <Subtitle1 key={post.fields.slug} className="mt-4">
                <Link to={post.fields.slug} itemProp="url">
                  <span itemProp="headline">{post.frontmatter.title}</span>
                </Link>
              </Subtitle1>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
