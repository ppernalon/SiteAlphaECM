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
            ville : ""
        }
    }

    animation = {
        0 : ' animated pulse infinite slow',
        1 : ''
    }

    handleAnimation = (number) => {
        let temp = this.state.visited;
        temp[number] = 1;
        this.setState({visited : temp})
    }

    handelSubmit = (e) => {
        e.preventDefault()

    };

    handleStep = () => {
        let step = this.state.step;
        step = step + 1;
        this.setState({step:step})
    };

    handleInputChange = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    render() {
        if(this.state.step === 0){
            return (
                <div id="Formulaire" onClick={this.handleStep}>
                    Donne nous tes coordonnées pour recevoir plus d'infos!!!
                </div>
            )
        }
        if(this.state.step === 1){
            return (
                <div id="Formulaire">
                            <label htmlFor="lastName">Nom : </label>
                            <input type="text" name="lastName" required value={this.state.lastName} onChange={this.handleInputChange}/>
                            <button onClick={this.handleStep}> > </button> <div>Etape {1}/{5}</div>
                </div>
            )
        }
        if(this.state.step === 2){
            return (
                <div id="Formulaire">
                    <label htmlFor="firstName">Prénom : </label>
                    <input type="text" name="firstName" required value={this.state.firstName} onChange={this.handleInputChange}/>
                    <button onClick={this.handleStep}> > </button> <div>Etape {2}/{5}</div>
                </div>
            )
        }
        if(this.state.step === 3){
            return (
                <div id="Formulaire">
                    <label htmlFor="email">Email : </label>
                    <input type="text" name="email" required value={this.state.email} onChange={this.handleInputChange}/>
                    <button onClick={this.handleStep}> > </button> <div>Etape {3}/{5}</div>
                </div>
            )
        }
        if(this.state.step === 4){
            return (
                <div id="Formulaire">
                    <label htmlFor="adresse">Adresse : </label>
                    <input type="text" name="adresse" required value={this.state.adresse} onChange={this.handleInputChange}/>
                    <br/>
                    <label htmlFor="codePostal">Code Postal :</label>
                    <input type="number" name="codePostal" required value={this.state.codePostal} onChange={this.handleInputChange}/>
                    <br/>
                    <label htmlFor="ville">Ville :</label>
                    <input type="text" name="ville" required value={this.state.ville} onChange={this.handleInputChange}/>
                    <button onClick={this.handleStep}> > </button> <div>Etape {4}/{5}</div>
                </div>
            )
        }
        if(this.state.step === 5){
            return (
                <div id="Formulaire">
                    <form action="?" method="POST">
                        <br/>
                        <div id="CG">
                            <p>Conditions Générales de confidentialité</p>
                            Le formulaire de demande d'information contenu sur la page ms-imeo.centrale-marseille.info constitue un traitement de données personnelles géré par l'Ecole centrale de Marseille fondé sur la base de la précontractualisation. Les informations recueillies à partir de ce formulaire, [nom, prénom, téléphone, email] sont transmises au service Executive Education de l'Ecole centrale de Marseille, ainsi qu'à son partenaire SeaTech, pour gérer votre demande d'information sur le site de l'Ecole centrale de Marseille et également dans le cadre de la promotion des offres de formation de l'Ecole centrale de Marseille. Les données recueillies sont conservées pour une durée de 3 ans.
                            Vous pouvez accéder et obtenir copie des données vous concernant, vous opposer au traitement de ces données, les faire rectifier ou les faire effacer. Vous disposez également d'un droit à la limitation du traitement de vos données.
                            Vous pouvez exercer ces droits auprès du délégué à la protection des données en le contactant à l'adresse suivante : dpo@centrale-marseille.fr
                            Si vous estimez, après nous avoir contactés, que vos droits sur vos données ne sont pas respectés, vous pouvez adresser une réclamation (plainte) auprès de la Commission nationale de l'Informatique et des Libertés (CNIL).
                        </div>
                        <input type="submit" value="Valider"/>
                        <Captcha/>
                    </form>
                </div>
            )
        }
    }
}
