import React from 'react';
import './styles/Form.css';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            step : 0,
            lastName : "",
            firstName: "",
            codePostal : null,
            adresse : "",
            email : "",
            ville : "",
            recaptchaToken:null
        }
    }
    

    render() {
            return (
                <a id="Formulaire" href={"https://choisir.centrale-marseille.fr/recevoir-la-plaquette/"} target={"_blank"}>
                    Recevoir les plaquettes
                </a>
            )
    }
}
