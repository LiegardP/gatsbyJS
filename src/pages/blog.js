import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";


const Blog = ({data}) => (
  <Layout>
    <h1>Blog</h1>
    <div>{ console.log(data) }</div>
    <p>
      Make it look like digital are we in agreeance, nor finance. Workflow 
      ecosystem pivot one-sheet, yet if you could do that, that would be great. 
      Quick win it's a simple lift and shift job draft policy ppml proposal and 
      cross-pollination finance. Price point pull in ten extra bodies to help 
      roll the tortoise. Drill down roll back strategy prioritize these line 
      items so high turnaround rate. Pixel pushing killing it. Shoot me an email
      teams were able to drive adoption and awareness. Throughput. Eat our own 
      dog food how much bandwidth do you have goalposts or window of opportunity.
    </p>
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
          }
        }
      }
    }
  }
`
