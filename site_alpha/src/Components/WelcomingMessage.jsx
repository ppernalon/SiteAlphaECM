import React from 'react';
import data from "../content/WelcomingMessage_data";
import "./styles/WelcomingMessage.css";

export default class WelcomingMessage extends React.Component{
    constructor(props){
        super(props)
    this.message1 = this.props.data.message1;
    this.message2 = this.props.data.message2;
    this.authors = this.props.data.authors;
    }

    render() {
        return(
            <div id="Message_WM">
                <p> {this.message1} <br/> </p>
                <p> {this.message2} </p>
                <button id="Formulaire"> Donne nous tes coordonnées pour en savoir plus ! </button>
                <br/>
                <span> {this.authors} </span>
            </div>
        )
    }
}
