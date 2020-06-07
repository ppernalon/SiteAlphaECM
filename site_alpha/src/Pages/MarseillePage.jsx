import React from 'react';
import './styles/MarseillePage.css';
import MarseilleMap from '../Components/MarseilleMap';
import Message from '../Components/Message'
import ScrollButton from "../Components/ScrollButton";

export default class MarseillePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {transitionClass:this.props.transition};
        this.message = "Au-delà des clichés,\n" +
            "Marseille est une ville vivante\n" +
            "qui regorge d’activités ! Avec ses\n" +
            "300 jours de soleil par an, vous\n" +
            "pourrez bronzer sur les plages,\n" +
            "vous promener et vous baigner\n" +
            "dans les calanques, visiter les rues\n" +
            "\n" +
            "typiques du Panier ou plus sim-\n" +
            "plement vous poser en terrasse\n" +
            "\n" +
            "sur le Vieux-Port. Au travers des\n" +
            "innombrables musées, dont le\n" +
            "fameux MuCEM, mais aussi des\n" +
            "\n" +
            "animations sportives comme la\n" +
            "Color Run ou la Run and Mix, vous\n" +
            "ne pourrez que vous épanouir à\n" +
            "Marseille.\n" +
            "Niveau vie étudiante, pas\n" +
            "de soucis à se faire : avec ses\n" +
            "quelques 50 000 étudiants, du\n" +
            "Vieux-Port au Cours Julien en\n" +
            "passant par le Rooftop, Marseille\n" +
            "est une ville qui bouge tous les\n" +
            "soirs de la semaine.";
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
