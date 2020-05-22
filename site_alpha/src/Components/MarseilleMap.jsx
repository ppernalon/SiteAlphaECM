import React from 'react';
import './styles/MarseilleMap.css';
import PopUp from './PopUp';

export default class MarseilleMap extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            visited:[0,0,0,0,0,0,0]
        }
    }

    animation = {
        0 : ' animated pulse infinite',
        1 : ''
    }

    handleAnimation = (number) => {
        let temp = this.state.visited;
        temp[number] = 1;
        this.setState({visited : temp})
    }

    render(){
        return(
            <div id="Map">
                <div className={"ButtonsMarseilleMap"+this.animation[this.state.visited[0]]} onClick={() => this.handleAnimation(0)} id="CentraleMarseille">
                    <PopUp type="VilleMarseille" identity="CentraleMarseille" severalPages={true}/>
                </div>

                <div className={"ButtonsMarseilleMap"+this.animation[this.state.visited[1]]} onClick={() => this.handleAnimation(1)} id="MuCEM">
                    <PopUp type="VilleMarseille" identity="MuCEM"/>
                </div>

                <div className={"ButtonsMarseilleMap"+this.animation[this.state.visited[2]]} onClick={() => this.handleAnimation(2)} id="VieuxPort">
                    <PopUp type="VilleMarseille" identity="VieuxPort"/>
                </div>

                <div className={"ButtonsMarseilleMap"+this.animation[this.state.visited[3]]} onClick={() => this.handleAnimation(3)} id="NotreDame">
                    <PopUp type="VilleMarseille" identity="NotreDame"/>
                </div>

                <div className={"ButtonsMarseilleMap"+this.animation[this.state.visited[4]]} onClick={() => this.handleAnimation(4)} id="Frioul">
                    <PopUp type="VilleMarseille" identity="Frioul"/>
                </div>

                <div className={"ButtonsMarseilleMap"+this.animation[this.state.visited[5]]} onClick={() => this.handleAnimation(5)} id="Calanques">
                    <PopUp type="VilleMarseille" identity="Calanques"/>
                </div>

                <div className={"ButtonsMarseilleMap"+this.animation[this.state.visited[6]]} onClick={() => this.handleAnimation(6)} id="OrangeVelodrome">
                    <PopUp type="VilleMarseille" identity="OrangeVelodrome"/>
                </div>

            </div>
        )
    }
}

