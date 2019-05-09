import React from 'react'
import { NavLink } from 'react-router-dom'
import history from './history';

import { connect } from 'react-redux'
import { urlChanged } from '../actions/url'


class Head extends React.Component {

    constructor() {
        super();
        this.state = {
            listShown: false,
            currentUrl: 'home'
        }
    }



    componentDidMount() {
        window.onresize = this.handleResize;
        console.log("Current url: ", this.props.currentUrl);

        const url = window.location.href;
        //starting on the 8th character after "http://" or "https://", find '/'
        const startChar = url.indexOf('/', 8);
        const path = url.substr(startChar + 1, url.length);
        console.log("path=" + path);



        // this.setState({ currentUrl: path });

        this.props.urlChanged(path);
        console.log("Current url: ", this.props.currentUrl);

        window.onpopstate = (event) => {

            // this.setState({
            //     currentUrl: history.location.pathname.slice(1, history.location.pathname.length)
            // })

            this.props.urlChanged(history.location.pathname.slice(1, history.location.pathname.length));

        };

    }

    handleResize = () => {
        if (window.innerWidth >= 1000) {
            this.refs.menuList.classList.remove('menuListShown');
            if (this.state.listShown) {
                this.refs.hambContainer.classList.toggle("change");
                this.setState({
                    listShown: false
                })
            }
        }
    }
    toogleHamburger = () => {
        this.refs.hambContainer.classList.toggle("change");
        this.refs.menuList.classList.toggle("menuListShown");

        var menuListItems = document.querySelectorAll(".menuListItem");
        var i = 0;
        for (var mli of menuListItems) {
            i++;
            mli.style.animationDelay = `.${i}s`
            mli.style.animationDuration = `.3s`
            if (i % 2 === 0) {
                mli.classList.toggle("slideInLeft");
            }
            else {
                mli.classList.toggle("slideInRight");
            }
        }
        this.setState({
            listShown: !this.state.listShown
        });

    }
    startTimeout = (time, url, linkId) => {
        return (setTimeout(() => {
            history.push(`/${url}`);
        }, time));
    }

    changeUrl = (e) => {
        console.log(e);

        var url
        if (typeof (e) === 'object') {
            e.persist();
            url = e.target.id;
        }
        else {
            url = e;
        }


        if (url != this.props.currentUrl) {
            console.log(url);
            var myTimeout;
            var linkId = '';

            switch (this.props.currentUrl) {
                case '':
                    this.changeFromHome();
                    myTimeout = this.startTimeout(1000, url, linkId);

                    break;

                case 'cv':
                    this.changeFromCV();
                    linkId = 'cv'
                    myTimeout = this.startTimeout(1000, url, linkId)
                    break;

                case 'portfolio':
                    this.changeFromPortfolio();
                    linkId = 'portfolio';
                    myTimeout = this.startTimeout(800, url, linkId);

                    break;

                case 'skills':
                    this.changeFromSkills();
                    linkId = 'skills';
                    myTimeout = this.startTimeout(1400, url, linkId);

                    break;

                case 'about':
                    this.changeFromAbout();
                    linkId = 'about';
                    myTimeout = this.startTimeout(1400, url, linkId);

                    break;

                case 'contact':
                    this.changeFromContact();
                    linkId = 'contact';
                    myTimeout = this.startTimeout(700, url);

                    break;


                default:
                    break;

            }

            this.props.urlChanged(e.target.id)
            this.setState({ currentUrl: e.target.id }, () => {
                console.log("Next url: ", this.state.currentUrl);
            });

            if (window.innreWidth < 1000) {
                this.refs.hambContainer.classList.toggle("change");
                this.refs.menuList.classList.toggle("menuListShown");
            }
        }

    }

    changeFromHome() {
        const p = document.querySelectorAll(".homeP");
        const cvLink = document.querySelector(".cvLink");

        for (var el of p) {
            el.classList.remove("fadeIn");
            el.classList.add("zoomOut");
        }

        cvLink.classList.remove("slideInUp");
        cvLink.classList.add("fadeOutDown");

    }

    changeFromCV() {
        const cv = document.querySelector('.cvContainer');
        cv.classList.remove('fadeIn');
        cv.classList.add('fadeOut');
    }

    changeFromPortfolio() {
        const portfolio = document.querySelector(".portfolioContainer");
        portfolio.classList.add("fadeOut");
    }

