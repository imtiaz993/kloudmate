import { graphql } from 'gatsby';

export const Contentful3ColumnsBlock = graphql`
  fragment ThreeColumnsBlock on Contentful3ColumnsBlock {
    id
    sys {
      contentType {
        sys {
          id
        }
      }
    }
    blocks {
      description
      heading
      image {
        file {
          url
        }
        gatsbyImageData(width: 150, layout: FULL_WIDTH, placeholder: BLURRED)
        title
      }
    }
  }
`;

export const ContentfulContentBlock = graphql`
  fragment ContentBlock on ContentfulContentBlock {
    id
    sys {
      contentType {
        sys {
          id
        }
      }
    }
    heading
    content {
      raw
    }
    layout
    image {
      gatsbyImageData(height: 550, placeholder: BLURRED)
      title
    }
  }
`;

export const ContentfulHeroBannerBlock = graphql`
  fragment HeroBannerBlock on ContentfulHeroBannerBlock {
    id
    sys {
      contentType {
        sys {
          id
        }
      }
    }
    heading
    layout
    cta {
      text
      url
    }
    subheading
    paragraph {
      childMarkdownRemark {
        html
      }
    }
    image {
      gatsbyImageData(
        height: 600
        width: 800
        cropFocus: TOP_LEFT
        resizingBehavior: CROP
        placeholder: BLURRED
      )
      title
    }
    wideImage: image {
      title
      gatsbyImageData(height: 650, placeholder: BLURRED)
    }
  }
`;

export const ContentfulJumbotronBlock = graphql`
  fragment JumbotronBlock on ContentfulJumbotronBlock {
    id
    sys {
      contentType {
        sys {
          id
        }
      }
    }
    subheading
    cta {
      text
      url
    }
    heading
  }
`;

export const LogoStripBlock = graphql`
  fragment LogoStripBlock on ContentfulLogosStripBlock {
    id
    sys {
      contentType {
        sys {
          id
        }
      }
    }
    images {
      file {
        url
      }
      gatsbyImageData(width: 120, placeholder: BLURRED)
    }
  }
`;

export const FAQBlock = graphql`
  fragment FAQBlock on ContentfulFaqBlock {
    id
    sys {
      contentType {
        sys {
          id
        }
      }
    }
    faqs {
      question
      answer {
        childrenMarkdownRemark {
          html
        }
      }
    }
  }
`;

export const FeaturesHighlightsBlock = graphql`
  fragment FeaturesHighlightsBlock on ContentfulFeaturesHighlightsBlock {
    id
    sys {
      contentType {
        sys {
          id
        }
      }
    }
    subheading
    heading
    cta {
      url
      text
    }
    items {
      heading
      description
      layout
      image {
        gatsbyImageData(width: 58)
        title
        file {
          url
        }
      }
    }
  }
`;

export const SEO = graphql`
  fragment SEO on ContentfulSeo {
    seoTitle
    description
    keywords
    coverImage {
      gatsbyImageData(width: 1200, formats: NO_CHANGE)
    }
  }
`;
