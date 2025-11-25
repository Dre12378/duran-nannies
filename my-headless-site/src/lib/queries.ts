// Fragment: A reusable piece of a query (like a variable)
const POST_FIELDS = `
  fragment PostFields on Post {
    id
    title
    slug
    date
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
  }
`;

export const GET_ALL_POSTS = `
  ${POST_FIELDS}
  query GetAllPosts {
    posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        ...PostFields
      }
    }
  }
`;

export const GET_POST_BY_SLUG = `
  ${POST_FIELDS}
  query GetPostBySlug($id: ID!) {
    post(id: $id, idType: SLUG) {
      ...PostFields
      content
    }
  }
`;