import React from 'react';
import MarseilleMap_img from '../Assets/Marseille_map/Marseille_Map_bis.png';
import './styles/MarseillePage.css';
import CentraleMarseille from '../Assets/Marseille_map/Marseille_CentraleMarseille.png';
import MarseilleMap from '../Components/MarseilleMap';

export default class MarseillePage extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="MarseillePage">
                <MarseilleMap/>
                <div id="Message">

                </div>
            </div>
        )
    }
}
