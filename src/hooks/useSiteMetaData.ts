import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            image
            siteUrl
          }
        }
      }
    `)
  
    return data.site.siteMetadata
  }