import React from 'react';
import './styles/PopUp.css'
import Croix from '../Assets/Buttons/Buttons__croix.png';
import data from '../content/data';
import PopUpAsso from './PopUpAsso';
import PopUpPortail from './PopUpPortail';

export default class PopUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visible : false,
            content : <div></div>,
        }

        this.entity = data[this.props.type][this.props.identity];
        this.color = this.entity.Color;
        this.title = this.entity.Title;

        if (this.props.type === "Assos"){
            this.logo = this.entity.Logo;
            this.color = this.entity.Color;
            this.name = this.entity.Name;
            this.message = this.entity.Message;
            this.images = this.entity.Images;
            this.links = this.entity.Links;
        }
        if (this.props.type === "Portail"){
            this.assos = this.entity.Assos
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

    contentChoice()
    {
        if (this.props.type === "Assos")
        {
            this.setState({content:<PopUpAsso Color={this.color}
                                                     Logo={this.logo}
                                                     Title={this.title}
                                                     Message={this.message}
                                                     Name={this.name}
                                                     Images={this.images}
                                                     Links={this.links}/>});
        }

        else if (this.props.type === "Portail")
        {
            this.setState({content:<PopUpPortail Assos={this.assos}
                                  Color={this.color}
                                  Title={this.title}/>});
        }
    }

    render() {
        if (this.state.visible) {
            this.contentChoice()
            return (
                <div>
                    <input type="image" src={this.entity.Img_btn} onClick={() => this.openModal()}/>
                    <div onClick={() => this.closeModal()} className="close_area"> </div>
                    <div className="PopUp" id="Asso">
                        <div className={"bordure " + this.color}>
                            <h1> {this.title}</h1>
                            <p></p>
                            <img className="croix" src={Croix} alt="close" onClick={() => this.closeModal()}/>
                        </div>
                        {this.state.content}
                    </div>
                </div>
            );
        }
        else {
            return (<div> <input type="image" src={this.entity.Img_btn} onClick={() => this.openModal()}/> </div>)
        }
    }
}
