import React, { Component } from 'react';
import audio from  "./images/audio-wave-256.png"
import logo13 from  "./images/logo13.png"
import "./NavigationBar.css"


class NavigationBar extends Component {
    render() {
        return (
            <>
                        <nav className="navbar" id="navbar">
                            <div className="logo">
                            <img src={logo13}/>
                            <div className="logo_d"><span>UNSPLASH</span><span>INFINITY</span></div>
                            <sup>TM</sup>
                            </div>
                            <div className="sbar">
                                <input type="text" id="sbar" className='search'/>
                                <button className="sbutton" >SEARCH</button>
                            </div>
                            <div className="icons">
                            <p id="prod">Products</p>
                            <p id="car">Carreers</p>
                            <p className="hire">Hire us</p>
                            <div id="ir"><img src={audio} alt="" /></div>
                            </div>
                        </nav>
                
            </>
        );
    }
}

export default NavigationBar;