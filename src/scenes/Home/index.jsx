import React from "react";

import './index.css';

import {
    Image,
    List,
    Grid,
    Container,
    Header
} from 'semantic-ui-react';

const SkillsList = () => (
    <div>
        <Header as='h2'><u>Skills</u></Header>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
                <h3> Languages </h3>
                <List celled>
                  <List.Item>
                    Python
                  </List.Item>
                  <List.Item>
                    C++
                  </List.Item>
                  <List.Item>
                    Javascript
                  </List.Item>
                  <List.Item>
                    SQL
                  </List.Item>
                  <List.Item>
                    Bash
                  </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column>
                <h3> Tools </h3>
                <List celled>
                    <List.Item>Git SCM</List.Item>
                    <List.Item>Jira/TMS/Bamboo/Jama</List.Item>
                    <List.Item>Wireshark</List.Item>
                    <List.Item>Linux/Windows/Mac</List.Item>
                    <List.Item>Sublime Text</List.Item>
                </List>
            </Grid.Column>
            <Grid.Column>
                <h3> Other </h3>
                <List celled>
                    <List.Item>TCP/IP</List.Item>
                    <List.Item>VoIP</List.Item>
                    <List.Item>WiFi</List.Item>
                    <List.Item>Packet Analysis</List.Item>
                    <List.Item>Database Design</List.Item>
                </List>
            </Grid.Column>
          </Grid.Row>
      </Grid>
    </div>

)

const AboutMe = () => (
    <Grid columns={2}>
      <Grid.Column width={4}>
        <Image
          src={'/me.png'}
          circular
        />
      </Grid.Column>
      <Grid.Column width={12}>
        <Header as='h2' textAlign='center'>Hi, I'm Paul Pfeffer</Header>
        <div text>
          <p>
            My current language of choice is Python but I can work in many languages on any part of the stack.
            I have developed web based tools for enterprise class VoIP systems and recently I have developed SW
            for consumer grade WiFi access points. I've worked in companies with 2-1000 people.
          </p>
          <p>
             On my free time, I love learning new technologies and automating things in my personal life. I enjoy
             exploring new places and most of all riding my skateboard. Dogs are cool too.
          </p>
          <br/>
        </div>
      </Grid.Column>
    </Grid>
  )

function Home() {
  return (
    <Container>
      <AboutMe />
      <SkillsList />
    </Container>
  );
}

export default Home;