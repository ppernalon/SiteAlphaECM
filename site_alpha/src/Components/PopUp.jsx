import React from 'react';
import './styles/PopUp.css'
import Croix from '../Assets/Buttons/Buttons__croix.png';
import data from '../content/data';
import Slideshow from "./Slideshow";

export default class PopUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visible : false,
        };

        this.Type = this.props.type;
        this.Entity = data[this.Type][this.props.identity];
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

    render() {
        if (this.state.visible) {
            return (
                <div>
                    <input className={"PopUpBTN " + this.Type + "TypeBTN"} type="image" alt="button" src={this.Img_btn} onClick={() => this.openModal()}/>
                    <div onClick={() => this.closeModal()} className="close_area"> </div>
                    <div className="PopUpAsso">
                        <div className={"bordure " + this.Color}>
                            <h1> {this.Title}</h1>
                            <p/>
                            <img className="croix" src={Croix} alt="close" onClick={() => this.closeModal()}/>
                        </div>
                        <div className="tableau">
                            <div className="line1-container">
                                <img className="logo" alt="logo" src={this.Entity.Logo}/>
                                <h2> {this.Entity.Name}</h2>
                            </div>
                            <div className="line2-container">
                                <div className="Message">
                                    <p id="Texte_PopUp"> {this.Entity.Message}</p>
                                    <div className="Links"></div>
                                </div>
                                <Slideshow className="Photos" images={this.Entity.Images}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (<div> <input className={"PopUpBTN " + this.Type + "TypeBTN"} type="image" alt="button" src={this.Img_btn} onClick={() => this.openModal()}/> </div>)
        }
    }
}
