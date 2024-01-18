import React from 'react';
import{Switch,Route} from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Skills from './skills';
import Project from './projects';
import Contact from './contacts';
import Resume from './resume';

 

const Main = () =>(


	<Switch>
	  <Route exact path="/"  component={LandingPage} />
	  <Route path="/aboutme" component={AboutMe}/>
	   <Route path="/skills" component={Skills}/>
	  <Route path="/projects" component={Project}/>
	  <Route path="/contacts" component={Contact}/>
	  <Route path="/resume"  component={Resume}/>
	 </Switch>
)


export default Main;