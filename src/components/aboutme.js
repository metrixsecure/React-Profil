import React from 'react';
import {Grid,Cell} from 'react-mdl';



function AboutMe() {

 return (
                <div style={{width:'100%',margin:'auto'}}>
			<Grid className ="Homepage-grid">
			
			<Cell col={12}>
			
			     <img 
            src="./img/avatar.jpeg" alt="avatar" className="avatar-img"/>
          <div className="banner-text">
                <div className="Hi">
                    <p style={{with:'0.2%',margin:'0.3% auto',paddingTop:'0.4%'}}>My name is Emeka, based in Germany/Berlin, an IT Specialist my background in building web applications and system software,
                    writing bots and scripts has helped me sharpen my skills and improving my work.
                    The passion and curiosity I had for computers and technology.
                     This passion has grown much bigger over the years and I am always eager to learn new exciting technologies </p>
   

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
		);
	}

export default AboutMe;