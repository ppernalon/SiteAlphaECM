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
        this.message = "Clausos vehementer vehementer consumendo inediae vehebant vero quod clausos quae vehebant clausos vehebant cibos angebat exitialis navigiis quidem ipsi exitialis vehebant frumenta Isauri clausos ipsi horrebant solitarum adfluebant Isauri navigiis consumendo aerumnas cibos flumen iam copiis per quod horrebant captis flumen cibos exitialis tamen quidem cibos Isauri quod cibos flumen Isauri captis clausos vehementer cibos ipsi flumen clausos cibos aerumnas angebat cibos per horrebant quod propinquantis exitialis angebat cibos frumenta horrebant aerumnas tamen vehementer frumenta solitarum vehebant flumen flumen quidem angebat per rerum per per quidem alimentorum clausos vehebant Isauri exitialis cibos cibos captis inediae copiis angebat propinquantis vehebant rerum.";
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
