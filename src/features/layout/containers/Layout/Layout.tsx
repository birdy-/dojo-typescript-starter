import React, { Fragment } from 'react';

export type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <Fragment>
    <h1>Music Dojo</h1>
    {children}
  </Fragment>
);
