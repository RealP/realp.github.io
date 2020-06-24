import React, { Component } from 'react';
import { Item } from 'semantic-ui-react'

import './index.css';

const BlogItems = () => (
    <Item.Group link>
      <Item as='a' href="https://www.evernote.com/shard/s284/sh/29897a8a-f634-edd5-49a2-4a2dcc84a1fb/d4b58b2a45c50e9fed4b2370215e6cf3">
        <Item.Image size='tiny' src='/evernote-icon.png' />
        <Item.Content>
          <Item.Header>Sample Coding Challenges</Item.Header>
          <Item.Description>
            Some coding challenges and my process in 2020.
          </Item.Description>
        </Item.Content>
      </Item>

      <Item as='a' href="https://www.evernote.com/shard/s284/sh/337c41d8-0dfa-4db3-9537-88aba93fd984/fe0fa1b208c6dbc2c87853e420548d94">
        <Item.Image size='tiny' src='/evernote-icon.png' />
        <Item.Content>
          <Item.Header>Sublime Text Configuration</Item.Header>
          <Item.Description>
            Some sublime setting tips and tricks.
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>

)

class Blog extends Component {

  render() {
      return (
        <BlogItems/>
      );
  }
}
export default Blog;
