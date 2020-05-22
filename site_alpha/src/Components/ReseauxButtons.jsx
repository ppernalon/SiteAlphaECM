import React from 'react';
import PopUp from "./PopUp";
import "./styles/ReseauxButtons.css";

export default class ReseauxButtons extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            visited:[0,0,0,0]
        }
    }

    animation = {
        0 : ' animated pulse infinite slow',
        1 : ''
    }

    handleAnimation = (number) => {
        let temp = this.state.visited;
        temp[number] = 1;
        this.setState({visited : temp})
    }

    render(){
        return(
            <div id="ReseauxButtonsDiv">
                <div className={"ReseauxButtons"+this.animation[this.state.visited[0]]} onClick={() => this.handleAnimation(0)} id="C5">
                    <PopUp type="Reseaux" identity="C5"/>
                </div>

                <div className={"ReseauxButtons"+this.animation[this.state.visited[1]]} onClick={() => this.handleAnimation(1)} id="BNEI">
                    <PopUp type="Reseaux" identity="BNEI"/>
                </div>

                <div className={"ReseauxButtons"+this.animation[this.state.visited[2]]} onClick={() => this.handleAnimation(2)} id="AssoM">
                    <PopUp type="Reseaux" identity="AssoM"/>
                </div>

                <div className={"ReseauxButtons"+this.animation[this.state.visited[3]]} onClick={() => this.handleAnimation(3)} id="AI">
                    <PopUp type="Reseaux" identity="AI"/>
                </div>
            </div>
        )

    }

}
