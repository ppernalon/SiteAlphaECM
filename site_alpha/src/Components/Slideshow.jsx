import React from 'react';
import Left_arrow from '../Assets/Buttons/Buttons__scroll_sp_left.png';
import Right_arrow from '../Assets/Buttons/Buttons__scroll_sp_right.png';
import './styles/Slideshow.css';
import HexagonPlein from "../Assets/Buttons/HexagonePleinBlanc.png";
import HexagonVide from "../Assets/Buttons/HexagoneVideBlanc.png";

export default class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rank:0,
        };
        this.images_length = Object.keys(this.props.images).length;
    }

    next_img = () => {
        clearInterval(this.nextImageInterval);
        let newRank = this.calcNextRank(this.state.rank);
        this.setState(
            {
                rank : newRank,
            });
        this.nextImageInterval = setInterval(this.next_img, 5000);
    };

    calcNextRank(currentRank){
        let newRank = currentRank;
        if (currentRank === this.images_length - 1) {
            newRank = 0;
        }
        else {
            newRank++;
        }
        return newRank;
    };

    previous_img = () => {
        clearInterval(this.nextImageInterval);
        let prevRank = this.calcPrevRank(this.state.rank);
        this.setState({
            rank : prevRank,
        });
        this.nextImageInterval = setInterval(this.next_img, 5000);
    };

    calcPrevRank(currentRank){
        let newRank = currentRank;
        if (currentRank === 0){
            newRank = this.images_length - 1;
        }
        else {
            newRank--;
        }
        return newRank;
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
        let progressionSlideshow = this.slideshowProgession();
        let interfaceApparente = this.images_length > 1;
        let styleInterface = interfaceApparente ? {} : {display: "none"};
        return (
            <div id="SlideshowDiv">
                <div id={"interfaceSlideshow"} style={styleInterface}>
                    <img className="L_Arrow Arrow" src={Left_arrow} alt="next" onClick={this.previous_img}/>
                    <img className="R_Arrow Arrow" src={Right_arrow} alt="next" onClick={this.next_img}/>
                    <div id={"counterDiv"}>
                        {progressionSlideshow}
                    </div>
                </div>
                <div id={"slideshowImg_" + this.state.rank} className="slideshowImg" style={{backgroundImage: 'url(' + this.props.images[this.state.rank] + ')'}}/>
            </div>

        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props)
        {
            if (this.props.images !== prevProps.images){
                this.setState({rank:0})
            }

            this.images_length = Object.keys(this.props.images).length;
            this.forceUpdate()
        }
    }

    componentDidMount() {
        this.nextImageInterval = setInterval(this.next_img, 5000);
    }
}