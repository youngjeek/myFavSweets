import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
interface ILinkProps {
  children: any;
  to: any;
}

const Link = ({ children, to, ...other }: ILinkProps) => {
  const internal = /^\/(?!\/)/.test(to);

  if (internal) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};

export default Link;
