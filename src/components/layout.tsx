import React, { Children, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { createGlobalStyle } from 'styled-components';
import Link from './Link';
import About from './about';

interface ILayoutProps {
  children: any;
  title: string;
}

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  ${() => {
    /* Override PrismJS Defaults */ return null;
  }}
  pre {
    background-color: #2f1e2e !important;
    border-radius: 4px;
    font-size: 14px;
  }
  nav {
  position: sticky;
  padding-top: 32px;
  top: -32px;
opacity: 0.5;
backdrop-filter: blur(20px);
  }
  .gatsby-highlight-code-line {
    background-color: #4f424c;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 1em;
  }
`;

const NAVIGATION = [
  { to: '/', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/portfolio', label: 'Portfolio' },
];
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
export default function Layout({ children, title }: ILayoutProps) {
  return (
    <div>
      <Link to="/">
        <span style={headingAccentStyles}>🎉 Youngji's Fav Sweets 🎉</span>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/portfolio">What I made</Link>
          </li>
        </ul>
      </nav>
      <main style={pageStyles}>
        <h1 style={headingStyles}>{title}</h1>
        {children}
      </main>
      <footer>
        <About />
      </footer>
    </div>
  );
}
