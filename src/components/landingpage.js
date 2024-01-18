import React from 'react';
import {Grid,Cell} from 'react-mdl';


function Homepage() {


  return (
            <div style={{width:'100%',margin:'auto'}}>
			<Grid className ="Homepage-grid">
			
			<Cell col={12}>
			
			<img 
            src="./img/avatar.jpeg" alt="avatar" className="avatar-img"/>
			    <div className="banner-text">
              <h1>I'm Emeka, an IT Specialist</h1>
                 <div className="icon1"> 
                <img src="./Icon/htmlandcss.png" alt="icon" className="icon1-htmlandcss"/>
                <img src="./Icon/reactjs.png" alt="icon" className="icon1-reactjs"/>
                <img src="./Icon/PHP.png" alt="icon" className="icon1-reactjs"/>
                <img src="./Icon/c-sharp.png" alt="icon" className="icon1-reactjs"/>
                <img src="./Icon/pythonlogo.png" alt="icon" className="icon1-python"/>
                </div>
             <hr/>
             <p>HTML/CSS | Bootstrap | JavaScript | React | PHP | MongoDB</p>

             <div className="social-link">
              
              <a href="https://www.linkedin.com/in/emeka-nwadike-568678169/" rel="noopener noreferrer" target="_blank">

                <i className="fa fa-linkedin" aria-hidden="true"/>

              </a>
              
               <a href="https://github.com" rel="noopener noreferrer" target="_blank">

                <i className="fa fa-github" aria-hidden="true"/>

              </a>

              <a href="https://www.youtube.com/channel/UC4wZ6DWa1jhQ_ZXnYwkPYRQ" rel="noopener noreferrer" target="_blank">

              <i className="fa fa-youtube" aria-hidden="true" />

              </a>
                
             </div>
			</div>
           
           
			</Cell>
          </Grid>
           </div>
		)
	}

export default Homepage;