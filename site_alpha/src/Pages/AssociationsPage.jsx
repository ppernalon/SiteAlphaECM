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
        this.message = "Hello !\n" +
            "Félicitations à toi pour ton\n" +
            "parcours ! Ne t’en fais pas, la peine que\n" +
            "tu t’es donnée pour arriver jusqu’ici n’a\n" +
            "pas été vaine, ta vie en École s’annonce\n" +
            "grandiose !\n" +
            "À Centrale Marseille, la vie associative\n" +
            "est très riche et te laisse l’opportunité\n" +
            "de t’épanouir complètement à travers\n" +
            "toutes les possibilités qu’elle t’offre. Que ce\n" +
            "soit pour participer aux événements, pour\n" +
            "avoir des responsabilités ou simplement\n" +
            "pour laisser place à sa créativité, chacun\n" +
            "y trouve son compte. Et tout cela dans\n" +
            "un cadre exceptionnel : le beau temps et\n" +
            "la mer sont toujours là pour te donner le\n" +
            "sourire !\n" +
            "On t’attend alors impatiemment\n" +
            "sous le soleil marseillais !";
        this.state = {transitionClass:this.props.transition}
    }

    render()
    {
        return(
            <div id={"AssociationsPage"} className={this.state.transitionClass}>
                <AlphaButtons/>
                <Message title={this.title} message={this.message}/>
            </div>
        )
    }

    componentDidMount() {
        setTimeout( () => {
            this.setState({transitionClass:""})
        },1000)
    }

    componentWillUnmount() {
        setTimeout( () => {
            this.setState({transitionClass:"animated FadeInRight"})
        },1000)
    }
}
