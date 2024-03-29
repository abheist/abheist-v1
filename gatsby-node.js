const path = require(`path`)
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const algoPage = path.resolve(`./src/templates/algo-page.tsx`)
  const bookNote = path.resolve(`./src/templates/book-note.tsx`)
  const tagTemplate = path.resolve(`./src/templates/tags.tsx`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        postsRemark: allMdx(
          filter: { fileAbsolutePath: { regex: "/content/blogs/" } }
          limit: 1000
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
        bookRemark: allMdx(
          filter: { fileAbsolutePath: { regex: "/content/book-notes/" } }
          limit: 1000
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
        algosRemark: allMdx(
          filter: { fileAbsolutePath: { regex: "/content/algos/" } }
          limit: 1000
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
        tagsGroup: allMdx(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.postsRemark.nodes
  const algos = result.data.algosRemark.nodes
  const books = result.data.bookRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1]
      const next = index === 0 ? null : posts[index - 1]

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          slug: post.fields.slug,
          previous,
          next,
        },
      })
    })
  }

  if (algos.length > 0) {
    algos.forEach((algo, index) => {
      const previous = index === algos.length - 1 ? null : algos[index + 1]
      const next = index === 0 ? null : algos[index - 1]

      createPage({
        path: algo.fields.slug,
        component: algoPage,
        context: {
          slug: algo.fields.slug,
          previous,
          next,
        },
      })
    })
  }

  if (books.length > 0) {
    books.forEach((book, index) => {
      const previous = index === books.length - 1 ? null : books[index + 1]
      const next = index === 0 ? null : books[index - 1]

      createPage({
        path: `/book-notes${book.fields.slug}`,
        component: bookNote,
        context: {
          slug: book.fields.slug,
          previous,
          next,
        },
      })
    })
  }

  const tags = result.data.tagsGroup.group

  tags.forEach(tag => {
    createPage({
      path: `/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
