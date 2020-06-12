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
            "Félicitations à toi pour ton parcours ! Ne\n" +
            "t’en fais pas, la peine que tu t’es donnée pour\n" +
            "arriver jusqu’ici n’a pas été vaine, ta vie en\n" +
            "École s’annonce grandiose !\n" +
            "À Centrale Marseille, la vie associative\n" +
            "est très riche et te laisse l’opportunité de\n" +
            "t’épanouir complètement à travers toutes\n" +
            "les possibilités qu’elle t’offre. Que ce soit\n" +
            "pour participer aux événements, pour avoir\n" +
            "des responsabilités ou simplement pour\n" +
            "laisser place à sa créativité, chacun y trouve\n" +
            "son compte. Et tout cela dans un cadre\n" +
            "exceptionnel : le beau temps et la mer sont\n" +
            "toujours là pour te donner le sourire !\n" +
            "On t’attend alors impatiemment sous le\n" +
            "soleil marseillais !";
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
