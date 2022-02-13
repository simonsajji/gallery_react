import React, { Component } from 'react';
import "./Content.css"
import img1 from "./images/bgg_fin.jpg"
import img2 from "./images/breno-machado-in9-n0JwgZ0-unsplash.jpg"
import img3 from "./images/thor.jpg"
import img4 from "./images/sw2.jpg"
import img5 from "./images/sw3.jpg"
import img6 from "./images/VUDsO6X-lightning-storm-wallpaper.jpg"
class Content extends Component {
    render() {
        return (
            <div className='gridbox'>
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
                <img src={img4}/>
                <img src={img5}/>
                <img src={img6}/>
                
                
            </div>
        );
    }
}

export default Content;