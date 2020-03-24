import React from 'react';
import WelcomingMessage from '../Components/WelcomingMessage'
import logo from "../logo.svg";

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            welcomingMessage:{
                message:'',
                authors:''
            }
        }
    }

    render() {
        return(
            <div className="page">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Page d'Accueil</p>
                </header>
            </div>
        )
    }
}
