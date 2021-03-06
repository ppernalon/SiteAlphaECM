import React from 'react';
import './styles/PopUp.css'
import Croix from '../Assets/Buttons/Buttons__croix.png';
import DataEntities from '../content/DataEntities';
import Slideshow from "./Slideshow";
import RightArrow from '../Assets/Buttons/Buttons__nextPopUp.png';
import LeftArrow from '../Assets/Buttons/Buttons__lastPopUp.png';
import voidArrow from '../Assets/Buttons/Buttons__blanckPopUp.png';
import Fb_icon from '../Assets/Icons/Facebook.png';
import Insta_icon from '../Assets/Icons/Instagram.png';
import Site_icon from '../Assets/Icons/Site.png';
import Twitter_icon from '../Assets/Icons/Twitter.png';
import HexagonVide from '../Assets/Buttons/HexagoneVide.png';
import HexagonPlein from '../Assets/Buttons/HexagonePlein.png';

export default class PopUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible : false,
        };

        this.Type = this.props.type;
        this.Entity = DataEntities[this.Type][this.props.identity];
        this.Color = this.Entity["Color"];
        this.Title = this.Entity["Title"];

        if (this.Type === "Assos"){
            this.Img_btn = this.Entity.Logo;
            if (this.props.identity === "UA"){
                this.Img_btn = this.Entity.Img_btn;
            }
        }

        else{
            this.Img_btn = this.Entity["Img_btn"];
        }

        if (this.props.severalPages){
            this.Pages = this.Entity.Pages;
            this.state = {content: this.Pages[0],
                contentInd: 0,};
            this.Pages_length = Object.keys(this.Pages).length;
        }

        if (this.Entity.Links === false){
            this.Links = <div/>;
        }
        if (this.Entity.Links !== false){
            this.Links = []
            for (let key in this.Entity.Links){
                let icon;
                if (key === "Facebook"){
                    icon = Fb_icon
                }
                else if (key === "Instagram"){
                    icon = Insta_icon
                }
                else if (key === "Site"){
                    icon = Site_icon
                }
                else if (key === "Twitter"){
                    icon = Twitter_icon
                }
                this.Links.push(
                    <a className={"LinkPopUp"} id={key + "link"} target="_blank" href={this.Entity.Links[key]}>
                        <img className={"LinkIconImg"} src={icon} alt={"Networks icon Centrale Marseille"}/>
                    </a>)
            }
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false,
        });
    }

    previous_Page = () => {
        let ActualContentInd = this.state.contentInd;
        if (ActualContentInd > 0) {
            --ActualContentInd;
        }
        else if (ActualContentInd <= 0){
            ActualContentInd = this.Pages_length - 1;
        }
        this.setState(
            { contentInd: ActualContentInd,
                content: this.Pages[ActualContentInd]});
    };

    next_Page = () => {
        let ActualContentInd = this.state.contentInd;
        if (ActualContentInd >= this.Pages_length - 1) {
            ActualContentInd = 0;
        }
        else if (ActualContentInd < this.Pages_length -1) {
            ++ActualContentInd;
        }
        this.setState(
            { contentInd: ActualContentInd,
                content: this.Pages[ActualContentInd]});
    };

    pageProgession = () => {
        let progessionHexa = [];
        for (let i=0; i<=this.state.contentInd; i++){
            progessionHexa.push(<img className={"pageProgressionHexagones"} src={HexagonPlein} alt={'progression'}/>)
        }

        for (let i=this.state.contentInd+1; i<this.Pages_length; i++){
            progessionHexa.push(<img className={"pageProgressionHexagones"} src={HexagonVide} alt={'progression'}/>)
        }
        return progessionHexa;
    }

    pageNavigatorButtons = () => {
        let pageNavigatorButtons =
            [<img id={"LeftArrowButtonPopUP"}
                  src={this.props.severalPages ? LeftArrow : voidArrow}
                  alt={"précdent"}
                  onClick={this.props.severalPages ? this.previous_Page : () => {}}
            />,
            <div id={"pageProgessionHexagones"}>
                {this.pageProgession()}
            </div>,
            <img id={"RightArrowButtonPopUP"}
                  src={this.props.severalPages ? RightArrow : voidArrow}
                  alt={"suivant"}
                  onClick={this.props.severalPages ? this.next_Page : () => {}}
            />];
        return (this.props.severalPages ? pageNavigatorButtons : <div/>)
    }

    render() {
        if (this.state.visible) {

            let pageNavigatorButtons = this.pageNavigatorButtons()

            return (
                <div>
                    <input className={"PopUpBTN " + this.Type + "TypeBTN"} type="image" alt="button" src={this.Img_btn} onClick={() => this.openModal()}/>

                    <div onClick={() => this.closeModal()} className="close_area"/>

                    <div className="PopUpAsso">

                        <div className={this.Color} id={"Bordure"}>
                            <h1 id={"PoleAssociatif"}> &emsp; {this.Title}</h1>
                            <img id="closeCrossPopUpAsso" src={Croix} alt="close" onClick={() => this.closeModal()}/>
                        </div>

                        <div id="row1-container">
                            <img id="EntityLogoPopUp" alt="logo" src={this.props.severalPages ? this.state.content.Logo : this.Entity.Logo}/>
                            <h1 id={"EntityName"}> {this.props.severalPages ? this.state.content.Name : this.Entity.Name}</h1>
                            <div id={"pageNavigatorDiv"}>
                                {pageNavigatorButtons}
                            </div>
                        </div>

                        <div id="row2-container">
                            <p id="Texte_PopUp"> &emsp; &emsp; {this.props.severalPages ? this.state.content.Message : this.Entity.Message} </p>
                            <Slideshow images={this.props.severalPages ? this.state.content.Images : this.Entity.Images}/>
                        </div>

                        <div id="LinksPopUp">
                            {this.Links}
                        </div>

                    </div>

                </div>
            );
        }
        else {
            return (<div> <img className={"PopUpBTN " + this.Type + "TypeBTN"} alt="button" src={this.Img_btn} onClick={() => this.openModal()}/> </div>)
        }
    }
}
