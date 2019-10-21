import React from 'react';
import './All1.css';
import './All2.css';
import './All3.css';

export default class Works extends React.Component{
    render(){
        return(
            <section id="works" className="works">

            <div className="works1">
                <h1>My <span>Work Experience</span></h1>
                <p>I have experience working as an electrical engineer in Japan for more than five years.<br />
                I was not only in charge of designing electrical circuit but I also used to manage lots of projects.</p>
            </div>

            <div className="works1-2">

            <div className="works2">
            <div className="works2-1">
                <img className="" src={`${process.env.PUBLIC_URL}/works1.png`} /><br /><br />
                <h4>Designing electrical Circuit</h4>
                <p>- Calculating circuit constants</p>
                <p>- Choosing electronics elements</p>
                <p>- Drawing schematics using OrCAD</p>
            </div>
            <div className="works2-2">
                <img className="" src={`${process.env.PUBLIC_URL}/works2.png`} /><br /><br />
                <h4>Evaluation of Circuit design</h4>
                <p>- Function evaluation using a oscilloscope</p>
                <p>- Environmental evaluation</p>
                <p>- Noise test (EMC)</p>
            </div>
            <div className="works2-3">
                <img className="" src={`${process.env.PUBLIC_URL}/works3.png`} /><br /><br />
                <h4>Managing Project for Product label</h4>
                <p>- Deciding design standard with custamor</p>
                <p>- Creating indication design</p>
                <p>- Making a schedule for manufacturing products</p>
            </div>
            <div className="works2-4">
                <img className="" src={`${process.env.PUBLIC_URL}/works4.jpg`} /><br /><br />
                <h4>Managing Project for Product package</h4>
                <p>- Making a comprehensive layout</p>
                <p>- Deciding a package structure</p>
                <p>- Making prototype and taking an endurance test</p>
            </div>
            </div>
            </div>
            </section>
        )
    }
} 