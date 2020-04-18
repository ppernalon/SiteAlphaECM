import React from 'react';
import './styles/PopUpPortail.css'
import Croix from '../Assets/Buttons/Buttons__croix.png';
import DataPortailAsso from '../content/DataPortailAsso';
import PopUp from "./PopUp";

export default class PopUpPortail extends React.Component{
    constructor(props){
        super(props);
        this.Entity = DataPortailAsso[this.props.identity];
        this.state={
            visible : false,
            screenWidth: window.innerWidth,
            Img_btn: this.Entity["Img_btn"][(window.innerWidth > 727) ? "nav" : "sp"]
        };

        this.Color = this.Entity["Color"];
        this.Title = this.Entity["Title"];
        this.Assos = ["BDE", "BDA", "BDS", "FABLAB", "ISF", "MDV"];

        if (this.state.screenWidth <= 727){
            this.setState({Img_btn: this.Entity["Img_btn"]["sp"]});
        }
        else if (this.state.screenWidth > 727){
            this.setState({Img_btn: this.Entity["Img_btn"]["nav"]});
        }

    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        if (this.state.visible) {

            let arrayAssos = [];
            for(let asso in this.Entity.Assos){
                let Asso_btn;
                Asso_btn = (
                    <div className={"ButtonAssoPortail " + this.Color + "AssoPortailBTN"}>
                        <PopUp type={"Assos"} identity={asso} severalPages={this.Assos.includes(asso)}/>
                    </div>
                );
                arrayAssos.push(Asso_btn);
            }

            let PopUpPortail;
            PopUpPortail = (
                <div className={"PopUpPortail " + this.Color + "Portail"}>
                    <input id="closeCross" type={"image"} src={Croix} alt={"croix"} onClick={() => this.closeModal()}/>
                    <img id={"logoPortail"} alt={"logo du pôle"} src={this.Entity.Logo}/>
                    <div id={"Grid-container-PopUpPortail"}>
                        {arrayAssos.map((ligne) => ligne)}
                    </div>
                </div>
            );

            return (
                <div>
                    <input className={"PopUpPortailBTN"} type="image" alt="button" src={this.state.Img_btn} onClick={() => this.openModal()}/>
                    <div onClick={() => this.closeModal()} className="close_area"> </div>
                    {PopUpPortail}
                </div>
            );
        }
        else {
            return (<div> <input className="PopUpPortailBTN" type="image" alt="button" src={this.state.Img_btn} onClick={() => this.openModal()}/> </div>)
        }
    }

    handleResize = () => {
        this.setState({
            screenWidth: window.innerWidth,
        });

        if (this.state.screenWidth <= 727){
            this.setState({Img_btn: this.Entity["Img_btn"]["sp"]});
        }
        else if (this.state.screenWidth > 727){
            this.setState({Img_btn: this.Entity["Img_btn"]["nav"]});
        }
    };

    componentDidMount() {
        window.addEventListener("resize",this.handleResize);
    }
}
