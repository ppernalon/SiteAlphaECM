import React from 'react';
import PopUp from './PopUp';
import './styles/AlphaButtons.css';

export default class AlphaButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="AlphaButtons_container">
                <div className="Buttons" id="pole_VDE">
                    <PopUp type="Portail" identity="VDE"/>
                </div>

                <div className="Buttons" id="pole_sport">
                    <PopUp type="Portail" identity="Sport"/>
                </div>

                <div className="Buttons" id="pole_business">
                    <PopUp type="Portail" identity="Business"/>
                </div>

                <div className="Buttons" id="pole_citoyennete">
                    <PopUp type="Portail" identity="Citoyennete"/>
                </div>

                <div className="Buttons" id="pole_culture">
                    <PopUp type="Portail" identity="Culture"/>
                </div>

                <div className="Buttons" id="pole_innovation">
                    <PopUp type="Portail" identity="Innovation"/>
                </div>

                <div className="Buttons" id="Asso_UA">
                    <PopUp type="Assos" identity="UA"/>
                </div>

            </div>
        )
    }
}