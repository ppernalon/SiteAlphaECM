import React from 'react';
import './styles/MarseillePage.css';
import MarseilleMap from '../Components/MarseilleMap';
import Message from '../Components/Message'
import ScrollButton from "../Components/ScrollButton";

export default class MarseillePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {transitionClass:this.props.transition};
        this.message = "Au-delà des clichés, Marseille est\n" +
            "une ville vivante qui regorge d’activités\n" +
            "! Avec ses 300 jours de soleil par\n" +
            "an, tu pourras bronzer sur les plages,\n" +
            "te promener et te baigner dans les\n" +
            "calanques, visiter les rues typiques\n" +
            "du Panier ou plus simplement te\n" +
            "poser en terrasse sur le Vieux-\n" +
            "Port. Au travers des innombrables\n" +
            "musées, dont le fameux MuCEM,\n" +
            "mais aussi des animations sportives\n" +
            "comme la Color Run ou la Run and\n" +
            "Mix, tu ne pourras que t’épanouir à\n" +
            "Marseille.\n" +
            "Niveau vie étudiante, pas de\n" +
            "soucis à se faire : avec ses quelques\n" +
            "50 000 étudiants, du Vieux-Port au\n" +
            "Cours Julien en passant par le\n" +
            "Rooftop, Marseille est une ville qui\n" +
            "bouge tous les soirs de la semaine.";
        this.title = "Centrale Marseille et ses Alentours"
    }

    render() {
        return(
            <div id="MarseillePage" className={this.state.transitionClass}>
                <MarseilleMap/>
                <Message title={this.title} message={this.message}/>
            </div>
        )
    }

    componentDidMount() {
        setTimeout( () => {
            this.setState({transitionClass:""})
        },1000)
    }
}
