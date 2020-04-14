import React from 'react';
import PopUp from "./PopUp";
import "./styles/ReseauxButtons.css";

export default class ReseauxButtons extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div id="ReseauxButtonsDiv">
                <div className="ReseauxButtons" id="C5">
                    <PopUp type="Reseaux" identity="C5"/>
                </div>

                <div className="ReseauxButtons" id="BNEI">
                    <PopUp type="Reseaux" identity="BNEI"/>
                </div>

                <div className="ReseauxButtons" id="AssoM">
                    <PopUp type="Reseaux" identity="AssoM"/>
                </div>

                <div className="ReseauxButtons" id="AI">
                    <PopUp type="Reseaux" identity="AI"/>
                </div>
            </div>
        )

    }

}