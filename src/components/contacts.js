import React from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';

function Contact() {
  return (
              
              <div className="contact-body">
              <Grid className="contact-grid">
              <Cell col={6}>
               <h2>Emeka Nwadike</h2>
                <img 
                    src="./img/avatar.jpeg" 
                    alt="avatar" style={{height:'50%'}}
                     /> 
 <p style={{with:'45%',margin:'auto',paddingTop:'1em'}}>Never stop learning!</p>
              </Cell>
              <Cell col={6}>
                 <h2>Let's Talk !</h2>
               <hr/>
              <div className="contact-list">

                 <List>
                  <ListItem>
                  <ListItemContent style={{fontSize:'25px', fontFamily: 'Aaron'}}>

                    <i className="fa fa-phone" aria-hidden="true"/>    +49 152-14192-481


                  </ListItemContent>
                  </ListItem>
                 <ListItem>
                  <ListItemContent style={{fontSize:'25px', fontFamily: 'Aaron'}}>

                  <i className="fa fa-envelope" aria-hidden="true"/> emynwadike@gmail.com

                 </ListItemContent>
                 </ListItem>
                 <ListItem>
                    <ListItemContent style={{fontSize:'25px', fontFamily: 'Aaron'}}>

                  <i className="fa fa-skype" aria-hidden="true"/>  Emeka Nwadike

                 </ListItemContent>
                  </ListItem>
                   </List>

              </div>


              </Cell>
              </Grid>
              </div>
    );
}


export default Contact;
