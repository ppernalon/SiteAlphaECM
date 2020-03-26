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
    }

    next_img(){
        if (this.state.rank == this.props.images.length){
            this.setState({ rank: 0});
        }
        else {
            this.setState((prevSate) => ({ rank: prevSate.rank++}));
        }
    }

    previous_img(){
        if (this.state.rank == 0){
            this.setState({ rank: this.props.images.length});
        }
        else {
            this.setState((prevSate) => ({ rank: prevSate.rank--}));
        }
    }

    render() {
        return (
            <div className="Slideshow">
                <div className="Slide_box">
                    <img className="Current_image" src={this.images[this.state.rank]}/>
                </div>
                <div className="Arrow_btns">
                    <img className="L_Arrow Arrow" src={Left_arrow} alt="next" onClick={() => this.previous_img()}/>
                    <img className="R_Arrow Arrow" src={Right_arrow} alt="next" onClick={() => this.next_img()}/>
                </div>
            </div>
        )
    }


}