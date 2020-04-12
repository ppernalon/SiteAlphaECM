import React from 'react';
import PopUp from './PopUp';
import PopUpPortail from './PopUpPortail';
import './styles/AlphaButtons.css';

export default class AlphaButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="AlphaButtons_container">

                <div className="Buttons" id="pole_VDE">
                    <PopUpPortail identity="VDE"/>
                </div>

                <div className="Buttons" id="pole_sport">
                    <PopUpPortail identity="Sport"/>
                </div>

                <div className="Buttons" id="pole_business">
                    <PopUpPortail identity="Business"/>
                </div>

                <div className="Buttons" id="pole_citoyennete">
                    <PopUpPortail identity="Citoyennete"/>
                </div>

                <div className="Buttons" id="pole_culture">
                    <PopUpPortail identity="Culture"/>
                </div>

                <div className="Buttons" id="pole_innovation">
                    <PopUpPortail identity="Innovation"/>
                </div>

                <div className="Buttons" id="Asso_UA">
                    <PopUp type="Assos" identity="UA"/>
                </div>

            </div>
        )
    }
}