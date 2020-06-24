import React, { Component } from 'react';
import { Item } from 'semantic-ui-react'

import './index.css';

const BlogItems = () => (
    <Item.Group link>
      <Item as='a' href="https://www.paulpfeffer.com">
        <Item.Image size='tiny' src='/me.png' />
        <Item.Content>
          <Item.Header>Blogger Blog</Item.Header>
          <Item.Description>
            I am currently hosting my blog on blogger.<br/>
            Click here to check it out
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
