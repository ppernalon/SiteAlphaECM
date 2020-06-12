import React from 'react';
import PopUp from './PopUp';
import PopUpPortail from './PopUpPortail';
import './styles/Form.css';
import Captcha from './Captcha'

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
                <div id="Formulaire" onClick={() =>{}}>
                    Donne nous tes coordonnées pour recevoir plus d'infos!!!
                </div>
            )
    }
}
