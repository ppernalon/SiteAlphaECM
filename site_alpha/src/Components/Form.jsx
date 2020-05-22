import React from 'react';
import PopUp from './PopUp';
import PopUpPortail from './PopUpPortail';
import './styles/Form.css';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            step : 0
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

    render() {
        let classStep1 = "";
        if(this.state.step === 0){
            return (
                <div id="Formulaire">
                    <form action="" method="get" onSubmit={(e) => this.handelSubmit(e)}>
                        <div className="form-example">
                            <label htmlFor="mail">Donne nous tes coordonnées pour recevoir plus d'infos!!! </label>
                            <label htmlFor="mail">Nom & Prénom: </label>
                            <input type="text" name="name" id="name" required/>
                            <label htmlFor="Adresse">Adresse Postale</label>
                            <input type="text" name="address" id="address" required/>
                            <input type="submit" value="Envoyer!"/>
                        </div>
                    </form>
                </div>
            )
        }
    }
}
