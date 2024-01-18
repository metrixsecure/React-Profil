import React  from 'react';
import {Tabs,Tab, Grid, Cell,Card,CardTitle,CardText} from 'react-mdl';

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

      toggleCategories(){

        if(this.state.activeTab === 0){

        	return(
                    <div>

                   <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px',background:'url(./Project/react.png) center /cover'}}>React Project</CardTitle>
                    <CardText>This Portfolio is one of my React Project</CardText>
                  </Card>

                 <h1>This Project Page is Under Construction</h1></div>

        		)
        }else if (this.state.activeTab === 1) {

        	return(
                      
                    <div><h1>I will be uploading some of my Arduino Project soon</h1></div> 
        		)
        } else if (this.state.activeTab === 2) {

        	  return(
                   <div><h1>I will be uploading some of my C sharp .Net Project soon</h1></div> 
        	  	)
        }else if (this.state.activeTab ===3) {

        	  return(
                   <div><h1>I will be uploading some of my Python Project soon</h1></div> 
        	  	)
        }

      }

    render() {
        return (
            <div className="categories-Tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Web Developer</Tab>
                   
                     
                    <Tab>Arduino</Tab>
                    



                    <Tab>C sharp .Net</Tab>
                    


                    <Tab>Python</Tab>
                  
                </Tabs>
                <section className="projects-gird">
                  <Grid className="projects-gird">
                   <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                   </Grid>
                    
                </section>
            </div>    
        );
    }
}

        
       

export default Project;