import React from 'react';
import PopUp from './PopUp';
import PopUpPortail from './PopUpPortail';
import './styles/AlphaButtons.css';

export default class AlphaButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            visited:[0,0,0,0,0,0,0]
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

    render() {
        return (
            <div id="AlphaButtons_container">

                <div className={"Buttons" + this.animation[this.state.visited[0]]} onClick={() => this.handleAnimation(0)} id="pole_VDE">
                    <PopUpPortail identity="VDE"/>
                </div>

                <div className={"Buttons" + this.animation[this.state.visited[1]]} onClick={() => this.handleAnimation(1)} id="pole_sport">
                    <PopUpPortail identity="Sport"/>
                </div>

                <div className={"Buttons" + this.animation[this.state.visited[2]]} onClick={() => this.handleAnimation(2)} id="pole_business">
                    <PopUpPortail identity="Business"/>
                </div>

                <div className={"Buttons" + this.animation[this.state.visited[3]]} onClick={() => this.handleAnimation(3)} id="pole_citoyennete">
                    <PopUpPortail identity="Citoyennete"/>
                </div>

                <div className={"Buttons" + this.animation[this.state.visited[4]]} onClick={() => this.handleAnimation(4)} id="pole_culture">
                    <PopUpPortail identity="Culture"/>
                </div>

                <div className={"Buttons" + this.animation[this.state.visited[5]]} onClick={() => this.handleAnimation(5)} id="pole_innovation">
                    <PopUpPortail identity="Innovation"/>
                </div>

                <div className={"Buttons" + this.animation[this.state.visited[6]]} onClick={() => this.handleAnimation(6)} id="Asso_UA">
                    <PopUp type="Assos" identity="UA"/>
                </div>

            </div>
        )
    }
}
