import React from 'react';
import ReseauxButtons from "../Components/ReseauxButtons";
import Message from "../Components/Message";
import './styles/ReseauxPage.css';

export default class ReseauxPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            transitionClass:this.props.transition
        }

        this.title = "Nos réseaux";
        this.message = "Etre étudiant à Centrale Marseille donne accès à de nombreux réseaux. Chaque réseau est différent et " +
            "te permet de t'impliquer dans divers monde. Ainsi tu pourras prendre part à la vie étudiante de Marseille grâce à " +
            "l'AssoM, échanger avec les élèves provenant d'autres Centrale avec le C5, profiter de l'expérience des anciens " +
            "pour t'aider dans ta vie professionnelle auprès des Alumni, ou encore participer aux discussions portant sur " +
            "les élèves ingénieurs " +
            "via le BNEI. Plusieurs réseaux pour de très nombreuses opportunités !";
    }

    render(){
        return(
            <div id="ReseauxPageDiv" className={this.state.transitionClass}>
                <ReseauxButtons/>
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
