import React from 'react';
import './styles/PopUp.css'
import Croix from '../Assets/Buttons/Buttons__croix.png';
import data from '../content/data';
import Slideshow from './Slideshow';

export default class PopUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visible : false,
        }

        this.entity = data[this.props.identity];
        this.logo = this.entity.Logo;
        this.color = this.entity.Color;
        this.name = this.entity.Name;
        this.message = this.entity.Message;
        this.title = this.entity.Title;
        this.images = this.entity.Images;
        this.links = this.entity.Links;
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
            return (
                <div className='container'>
                    <input type="button" value={this.title} onClick={() => this.openModal()}/>
                    <div onClick={() => this.closeModal()} className="close_area"> </div>
                    <div className="PopUp">
                        <div class={"bordure " + this.color}>
                            <h1> {this.title}</h1>
                            <p> </p>
                            <img className="croix" src={Croix} alt="close" onClick={() => this.closeModal()}/>
                        </div>
                        <div className="tableau">
                            <div className="line1-container">
                                <h2> {this.name}</h2>
                                <img className="logo" alt="logo" src={this.logo}/>
                            </div>
                            <div className="line2-container">
                                <div className="Message">
                                    <p> {this.message}</p>
                                    <div className="Links"></div>
                                </div>
                                <Slideshow className="Photos" images = {this.images}></Slideshow>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (<div> <input type="button" value={this.title}  onClick={() => this.openModal()}/> </div>)
        }
    }
}
