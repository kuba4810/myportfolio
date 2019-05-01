import React from 'react'

class Skills extends React.Component{
   
    render(){
      /*   const htmlIconStyle ={
            animationDelay: '.2s'
        }
        const cssIconStyle ={
            animationDelay: '.4s'
        }
        const jsIconStyle ={
            animationDelay: '.6s'
        }
        const reactIconStyle ={
            animationDelay: '.8s'
        }
        const nodeIconStyle ={
            animationDelay: '1s'
        }
        const postgresIconStyle ={
            animationDelay: '1.2s'
        } */

        const firstRowStyle ={
            animationDelay: '.2s'
        }

        const secondRowStyle={
            animationDelay: '.6s'
        }
        return(
            <div className="skillContainer animated fadeIn">

                <div className="skillContainerTitle animated">
                    Technologie których używam
                </div>
              <div className="skillGrid ">
                    <div className=" grDesignContainer animated slideInLeft">
                    <div className="skillTitle">
                            Graphic Design
                        </div>                
                    <div className="grDesign ">

                        <div className="skills">
                           <div className="skillItem  "><img src={require("../images/gimp_icon.png")} alt=""/></div>
                           <div className="skillItem  "><img src={require("../images/photoshop_icon.png")} alt=""/></div>
                        </div>
                    </div>
                    </div>

                    <div className="frontEndContainer animated zoomIn">
                    <div className="skillTitle">
                           Front-End       
                           </div>
                    <div className="front-end  ">
                               
                            <div className="skills">
                                
                            <div className="skillItem  "><img src={require("../images/html_icon.png")} alt=""/></div>
                            <div className="skillItem  "><img src={require("../images/css_icon.png")} alt=""/></div>
                            <div className="skillItem  "><img src={require("../images/js_icon.png")} alt=""/></div>  
                 
                            </div>
                            
                           <div className="skills">
                           <div className="skillItem  " ><img src={require("../images/reactjs_icon.png")} alt=""/></div>
                           <div className="skillItem  " ><img src={require("../images/jQuery_icon.png")} alt=""/></div>
                           <div className="skillItem  "><img src={require("../images/bootstrap_icon.png")} alt=""/></div>
                           </div>
                    </div>
                    </div>

                   <div className="backEndContainer animated slideInRight">
                   <div className="skillTitle">
                           Back-End       
                           </div>   
                   <div className="back-end ">
                    

                           <div className="skills">
                           <div className="skillItem  "><img src={require("../images/nodejs_icon.png")} alt=""/></div>
                            <div className="skillItem  " ><img src={require("../images/postgresql_icon.png")} alt=""/></div>    
                           </div>    
                    </div>   
                   </div>
              </div>

              <div className="gridTechnologies  animated fadeIn">
              <div className="skillTitle">
                        Narzędzia
                    </div>

                    <div className="skills">
                         <div className="skillItem  " ><img src={require("../images/vs_code_icon.png")} alt=""/></div>
                         <div className="skillItem gitIcon "><img src={require("../images/git_icon.png")} alt=""/></div>
                         <div className="skillItem  " ><img src={require("../images/intelij_icon.png")} alt=""/></div>
                         <div className="skillItem  " ><img src={require("../images/dgocean_icon.png")} alt=""/></div>  
                         <div className="skillItem  " ><img src={require("../images/nginx_icon.png")} alt=""/></div>  
                    </div>
              </div>

            {/* 
              <div className="skillIcons animated slideInDown" style={firstRowStyle}>
                 <div className="skillItem  "><img src={require("../images/html_icon.png")} alt=""/></div>
                 <div className="skillItem  "><img src={require("../images/css_icon.png")} alt=""/></div>
                 <div className="skillItem  "><img src={require("../images/js_icon.png")} alt=""/></div>     
              </div>

               <div className="skillIcons animated slideInDown" style={secondRowStyle}>
                 <div className="skillItem  " ><img src={require("../images/reactjs_icon.png")} alt=""/></div>
                 <div className="skillItem  "><img src={require("../images/nodejs_icon.png")} alt=""/></div>
                 <div className="skillItem  " ><img src={require("../images/postgresql_icon.png")} alt=""/></div>     
              </div> */
              }
            </div>
        );
    }
}

export default Skills

 