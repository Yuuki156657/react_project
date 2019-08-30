import React from 'react';
import './All1.css';
import './All2.css';
import './All3.css';


export default class About extends React.Component{

    render(){
        return(
            <section id="about" className="about">
            <div id="about0" className="about0">

            <div id="about1" className="about1">
            
            <img className="about-img1" src={`${process.env.PUBLIC_URL}/about-img1.png`} />

            <div className="about2">
            <div className="about-label">
                <label>About me</label>
            </div>



            <div className="skill">
                <h4 className="dark-color">HTML5</h4>
                <div className="skill-bar">
                <span>90%</span>
                <progress min="0" max="100" value="90"></progress>
                </div>

                <h4 className="dark-color">CSS3</h4>
                <div className="skill-bar">
                <span>85%</span>
                <progress min="0" max="100" value="85"></progress>
                </div>

                <h4 className="dark-color">JavaScript</h4>
                <div className="skill-bar">
                <span>50%</span>
                <progress min="0" max="100" value="50"></progress>
                </div>

                <h4 className="dark-color">React.js</h4>
                <div className="skill-bar">
                <span>20%</span>
                <progress min="0" max="100" value="20"></progress>
                </div>
                </div>

                <div className="about-text">
                <p className="about-p1">I would like to be a web front end developer.<br />And, I have experience working as an electrical engineer in Japan for more than five years.<br />I was not only in charge of designing electrical circuit but I also used to manage some small projects. </p>
            </div>
            </div>
            </div>
            </div>
            </section>
        )
    }
} 