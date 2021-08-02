import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const ArticleTemplate = ({ data }) => (
<Layout>
    <h1>{data.strapiArticle.title}</h1>
    <Link to = {`/authors/Writer_${data.strapiArticle.author.id}`}> by: {data.strapiArticle.author.name} </Link>
    <p>{data.strapiArticle.content}</p>
   </Layout>)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
        id
        title
        content
        author{
            id
            name
        }
    }}
` 