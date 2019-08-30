import React from 'react';
import './All1.css';
import './All2.css';
import './All3.css';

export default class Contact extends React.Component{
    render(){
        return(
            <section id="contact" className="contact">
            <div className="contact1">
                <h2>Get in <span>touch</span></h2>
            </div>

            <div className="contact2">

            <div className="contact2-1">
                <h1>Drop me a line</h1>
                <p>I'm here to answer any question you may have</p>
            </div>
            <div className="contact2-2">
                <input className="name" type="text" name="Name" size="40" maxLength="30" placeholder="Name" />
                <input className="email" type="Email" name="Email" size="40" maxLength="30" placeholder="Email" />
                <br />
                <br />
                <textarea className="mass" rows="6" cols="90" placeholder="Message" name="Message"></textarea>
                <br />
            </div>

        <div className="contact2-3">
        <input className="button" type="submit" value="Submit" /> 
        </div>
        </div>

        </section>
        )
    }
}