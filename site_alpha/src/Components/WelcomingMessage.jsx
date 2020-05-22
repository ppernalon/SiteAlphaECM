import React from 'react';
import "./styles/WelcomingMessage.css";
import Form from "./Form";

export default class WelcomingMessage extends React.Component{
    constructor(props){
        super(props);
        this.authors = "BIDAN Clément et PERNALON Paul"
        this.message = "Réalisé par les étudiants de Centrale Marseille, ce site te permettra de découvrir la vie étudiante et associative de notre école. En te souhaitant bon courage pour les concours et bonne découverte !";
    }

    render() {
        return(
            <div id="Message_WM">
                <p id={"pBaliseWM"}> &emsp; &emsp; {this.message} </p>
                <Form/>
                <br/>
                <span> {this.authors} </span>
            </div>
        )
    }
}
