import React from 'react';
class Skills extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    render() {
        return (
            <div className="largebox">
            
            <div className="box1">
               <h3 class="skills__sub-title text-primary font-weight-light">FRONT-END</h3>
                <div class="container-fluid">
                    <ul class="skills__list row">
                        <div class="skills__list--left col-6 pr-2 text-right border-right">
                            <li class="skills__list-item">HTML5</li>
                            <li class="skills__list-item">CSS3</li>
                            <li class="skills__list-item">JavaScript</li>
                            <li class="skills__list-item">Bootstrap</li>
                        </div>
                        <div class="skills__list--right col-6 pl-2 text-left border-left">
                            <li class="skills__list-item">React JS</li>
                        
                        </div>
                    </ul>

            </div>
            </div>
           
            <div className="box2">
             <h3 class="skills__sub-title text-primary font-weight-light">BACK-END</h3>
            
              <div class="container-fluid">
              <ul class="skills__list row">
                        <div class="skills__list--left col-6 pr-2 text-right border-right">
                            <li class="skills__list-item">PHP</li>
                            <li class="skills__list-item">MongoDB</li>
                            <li class="skills__list-item">My Sql</li>
                        </div>
                        <div class="skills__list--right col-6 pl-2 text-left border-left">
                            <li class="skills__list-item">C sharp .Net</li>
                            <li class="skills__list-item">Python</li>
                        </div>
                    </ul>

            </div>
         
            </div>
           
            <div className="box3">
                       <h3 class="skills__sub-title text-primary font-weight-light">OTHER</h3>
                     <div class="container-fluid">
                    <ul class="skills__list row">
                        <div class="skills__list--left col-6 pr-2 text-right border-right">
                         
                            <li class="skills__list-item">Troubleshooting</li>
                            
                        </div>
                        <div class="skills__list--right col-6 pl-2 text-left border-left">
                            <li class="skills__list-item">Git</li>
                            <li class="skills__list-item">Virtual Machine</li>
                            <li class="skills__list-item">Software Testing</li>
                            <li class="skills__list-item">Penetration Testing</li>
                           <li class="skills__list-item">Malware Analysis</li> 
                            <li class="skills__list-item">Cyber Security</li>
                            <li class="skills__list-item">Reverse Engineering Basic knowledge</li>
                        </div>
                    </ul>

            </div>
            </div>

                <h3 className="working-skils">knowledge of windows, Linux & Mac OS</h3> 
                 <div className="Icon">         
                <img src="./Icon/windows-logo-silhouette.png" alt="icon" className="icon-windows"/>
                <img src="./Icon/linux-logo.png" alt="icon" className="icon-windows"/> 
                <img src="./Icon/happy-mac-logo.png" alt="icon" className="icon-windows"/> 
            </div>
            </div>
        );
    }
}

export default Skills;