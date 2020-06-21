import React from 'react';
import {
  Page,
  Navbar,
  NavRight,
  NavLeft,
  NavTitle,
  Link,
  List,
  ListInput,
  Row,
  Button,
  Block,
  Toolbar,
  Tabs,
  Tab,
  Panel,
  View
} from 'framework7-react';

export default () => (
  <Page name="settings">
    <Navbar noHairline sliding={false}>
      <NavLeft backLink />
      <NavTitle>Settings</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
    </Navbar>

    <Panel right reveal themeDark>
        <View>
            <Page>
              <Navbar title="Right Panel"/>
              <Block> Link to the menu List </Block>
            </Page>
        </View>
    </Panel>

    <Toolbar tabbar top className="settings__tab">
          <Link tabLink="#tab-1" tabLinkActive>Profile</Link>
          <Link tabLink="#tab-2">Password</Link>
    </Toolbar>

        <Tabs>
          <Tab id="tab-1" className="page-content settings__tab--content" tabActive>
            <Block>
            <List noHairlinesMd className="settings--form">
                <ListInput
                    label="Name"
                    type="text"
                    placeholder="Your name"
                ></ListInput>

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

                <ListInput
                    label="Phone"
                    type="tel"
                    placeholder="Phone"
                ></ListInput>

                <ListInput
                    label="Gender"
                    type="select"
                    >
                    <option>Male</option>
                    <option>Female</option>
                </ListInput>

                <ListInput
                    label="Birth date"
                    type="date"
                    placeholder="Birth day"
                    defaultValue="2014-04-30"
                ></ListInput>

                </List>
                <Block>
                    <Row tag="p">
                        <Button className="col" round fill>Update Profile</Button>
                    </Row>
                </Block>
            </Block>
          </Tab>
          <Tab id="tab-2" className="page-content">
          <Block>
            <List noHairlinesMd className="settings--form">
                
                <ListInput
                    label="Confirm Password"
                    type="password"
                    placeholder="Password"
                ></ListInput>

                <ListInput
                    label="Password"
                    type="password"
                    placeholder="Confirm Password"
                ></ListInput>

                </List>
                <Block>
                    <Row tag="p">
                        <Button className="col" round fill>Update Password</Button>
                    </Row>
                </Block>
            </Block>
          </Tab>
        </Tabs>


    

    <Toolbar tabbar labels bottom className="toolbar menu--toolbar">
        <Link href="/" iconIos="f7:house" iconAurora="f7:house" iconMd="material:home" text="Home" />
        <Link href="/meals/"  iconIos="f7:gift_fill" iconAurora="f7:gift_fill" iconMd="material:room_service" text="Meals" />
        <Link href="/location/" iconIos="f7:map_pin_ellipse" iconAurora="f7:map_pin_ellipse" iconMd="material:place" text="Location" />
        <Link href="/settings/" iconIos="f7:gear_alt_fill" iconAurora="f7:gear_alt_fill" iconMd="material:settings" text="Settings" />
    </Toolbar>


  </Page>
);