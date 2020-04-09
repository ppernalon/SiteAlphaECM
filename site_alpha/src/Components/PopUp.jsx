import React from 'react';
import './styles/PopUp.css'
import Croix from '../Assets/Buttons/Buttons__croix.png';
import data from '../content/data';
import Slideshow from "./Slideshow";
import SavoirPlusBTN from "../Assets/Buttons/Buttons__savoir_plus_vde.png"

export default class PopUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visible : false,
            content : <div/>,
            type: this.props.type,
            entity : data[this.props.type][this.props.identity],
        };

        this.originalType = this.props.type;
        this.originalEntity = data[this.props.type][this.props.identity];
        this.Img_btn = data[this.props.type][this.props.identity]["Img_btn"];
        this.Color = data[this.props.type][this.props.identity]["Color"];
        this.Title = data[this.props.type][this.props.identity]["Title"];
    }

    openModal() {
        this.contentChoice();
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false,
            entity: this.originalEntity,
            type: this.originalType
        });
    }

    changeIdentity(type, identity){
        this.setState({
            type: type,
            entity: data[type][identity]
        });
        this.contentChoice()
    }

    contentChoice()
    {
        if (this.state.type === "Assos")
        {
            let PopUpAsso;
            PopUpAsso = (
                <div className="tableau">
                    <div className="line1-container">
                        <img className="logo" alt="logo" src={this.state.entity.Logo}/>
                        <h2> {this.state.entity.Name}</h2>
                    </div>
                    <div className="line2-container">
                        <div className="Message">
                            <p id="Texte_PopUp"> {this.state.entity.Message}</p>
                            <div className="Links"></div>
                        </div>
                        <Slideshow className="Photos" images={this.state.entity.Images}/>
                    </div>
                </div>
            );

            this.setState({content:PopUpAsso});
        }

        else if (this.state.type === "Portail")
        {
            let arrayAssos = [];
            for(let asso in this.state.entity.Assos){
                let ligneAsso;
                ligneAsso = (
                    <div className="ligneAsso">
                        <img className="logoAssoPortail" src={this.state.entity.Assos[asso].Logo} alt={"logo"}/>
                        <h1 className={"nomAsso"}> {this.state.entity.Assos[asso].Name} </h1>
                        <input className={"enSavoirPlusBTN"}
                               type={"image"}
                               alt={"en savoir +"}
                               src={SavoirPlusBTN}
                               onClick={() => this.changeIdentity("Assos",asso)}/>
                    </div>
                );
                arrayAssos.push(ligneAsso);
            }

            let PopUpPortail;
            PopUpPortail = (
                <div id="PopUpPortail">
                    {arrayAssos.map((ligne) => ligne)}
                </div>
            );

            this.setState({content:PopUpPortail});
        }
    }

    render() {
        if (this.state.visible) {
            return (
                <div>
                    <input className="PopUpBTN" type="image" alt="button" src={this.Img_btn} onClick={() => this.openModal()}/>
                    <div onClick={() => this.closeModal()} className="close_area"> </div>
                    <div className="PopUp" id="Asso">
                        <div className={"bordure " + this.Color}>
                            <h1> {this.Title}</h1>
                            <p/>
                            <img className="croix" src={Croix} alt="close" onClick={() => this.closeModal()}/>
                        </div>
                        {this.state.content}
                    </div>
                </div>
            );
        }
        else {
            return (<div> <input className="PopUpBTN" type="image" alt="button" src={this.Img_btn} onClick={() => this.openModal()}/> </div>)
        }
    }
}
