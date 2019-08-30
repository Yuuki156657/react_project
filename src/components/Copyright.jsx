import React from 'react';
import './All1.css';
import './All2.css';
import './All3.css';

export default class Copyright extends React.Component{
    render(){
        return(
            <section id="copyright" className="copyright">
                <div className="copyright1">
                    &copy; 2019, Created by Yuki Nagano.
                </div>
            </section>
        )
    }
}