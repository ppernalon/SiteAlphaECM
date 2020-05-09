import React from 'react';
import './styles/AssociationsPage.css';
import AlphaButtons from '../Components/AlphaButtons';
import Message from "../Components/Message";

export default class AssociationsPage extends React.Component
{
    constructor(props)
    {
        super(props);

        this.title = "Mot des prez'";
        this.message = "Salut toi !\n" +
            "Tu es surement en plein dans tes oraux ou bien en\n" +
            "préparation de ceux-ci ou encore en plein débat\n" +
            "interne : mais quelle école choisir ?\n" +
            "Reste motivé, ne lâche rien et prend 5 minutes pour\n" +
            "t’imprégner de ta future vie en école d’ingénieur.\n" +
            "Tu vas voir : ça vaut le coup de se donner à fond !\n" +
            "Je vais te laisser explorer cette plaquette pour\n" +
            "en apprendre plus sur toutes les associations qui\n" +
            "\n" +
            "rythment la vie des centraliens à travers des pho-\n" +
            "tos, témoignages et anecdotes. En tout cas, nous\n" +
            "\n" +
            "t’attendons avec impatience pour te faire découvrir\n" +
            "notre univers ! Si tu as des questions auxquelles\n" +
            "cette plaquette ne répond pas, n’hésite surtout pas\n" +
            "à me contacter, je te répondrai avec plaisir.\n" +
            "Fais-toi confiance, donne-toi à fond et à bientôt au soleil !";
    }

    render()
    {
        return(
            <div id={"AssociationsPage"} className={"animated fadeIn"}>
                <AlphaButtons/>
                <Message title={this.title} message={this.message}/>
            </div>
        )
    }
}
