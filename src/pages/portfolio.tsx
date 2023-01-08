import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/Seo';
import { HeadFC } from 'gatsby';

function Portfolio() {
  return (
    <Layout title="Portfolio">
      <p>Portfolio</p>
    </Layout>
  );
}
export default Portfolio;

export const Head: HeadFC = () => <Seo title="Portfolio" />;
