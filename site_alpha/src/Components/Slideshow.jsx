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
            rank:0,
            imagesArray: [
                <div id={"slideshowImg_" + 0} className="slideshowImg" style={{backgroundImage: 'url(' + this.props.images[0] + ')', left:"0"}}/>,
                <div id={"slideshowImg_" + 1} className="slideshowImg" style={{backgroundImage: 'url(' + this.props.images[1] + ')',display:"none" ,left:"-100%"}}/>,
                <div id={"slideshowImg_" + this.calcPrevRank(0)} className="slideshowImg" style={{backgroundImage: 'url(' + this.props.images[this.calcPrevRank(0)] + ')',display:"none" , left:"100%"}}/>
            ]
        };

        this.images_length = Object.keys(this.props.images).length;
    }

    next_img = () => {
        let nextRank = this.calcNextRank(this.state.rank);
        this.animationNextImg(nextRank)
        this.setState(
            {
                rank : nextRank,
                imagesArray: [
                    <div id={"slideshowImg_" + nextRank} className="slideshowImg" style={{backgroundImage: 'url(' + this.props.images[nextRank] + ')', left:"0"}}/>,
                    <div id={"slideshowImg_" + this.calcNextRank(nextRank)} className="slideshowImg" style={{backgroundImage: 'url(' + this.props.images[this.calcNextRank(nextRank)] + ')', display:"none", left:"-100%"}}/>,
                    <div id={"slideshowImg_" + this.calcPrevRank(nextRank)} className="slideshowImg" style={{backgroundImage: 'url(' + this.props.images[this.calcPrevRank(nextRank)] + ')', display:"none", left:"100%"}}/>
                ]
            });
    };

    animationNextImg(nextRank){
        let currentImg = document.getElementById("slideshowImg_"+this.state.rank);
        currentImg.style.transition = "1s";
        currentImg.style.left = 100 + "%";

        let nextImg = document.getElementById("slideshowImg_"+ nextRank);
        nextImg.style.display = "block";
        nextImg.style.transition = "1s";
        nextImg.style.left = "0";
        setTimeout(() => {}, 1000);
        currentImg.style.display = "none";
    }

    calcNextRank(currentRank){
        let newRank = currentRank;
        if (currentRank >= this.images_length - 1) {
            newRank = 0;
        }
        else if (currentRank < this.images_length -1) {
            ++newRank;
        }
        return newRank;
    };

    previous_img = () => {
        document.getElementById("slideshowImg_"+this.state.rank).style.display = "none";
        let currentRank = this.calcPrevRank(this.state.rank);
        document.getElementById("slideshowImg_"+currentRank).style.display = "block";
        this.setState({
            rank : currentRank,
        });
        document.getElementById("slideshowImg_"+currentRank).style.display = "block";
    };

    calcPrevRank(currentRank){
        let newRank = currentRank;
        if (currentRank > 0) {
            --newRank;
        }
        else if (currentRank <= 0){
            newRank = this.images_length - 1
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
        //let progressionSlideshow = this.slideshowProgession();
        return (
            <div id="SlideshowDiv">
                <div id={"interfaceSlideshow"}>
                    <img className="L_Arrow Arrow" src={Left_arrow} alt="next" onClick={this.previous_img}/>
                    <img className="R_Arrow Arrow" src={Right_arrow} alt="next" onClick={this.next_img}/>
                    <div id={"counterDiv"}>
                        {this.state.rank + 1}/{this.images_length}
                    </div>
                </div>
                {this.state.imagesArray}
            </div>

        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props)
        {
            this.setState({
                rank:0,
                imagesArray: [
                    <div id={"slideshowImg_" + 0} className="slideshowImg" style={{backgroundImage: 'url(' + this.props.images[0] + ')', left:"0"}}/>,
                    <div id={"slideshowImg_" + 1} className="slideshowImg" style={{backgroundImage: 'url(' + this.props.images[1] + ')',display:"none" , left:"-100%"}}/>,
                    <div id={"slideshowImg_" + this.calcPrevRank(0)} className="slideshowImg" style={{backgroundImage: 'url(' + this.props.images[this.calcPrevRank(0)] + ')',display:"none" , left:"100%"}}/>
                ]
            });

            this.images_length = Object.keys(this.props.images).length;
            this.forceUpdate()
        }
    }
}