import React from 'react';
import './All1.css';
import './All2.css';
import './All3.css';

export default class Portfolios extends React.Component{
    render(){
        return(
            <section id="portfolios" className="portfolios">

            <div className="portfolios1">
                <h1>My <span>Portfolios</span></h1>
            </div>

            <div className="portfolios2">

            <input type="radio" name="a" className="check_box1" id="hoge1" />
            <label className="label1" htmlFor="hoge1">Products</label>

            <input type="radio" name="a" className="check_box2" id="hoge2" />
            <label className="label" htmlFor="hoge2">HTML & CSS</label>

            <input type="radio" name="a" className="check_box3" id="hoge3" />
            <label className="label" htmlFor="hoge3">JavaScript</label>

            <input type="radio" name="a" className="check_box4" id="hoge4" />
            <label className="label" htmlFor="hoge4">React.js</label>
            <br />

            <div className="portfolios-wall">
            <p>Portfolios</p>
            </div>

            <div className="portfolios3">
                <div className="a">
                <div id="pf-img1">
                <a href="https://yuuki156657.github.io/pf1/" target="_blank">
                    <span　className="pf-img1"><img className="pf-img1" src={`${process.env.PUBLIC_URL}/pf1.png`} /></span>
                </a>
                </div>
                <div id="pf-img2">
                <a href="https://yuuki156657.github.io/pf2/" target="_blank">
                    <span　className="pf-img2"><img className="pf-img2" src={`${process.env.PUBLIC_URL}/pf2.png`} /></span>
                </a>
                </div>
                </div>
                <div className="b">
                <div id="pf-img3">
                <a href="https://yuuki156657.github.io/pf3/" target="_blank">
                    <span　className="pf-img3"><img className="pf-img3" src={`${process.env.PUBLIC_URL}/pf3.png`} /></span>
                </a>
                </div>
                <div id="pf-img4">
                <a href="https://yuuki156657.github.io/pf4/" target="_blank">
                    <span　className="pf-img4"><img className="pf-img4" src={`${process.env.PUBLIC_URL}/pf4.png`} /></span>
                </a>
                </div>
                </div>
                <div className="c">
                <div id="pf-img5">
                <a href="https://yuuki156657.github.io/react_project/" target="_blank">
                    <span　className="pf-img5"><img className="pf-img5" src={`${process.env.PUBLIC_URL}/pf5.png`} /></span>
                </a>
                
                </div>
                </div>
            </div>
            </div>
            </section>
        )
    }
} 

