import React from 'react';
import Left_arrow from '../Assets/Buttons/Buttons__scroll_sp_left.png';
import Right_arrow from '../Assets/Buttons/Buttons__scroll_sp_right.png';
import './styles/Slideshow.css';
import HexagonPlein from "../Assets/Buttons/HexagonePlein.png";
import HexagonVide from "../Assets/Buttons/HexagoneVide.png";

export default class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rank:0
        };
        this.images = this.props.images;
        this.images_length = Object.keys(this.images).length;
    }

    next_img = () => {
        if (this.state.rank >= this.images_length - 1) {
            this.setState({ rank: 0});
        }
        else if (this.state.rank < this.images_length -1) {
            let prevRank = this.state.rank;
            this.setState({ rank: ++prevRank});
        }
    };

    previous_img = () => {
        if (this.state.rank > 0) {
            let prevRank = this.state.rank;
            this.setState({ rank: --prevRank});
        }
        else if (this.state.rank <= 0){
            this.setState({ rank: this.images_length - 1});
        }
    };

    slideshowProgession = () => {
        let progessionHexa = [];
        for (let i=0; i<=this.state.rank; i++){
            progessionHexa.push(<img className={"slideshowProgressionHexagones"} src={HexagonPlein} alt={'progression'}/>)
        }

        for (let i=this.state.rank+1; i<this.images_length; i++){
            progessionHexa.push(<img className={"slideshowProgressionHexagones"} src={HexagonVide} alt={'progression'}/>)
        }
        return progessionHexa;
    }

    render() {
        let imagesArray = [];
        for (let i=0; i < this.images_length; i++)
        {
            imagesArray.push(<img id={"slideshowImage_" + i.toString()}
                                  className={"slideshowImages"}
                                  src={this.images[i]}
                                  alt={"photo"}/>)
        }

        let progressionSlideshow = this.slideshowProgession();

        return (
            <div id="SlideshowDiv" style={{backgroundImage: 'url(' + this.images[this.state.rank] + ')',}}>

                <img className="L_Arrow Arrow" src={Left_arrow} alt="next" onClick={this.previous_img}/>
                <img className="R_Arrow Arrow" src={Right_arrow} alt="next" onClick={this.next_img}/>
                <div id={"counterDiv"}>
                    {this.state.rank + 1}/{this.images_length}
                </div>
            </div>

        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props)
        {
            this.setState( {
                rank:0
            });
            this.images = this.props.images;
            this.images_length = Object.keys(this.images).length;
            this.forceUpdate()
        }
    }
}