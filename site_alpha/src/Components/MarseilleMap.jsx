import React from 'react';
import './styles/MarseilleMap.css';
import PopUp from './PopUp';

export default class MarseilleMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div id="Map">
                <div className="ButtonsMarseilleMap" id="CentraleMarseille">
                    <PopUp type="VilleMarseille" identity="CentraleMarseille"/>
                </div>

                <div className="ButtonsMarseilleMap" id="MuCEM">
                    <PopUp type="VilleMarseille" identity="MuCEM"/>
                </div>

                <div className="ButtonsMarseilleMap" id="VieuxPort">
                    <PopUp type="VilleMarseille" identity="VieuxPort"/>
                </div>

                <div className="ButtonsMarseilleMap" id="NotreDame">
                    <PopUp type="VilleMarseille" identity="NotreDame"/>
                </div>

                <div className="ButtonsMarseilleMap" id="Frioul">
                    <PopUp type="VilleMarseille" identity="Frioul"/>
                </div>

                <div className="ButtonsMarseilleMap" id="Calanques">
                    <PopUp type="VilleMarseille" identity="Calanques"/>
                </div>

                <div className="ButtonsMarseilleMap" id="OrangeVelodrome">
                    <PopUp type="VilleMarseille" identity="OrangeVelodrome"/>
                </div>

            </div>
        )
    }
}