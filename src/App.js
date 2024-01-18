import React from 'react';
import './App.css';
import { Layout, Header, Navigation,Drawer,Content } from 'react-mdl';
import Main from './components/main';



function App() {
  return (
   <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="My Portfolio" scroll>
            <Navigation>
                <a href="aboutme">About Me</a>
                <a href="skills">Skills</a>
                <a href="projects">Projects</a>
                <a href="resume">Resume</a>
                <a href="contacts">Contact</a>
            </Navigation>
        </Header>
        <Drawer title="My Portfolio">
            <Navigation>
               <a href="aboutme">About Me</a>
                <a href="skills">Skills</a>
                <a href="projects">Projects</a>
                <a href="resume">Resume</a>
                <a href="contacts">Contact</a>

            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}


export default App;
