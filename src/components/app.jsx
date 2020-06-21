import React from 'react';
import { Device }  from 'framework7/framework7-lite.esm.bundle.js';
import burger  from '../static/img/burger.jpg';
import icecream  from '../static/img/ice-cream.jpg';
import cocktail  from '../static/img/cocktail.jpg';
import salad  from '../static/img/salad.jpg';

import {
  App,
  View,
} from 'framework7-react';
import cordovaApp from '../js/cordova-app';
import routes from '../js/routes';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        id: 'io.framework7.myapp', // App bundle ID
        name: 'Framework7-App', // App name
        theme: 'auto', // Automatic theme detection

        data: function () {
          return {

            // Demo products for Catalog section
            products: [
              {
                id: '1',
                title: 'King Size Burger',
                address: "9, Ikpa Road, Uyo",
                rating: 4.4,
                time: "11AM - 11PM",
                image: burger,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
              },
              {
                id: '2',
                title: 'Vanillla Ice Cream',
                address: "Flat 2, Ekeki Estate, Yenagoa",
                rating: 3.5,
                time: "12PM - 3PM",
                image: icecream,
                description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
              },
              {
                id: '3',
                title: 'Cocktail',
                address: "9, Ikpa Road, Uyo",
                rating: 2.3,
                time: "10AM - 6PM",
                image: cocktail,
                description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
              },
              {
                id: '4',
                title: 'African Salad',
                address: "43, Alengogo, Ibadan",
                rating: 2.3,
                time: "10AM - 6PM",
                image: salad,
                description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
              },

              {
                id: '5',
                title: 'Chocolate Ice Cream',
                address: "Allen Avenue, Ikeja, Lagos",
                rating: 2.3,
                time: "10AM - 6PM",
                image: icecream,
                description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
              },

              {
                id: '6',
                title: 'Burger',
                address: "12, Oron Road, Uyo",
                rating: 2.3,
                time: "10AM - 6PM",
                image: burger,
                description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
              },
            ]
          };
        },



        // App routes
        routes: routes,


        // Input settings
        input: {
          scrollIntoViewOnFocus: Device.cordova && !Device.electron,
          scrollIntoViewCentered: Device.cordova && !Device.electron,
        },
        // Cordova Statusbar settings
        statusbar: {
          iosOverlaysWebView: true,
          androidOverlaysWebView: false,
        },
      },

      

    }
  }
  render() {
    return (
      
      <App params={ this.state.f7params } >

        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas" url="/" />

      </App>
    );
  }

  componentDidMount() {
    this.$f7ready((f7) => {
      // Init cordova APIs (see cordova-app.js)
      if (Device.cordova) {
        cordovaApp.init(f7);
      }
      // Call F7 APIs here
    });
  }
}