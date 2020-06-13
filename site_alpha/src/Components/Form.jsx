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
                <a id="Formulaire" href={""} target={"_blank"}>
                    Centrale Marseille t'intéresse ?
                </a>
            )
    }
}
