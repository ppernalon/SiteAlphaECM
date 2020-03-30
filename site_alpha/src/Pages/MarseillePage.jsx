import React from 'react';
import PresentationMessage from '../Components/WelcomingMessage'
import logo from "../logo.svg";

export default class MarseillePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            presentationMessage:{
                title:'',
                message:''
            }
        }
    }

    render() {
        return(
            <div className="page">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Page de présentation de marseille</p>
            </div>
        )
    }
}
