import React from 'react';
import { Page, Navbar, List, ListItem, NavLeft, NavRight, NavTitle, Link, Icon, Toolbar, Views, View } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      products: this.$f7.data.products,
    }
  }

  getBadgeClasses() {
    let classes = "";
    //this.state.products.map(meal => {})
    if(this.state.rating <= 2 ) {
        classes += "red"
        return classes;
    }else if(this.state.rating >= 3) {
        classes += "yellow"
        return classes;
    }else {
        classes += "yellow";
        return classes;
    }

    
}

  render() {
    return (
      <Page name="Meals">
        <Navbar noHairline>
          <NavLeft color="yellow" backLink="Back" />
          <NavTitle className="meal--title">Nearby</NavTitle>
          <NavRight>
            <Link><Icon ios="f7:map" aurora="f7:map" md="material:map" size="20px" color="yellow"></Icon></Link>
          </NavRight>
        </Navbar>
        
        <List className="meal__list">
          {this.state.products.map((product) => (
            <ListItem
              key={product.id}
              className="meal--list-item"
              link={`/single-meal/${product.id}/`}
              header={product.time}
              title={product.title}
              footer={product.address}
              badge={product.rating}
              badgeColor={this.getBadgeClasses()}
              subtitle={product.title}
              noChevron
            >
              <img slot="media" src={product.image} width="80" />
            </ListItem>
          ))}
        </List>

       
          <Toolbar tabbar labels bottom className="toolbar">
            <Link href="/"  iconIos="f7:house" iconAurora="f7:house" iconMd="material:home" text="Home" />
            <Link href="/meals/"  iconIos="f7:gift_fill" iconAurora="f7:gift_fill" iconMd="material:room_service" text="Meals" />
            <Link href="/location/" iconIos="f7:map_pin_ellipse" iconAurora="f7:map_pin_ellipse" iconMd="material:place" text="Location" />
            <Link href="/settings/" iconIos="f7:gear_alt_fill" iconAurora="f7:gear_alt_fill" iconMd="material:settings" text="Settings" />
          </Toolbar>
      </Page>
    );
  }
}