import React from "react";
import Layout from "../components/Layout";
import Post from "../components/Post";
import { graphql } from "gatsby";


const Blog = ({data}) => (
  <Layout>
    <h1>Tutoriaux</h1>
    {
      data.allMarkdownRemark.edges.map(post => {
        const {title, author, date, description, path } = post.node.frontmatter;

        return (
          <Post
            title={title}
            author={author}
            date={date}
            description={description}
            key={`${date}__${title}`}
            path={path}
          />
        )
      })
    }
  </Layout>
);
export default Blog;

export const AllBlogsQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            description
            author
            path
          }
        }
      }
    }
  }
`
