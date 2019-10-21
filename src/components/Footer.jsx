import React from 'react';
import './All1.css';
import './All2.css';
import './All3.css';

export default class Footer extends React.Component{
    render(){
        return(
            <section id="footer" className="footer">
            <div className="footer1">
                <h1>YUUKI.N</h1>
                <p>Adress: Vancouver, BC  / 
                Mobile: 1(778)697-4814 / Email: tawapeee16@gmail.com</p>
            </div>

            <div className="footer-sns">

            <a href="https://www.linkedin.com/in/yuki-nagano-45b8a217b/" target="_blank">
            <span　className="fab fa-linkedin fa-2x linked" id="footer-linked" />
            </a>
            <a href="https://www.instagram.com/yuuuuuki_100percent/" target="_blank">
            <span　className="fab fa-instagram fa-2x insta" id="footer-insta" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100004352167032" target="_blank">
            <span　className="fab fa-facebook-square fa-2x fb" id="footer-fb" />
            </a>
            <a href="https://twitter.com/" target="_blank">
            <span　className="fab fa-twitter-square fa-2x twitter" id="footer-twitter" />
            </a>
            </div>

            {/* <div className="footer-content">
                <ul>
                <li>
                    <a href="#header" className="menu-item-s">HOME</a>
                    <a href="#about" className="menu-item-s">ABOUT</a>
                    <a href="#portfolios" className="menu-item-s">PORTFOLIOS</a>
                    <a href="#works" className="menu-item-s">WORK EXPERIENCE</a>
                    <a href="#contact" className="menu-item-s">CONTACT</a>
                </li>
                </ul>
            </div> */}
            </section>
        )
    }
} 