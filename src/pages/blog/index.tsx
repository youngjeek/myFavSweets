import React from 'react';
import { Link, PageProps, graphql } from 'gatsby';

import { HeadFC } from 'gatsby';

import Layout from '../../components/layout';
import Seo from '../../components/Seo';

function Blog({ data }: PageProps<Queries.BlogListsQuery>) {
  console.log(data);

  return (
    <Layout title="Blog">
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h2>{file.frontmatter?.title}</h2>
            </Link>
            {file.frontmatter?.category} {file.frontmatter?.tags}
            {''} {file.frontmatter?.data}
            <hr />
            <p>{file.excerpt}</p>
          </article>
        ))}
      </section>{' '}
    </Layout>
  );
}
export default Blog;
export const query = graphql`
  query BlogLists {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          category
          data(formatString: "MM/DD - YYYY")
          tags
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;
export const Head: HeadFC = () => <Seo title="Blog" />;
//        data(fromNow: true) 몇 시간 전 인지
