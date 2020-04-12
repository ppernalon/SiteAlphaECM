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
                <div className="Buttons" id="CentraleMarseille">
                    <PopUp type="VilleMarseille" identity="CentraleMarseille"/>
                </div>

                <div className="Buttons" id="MuCEM">
                    <PopUp type="VilleMarseille" identity="MuCEM"/>
                </div>

                <div className="Buttons" id="VieuxPort">
                    <PopUp type="VilleMarseille" identity="VieuxPort"/>
                </div>

                <div className="Buttons" id="NotreDame">
                    <PopUp type="VilleMarseille" identity="NotreDame"/>
                </div>

                <div className="Buttons" id="Frioul">
                    <PopUp type="VilleMarseille" identity="Frioul"/>
                </div>

                <div className="Buttons" id="Calanques">
                    <PopUp type="VilleMarseille" identity="Calanques"/>
                </div>

                <div className="Buttons" id="OrangeVelodrome">
                    <PopUp type="VilleMarseille" identity="OrangeVelodrome"/>
                </div>

            </div>
        )
    }
}

