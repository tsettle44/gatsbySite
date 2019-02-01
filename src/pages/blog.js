import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Icon, Image, Item, Label } from 'semantic-ui-react'

const SecondPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Container style={{ paddingTop: '20px', fontSize: '1rem' }}>
        <Item.Group link divided>
          {data.allPost.edges.map((post, index) => (
            <Item href={post.node.slug}>
              <Item.Image size="small" src={post.node.coverImage.url} />

              <Item.Content>
                <Item.Header as="a">{post.node.title}</Item.Header>
                <Item.Meta>{post.node.createdAt}</Item.Meta>
                <Item.Description>{post.node.preview}</Item.Description>
                <Item.Extra>
                  {post.node.tags.map(tag => (
                    <Label>{tag}</Label>
                  ))}
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query data {
    allPost {
      totalCount
      edges {
        node {
          title
          createdAt(formatString: "MMMM DD, YYYY")
          slug
          preview
          tags
          coverImage {
            url
          }
          authorPost {
            name
          }
        }
      }
    }
    allAuthor {
      edges {
        node {
          name
          avatar {
            url
          }
          bibliography
        }
      }
    }
  }
`

export default SecondPage
