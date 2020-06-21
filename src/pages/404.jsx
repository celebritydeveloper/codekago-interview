import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Page Not found" backLink="Back" />
    <Block strong>
      <p>404 Error Sorry</p>
      <p>Requested content not found.</p>
    </Block>
  </Page>
);
