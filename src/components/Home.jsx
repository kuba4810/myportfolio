import React from 'react'
import {CSSTransition} from 'react-transition-group';
import history from './history';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux'
import {urlChanged} from '../actions/url'

class MainPage extends React.Component{

     constructor(){
         super();
    
     }

     changeUrl = () =>{
        const p = document.querySelectorAll(".homeP");
        const cvLink = document.querySelector(".cvLink");

        for (var el of p) {
            el.classList.remove("fadeIn");
            el.classList.add("zoomOut");
        }

        cvLink.classList.remove("slideInUp");
        cvLink.classList.add("fadeOutDown");

        setTimeout(()=>{

            history.push('cv');
            this.props.urlChanged('cv');
        },600)
     }

    render(){
        return(            
            <div className="home">
                  <p className=" homeP homeP1 animated fadeIn">Jakub Kozioł</p>
                  <p className="homeP homeP2 animated fadeIn">Web Developer</p>

                    <div className="cvLink animated slideInUp" onClick={this.changeUrl}>
                        <div>
                            Curriculum Vitae
                        </div>
                    </div>            
                         
            </div>
        );
    }
}


const mapDispatchToProps = {urlChanged}


const Home = connect(null,mapDispatchToProps)(MainPage)

export default Home;