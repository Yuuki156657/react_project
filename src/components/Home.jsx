import React from 'react';
import './All1.css';
import './All2.css';
import './All3.css';


export default class Home extends React.Component {
    render(){
        return(
            <section id="home" className="home">

                <div className="home1">
                    <h1 className="home1-p1">Hello, I'm Yuuki</h1>
                    <h3 className="home1-p2">I'm studying web development.<br />I would like to be a web front end developer.</h3>

                    <a href="https://www.facebook.com/profile.php?id=100004352167032" target="_blank">
                    <span　className="fab fa-facebook-square fa-2x fb" id="fb" />
                    </a>
                    <a href="https://www.instagram.com/yuuuuuki_100percent/" target="_blank">
                    <span　className="fab fa-instagram fa-2x insta" id="insta" />
                    </a>
                    <a href="https://www.linkedin.com/in/yuki-nagano-45b8a217b/" target="_blank">
                    <span　className="fab fa-linkedin fa-2x linked" id="linked" />
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                    <span　className="fab fa-twitter-square fa-2x twitter" id="twitter" />
                    </a>

                    <img className="home1-img1" src={`${process.env.PUBLIC_URL}/home1.png`} />
                </div>
                <div className="down-arrow">
                <a href="#about"></a>
                </div>
            </section>
        )
    }
}