import React from 'react';
import image from '../static/img/img-4.svg';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  Icon
} from 'framework7-react';

export default () => (
  <Page name="home" className="home">
    {/* Top Navbar */}

    {/* Page content */}
    <Block className="text-center">
      <img src={image} width="180" />
    </Block>

    <BlockTitle className="text-center">
      <p className="home--title">Get the best coffee in town! </p>
    </BlockTitle>
    
    

    <Block className="home__link-section">
      <Row tag="p">
        <Link href="/register/" className="col btn-brown">Register</Link>
        <Link href="/login/" className="col btn-yellow">Login</Link>
      </Row>
      <Row tag="p">
        <Link href="http://facebook.com" className="col facebook-btn" external><Icon ios="f7:facebook" aurora="f7:facebook" md="material:facebook" size="20px"></Icon>  Continue with Facebook</Link>
      </Row>
    </Block>
   
  </Page>
);