import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-plugin-image'


const IndexPage = ({data}) => (
  <Layout>
    
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key = {document.node.id}>
          <h2>
            <Link to = {`/${document.node.id}`}>
              {document.node.title}
            </Link>
          </h2>
        </li>
      ))}
    </ul>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Layout>
)

export default IndexPage


export const pageQuery = graphql`
query IndexQuery {
  allStrapiArticle{
    edges{
      node{
        id
        title
        content
      }
    }
  }
}
`
