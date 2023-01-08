import * as React from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';
import About from '../components/about';
import Layout from '../components/layout';
import Seo from '../components/Seo';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const doclistStyles = {
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};
const linkStyle = {
  color: '#8954A8',
  fontWeight: 'bold',
  fontSize: 16,
  verticalAlign: '5%',
};
const docLinkStyle = {
  ...linkStyle,
  listStyleType: 'none',
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
};
const descriptionStyle = {
  color: '#232129',
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};
const docLinks = [
  {
    text: 'TypeScript Documentation',
    url: 'https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/',
    color: '#8954A8',
  },
  {
    text: 'GraphQL Typegen Documentation',
    url: 'https://www.gatsbyjs.com/docs/',
    color: '#8954A8',
  },
  {
    text: 'Gatsby',
    url: 'https://www.gatsbyjs.com/docs/',
    color: '#8954A8',
  },
];

const badgeStyle = {
  color: '#ff8080',
  backgroundColor: '#ffde20',
  border: '1px solid #ff8080',
  fontSize: 11,
  fontWeight: 'bold',
  letterSpacing: 1,
  borderRadius: 4,
  padding: '4px 6px',
  display: 'inline-block',
  position: 'relative' as 'relative',
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};
const links = [
  {
    text: 'Tutorial',
    url: 'https://www.gatsbyjs.com/docs/tutorial/',
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: '#E95800',
  },
  {
    text: 'How to Guides',
    url: 'https://www.gatsbyjs.com/docs/how-to/',
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: '#1099A8',
  },
  {
    text: 'Reference Guides',
    url: 'https://www.gatsbyjs.com/docs/reference/',
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: '#BC027F',
  },
  {
    text: 'Conceptual Guides',
    url: 'https://www.gatsbyjs.com/docs/conceptual/',
    description:
      'Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.',
    color: '#0D96F2',
  },
  {
    text: 'Plugin Library',
    url: 'https://www.gatsbyjs.com/plugins',
    description:
      'Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.',
    color: '#8EB814',
  },
  {
    text: 'Build and Host',
    url: 'https://www.gatsbyjs.com/cloud',
    badge: true,
    description:
      'Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!',
    color: '#663399',
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout title="Welcome to my bakery">
        <main style={pageStyles}>
          <p style={paragraphStyles}>
            Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this
            page update in real-time.
          </p>
          <ul style={doclistStyles}>
            {docLinks.map((doc) => (
              <li key={doc.url} style={docLinkStyle}>
                <a
                  style={linkStyle}
                  href={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
                >
                  {doc.text}
                </a>
              </li>
            ))}
          </ul>
          <ul style={listStyles}>
            {links.map((link) => (
              <li
                key={link.url}
                style={{ ...listItemStyles, color: link.color }}
              >
                <span>
                  <a
                    style={linkStyle}
                    href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
                  >
                    {link.text}
                  </a>
                  {link.badge && (
                    <span style={badgeStyle} aria-label="New Badge">
                      NEW!
                    </span>
                  )}
                  <p style={descriptionStyle}>{link.description}</p>
                </span>
              </li>
            ))}
          </ul>
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home" />;
