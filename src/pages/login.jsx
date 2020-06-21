import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  ListItem,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block,
  Link
} from 'framework7-react';

export default () => (
  <Page name="form login">
    <Navbar className="login--nav" title="Login" backLink="Back" backLinkShowText></Navbar>
    <BlockTitle>Welcome back!</BlockTitle>
    <List className="login--form">
      <ListInput
        label="E-mail"
        type="email"
        placeholder="E-mail"
      ></ListInput>

      <ListInput
        label="Password"
        type="password"
        placeholder="Password"
      ></ListInput>
    </List>

    <Block>
      <p className="login--forgot">Forgot Password?</p>
    </Block>

    <Block>
      <Row tag="p">
        <Link href="/meals/" className="col btn-yellow">Login</Link>
      </Row>
    </Block>

    <Block>
      <p className="login--register">Don't have an account? <Link className="login--register-link">Register Here</Link> </p>
    </Block>

    

  </Page>
);