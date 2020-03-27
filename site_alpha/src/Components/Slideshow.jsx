import React from 'react';
import Left_arrow from '../Assets/Buttons/Buttons__scroll_sp_left.png';
import Right_arrow from '../Assets/Buttons/Buttons__scroll_sp_right.png';
import './styles/Slideshow.css';

export default class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rank:0
        }
        this.images = this.props.images
        this.images_length = Object.keys(this.images).length
    }

    next_img(){
        if (this.state.rank === this.images_length - 1) {
            this.setState((prevSate)=> ({ rank: 0}));
        }
        else {
            this.setState((prevSate) => ({ rank: prevSate.rank++}));
        }
    }

    previous_img(){
        if (this.state.rank === 0){
            this.setState((prevSate)=> ({ rank: this.images_length - 1}));
        }
        else {
            this.setState((prevSate) => ({ rank: prevSate.rank--}));
        }
    }

    render() {
        return (
            <div className="Slideshow">
                <div className="Slide_box" style={{backgroundImage: 'url(' + this.images[this.state.rank] + ')',}}/>
                <div className="Arrow_btns">
                    <img className="L_Arrow Arrow" src={Left_arrow} alt="next" onClick={() => this.previous_img()}/>
                    <img className="R_Arrow Arrow" src={Right_arrow} alt="next" onClick={() => this.next_img()}/>
                </div>
                <p className="Counter">{this.state.rank + 1}/{this.images_length} </p>
            </div>

        )
    }


}