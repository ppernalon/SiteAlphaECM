import React from 'react';
import './styles/MarseillePage.css';
import MarseilleMap from '../Components/MarseilleMap';
import Message from '../Components/Message'
import ScrollButton from "../Components/ScrollButton";

export default class MarseillePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            transition : 'animated fadeInRight'
        }
        this.message = "Au delà des clichés, Marseille est une ville vivante qui regorge d'activités ! Avec ses 300 jours de soleil par an, vous pourrez bronzer sur les plages, vous promener et vous baigner dans les calanques, visiter les rues typiques du Panier ou plus simplement vous poser en terrasse sur le Vieux-Port . Au travers des innombrables musées, dont le fameux MuCEM, mais aussi des animations sportives comme la Color Run ou la Run and Mix vous ne pourrez que vous épanouir à Marseille. Niveau vie étudiante, pas de soucis à se faire : avec ses quelques 50 000 étudiants, du Vieux-Port au Cours Julien en passant par le Rooftop Marseille est une ville qui bouge tous les soirs de la semaine."
        this.title = "Centrale Marseille et ses Alentours"
    }

    render() {
        return(
            <div id="MarseillePage"  className={this.props.transition}>
                <MarseilleMap/>
                <Message title={this.title} message={this.message}/>
            </div>
        )
    }
}