    changeFromSkills() {
        const title = document.querySelector(".skillContainerTitle");
        const grDesign = document.querySelector(".grDesignContainer");
        const front = document.querySelector('.frontEndContainer');
        const back = document.querySelector(".backEndContainer");
        const technologies = document.querySelector(".gridTechnologies");


        title.classList.add("fadeOut");

        grDesign.classList.remove("slideInLeft");
        grDesign.classList.add("fadeOutLeft");

        front.classList.remove("zoomIn");
        front.classList.add("zoomOut");

        back.classList.remove("slideInRight");
        back.classList.add("fadeOutRight");

        technologies.classList.remove("fadeIn");
        technologies.classList.add("fadeOutDown");
    }

    changeFromAbout() {
        const abImage = document.querySelector(".aboutImage");
        const descTitle = document.querySelector(".descriptionTitle");
        const descText = document.querySelector(".descriptionText");
        const scBreaker = document.querySelector(".sectionBreaker");
        const aboutSection = document.querySelector(".aboutSection");


        abImage.classList.remove("fadeIn");
        abImage.classList.add("fadeOutLeft");

        descTitle.classList.remove("slideInDown");
        descTitle.classList.add("fadeOutLeft");

        descText.classList.remove("slideInUp");
        descText.classList.add("fadeOutLeft");

        aboutSection.classList.remove("slideInUp");
        aboutSection.classList.add("fadeOutLeft");


        // edu.classList.add("fadeOutLeft");


        // int.classList.add("fadeOutLeft");
    }

    changeFromContact() {
        const contactTitle = document.querySelector(".contactTitle");

        contactTitle.classList.remove("slideInUp");
        contactTitle.classList.add("fadeOutDown");

    }

    render() {
        return (
            <div>
                <div className="hamburgerContainer">
                    <div class="hamburger" ref="hambContainer" onClick={this.toogleHamburger}>
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                </div>
                <ul className="menuList" ref="menuList">
                    <li className="menuListItem animated">

                        {
                            this.props.currentUrl === '' ?
                                <div style={{ color: '#1aa3ff' }} id="" onClick={this.changeUrl}>Home</div> :
                                <div id="" onClick={this.changeUrl}>Home</div>
                        }
                        {/* <NavLink exact activeClassName="activeLink" to={"/"}>Home</NavLink> */}

                    </li>
                    <li className="menuListItem animated">

                        {
                            this.props.currentUrl === 'portfolio' ?
                                <div style={{ color: '#1aa3ff' }} id="portfolio" onClick={this.changeUrl}>Portfolio</div> :
                                <div id="portfolio" onClick={this.changeUrl}>Portfolio</div>
                        }
                        {/* <NavLink activeClassName="activeLink" to={"/portfolio"}>Portfolio</NavLink> */}
                    </li>
                    <li className="menuListItem animated">

                        {
                            this.props.currentUrl === 'skills' ?
                                <div style={{ color: '#1aa3ff' }} id="skills" onClick={this.changeUrl}>Umiejętności</div> :
                                <div id="skills" onClick={this.changeUrl}>Umiejętności</div>
                        }
                        {/*  <NavLink activeClassName="activeLink" to={"/skills"}>Umiejętności</NavLink> */}
                    </li>
                    <li className="menuListItem animated">
                        {
                            this.props.currentUrl === 'about' ?
                                <div style={{ color: '#1aa3ff' }} id="about" onClick={this.changeUrl}>O mnie</div> :
                                <div id="about" onClick={this.changeUrl}>O mnie</div>
                        }
                        {/* <NavLink activeClassName="activeLink" to={"/about"}>O mnie</NavLink> */}
                    </li>
                    <li className="menuListItem animated">
                        {
                            this.props.currentUrl === 'contact' ?
                                <div style={{ color: '#1aa3ff' }} id="contact" onClick={this.changeUrl}>Kontakt</div> :
                                <div id="contact" onClick={this.changeUrl}>Kontakt</div>
                        }
                        {/* <NavLink activeClassName="activeLink" to={"/contact"}>Kontakt</NavLink> */}
                    </li>
                </ul>
                <div className="clearBoth"></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUrl: state.pages.currentUrl
    }
}

const mapDispatchToProps = { urlChanged }


const Header = connect(mapStateToProps, mapDispatchToProps)(Head)

export default Header;