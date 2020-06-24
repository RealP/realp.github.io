import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
    Menu,
    Header,
    Divider
} from 'semantic-ui-react';
import Home from './scenes/Home';
import Resume from './scenes/Resume';
import Projects from './scenes/Projects'
import Blog from './scenes/Blog'

import './App.css';
import 'semantic-ui-less/semantic.less'


export default class App extends Component {

  constructor(props) {
    super(props);
    console.log("HeaderMenu constructor");
    console.log(this);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div
          fluid>
            <Menu secondary as={Header}>
              <Menu.Item as={Link} to="/">
                Home
              </Menu.Item>
              <Menu.Item as={Link} to="/blog">
                Blog
              </Menu.Item>
              <Menu.Item as={Link} to="/projects">
                Projects
              </Menu.Item>
              <Menu.Item as={Link} to="/resume">
                Resume
              </Menu.Item>
            </Menu>

            <Divider hidden/>
            {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/*">
                <Home />
              </Route>
            </Switch>
          </div>

        </Router>
      </div>
    );
  }

}
