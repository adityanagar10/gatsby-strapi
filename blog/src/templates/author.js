import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const WriterTemplate = ({ data }) => (
    <Layout>
      <h1>{data.strapiWriter.name}</h1>
      <ul>
        {data.strapiWriter.articles.map(article => (
          <li key={article.id}>
            <h2>
              <Link to={`/Article_${article.id}`}>{article.title}</Link>
            </h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
  
export default WriterTemplate

export const query = graphql`
  query WriterTemplate($id: String!) {
    strapiWriter(id: { eq: $id }) {
      id
      name
      articles {
        id
        title
        content
      }
    }
  }
` 