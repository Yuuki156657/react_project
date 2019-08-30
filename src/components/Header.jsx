import React from 'react';
import './All1.css';
import './All2.css';
import './All3.css';

export default class Header extends React.Component {
    render(){
        return(
            <section id="header" className="header">

            <p className="header-menu"></p>

            <div className="header1">

                <a href="#header">
                    <p className="logo">YUUKI.N</p>
                </a>
                <div id="menu" className="menu">
                    
                    <div id="nav-drawer">
                        <input id="nav-input" type="checkbox" className="nav-unshown" />
                        <label id="nav-open" htmlFor="nav-input"><i className="fas fa-hamburger fa-2x"></i></label>
                        <label className="nav-unshown" id="nav-close" htmlFor="nav-input"></label>
                        <div id="nav-content">
                        <ul><br />
                            <li><a href="#header" className="menu-item-s">HOME</a></li><br />
                            <li><a href="#about" className="menu-item-s">ABOUT</a></li><br />
                            <li><a href="#portfolios" className="menu-item-s">PORTFOLIOS</a></li><br />
                            <li><a href="#works" className="menu-item-s">WORK EXPERIENCE</a></li><br />
                            <li><a href="#contact" className="menu-item-s">CONTACT</a></li>
                        </ul>
                        </div>
                    </div>
                    <a href="#header" className="menu-item">HOME</a>
                    <a href="#about" className="menu-item">ABOUT</a>
                    <a href="#portfolios" className="menu-item">PORTFOLIOS</a>
                    <a href="#works" className="menu-item">WORK EXPERIENCE</a>
                    <a href="#contact" className="menu-item">CONTACT</a>
                </div>
            </div>
            </section>
        )
    }
}

