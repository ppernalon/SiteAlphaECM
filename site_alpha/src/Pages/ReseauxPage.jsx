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
        this.message = "Clausos vehementer vehementer consumendo inediae vehebant vero quod clausos quae vehebant clausos vehebant cibos angebat exitialis navigiis quidem ipsi exitialis vehebant frumenta Isauri clausos ipsi horrebant solitarum adfluebant Isauri navigiis consumendo aerumnas cibos flumen iam copiis per quod horrebant captis flumen cibos exitialis tamen quidem cibos Isauri quod cibos flumen Isauri captis clausos vehementer cibos ipsi flumen clausos cibos aerumnas angebat cibos per horrebant quod propinquantis exitialis angebat cibos frumenta horrebant aerumnas tamen vehementer frumenta solitarum vehebant flumen flumen quidem angebat per rerum per per quidem alimentorum clausos vehebant Isauri exitialis cibos cibos captis inediae copiis angebat propinquantis vehebant rerum.";
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
