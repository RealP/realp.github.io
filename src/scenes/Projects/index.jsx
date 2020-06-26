import React, { Component } from 'react';
import './index.css';
import { Item } from 'semantic-ui-react'

const MyProject = () => (
    <Item.Group link>
      <Item as='a' href="https://github.com/RealP/Everpy">
        <Item.Image size='tiny' src='/github-icon.png' />
        <Item.Content>
          <Item.Header>Everpy</Item.Header>
          <Item.Description>
            Enhanced Evernote CLI for Windows.
          </Item.Description>
        </Item.Content>
      </Item>

      <Item as='a' href="https://github.com/RealP/evercuts">
        <Item.Image size='tiny' src='/github-icon.png' />
        <Item.Content>
          <Item.Header>Evercuts</Item.Header>
          <Item.Description>
            Chrome extension adding keyboard shortcuts to Evernote Web GUI.
          </Item.Description>
        </Item.Content>
      </Item>

      <Item as='a' href="https://github.com/RealP/Graph-Internet-Speed">
        <Item.Image size='tiny' src='/github-icon.png' />
        <Item.Content>
          <Item.Header>Graph Internet Speed</Item.Header>
          <Item.Description>
            Utility to measure network conditions and graph them over time.
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>

)

class Projects extends Component {


  render() {
      return (
        <MyProject/>
      );
  }
}

export default Projects;
