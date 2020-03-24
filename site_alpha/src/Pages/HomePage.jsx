import React from 'react';
import WelcomingMessage from '../Components/WelcomingMessage'
import logo from "../Assets/Logos_site/Logos__site_wShadow.png";
import data from '../content/HomePage';
import './styles/HomePage.css';

const message1 = data.welcomingWord.message1
const message2 = data.welcomingWord.message2
const authors = data.welcomingWord.authors

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div id="container">
                <img id="Logo" src={logo} alt={"logo"}/>
                <div id="Message">
                    <p> {message1} <br/> </p>
                    <p> {message2} </p>
                    <button id="Formulaire"> Donne nous tes coordonnées pour en savoir plus ! </button>
                    <br/>
                    <span> {authors} </span>
                </div>
            </div>
        )
    }
}
