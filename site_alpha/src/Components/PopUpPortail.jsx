import React from 'react';
import data from '../content/data';
import Croix from '../Assets/Buttons/Buttons__croix.png';

export default class PopUpPortail extends React.Component {
    constructor(props) {
        super(props);

        this.color = this.props.Color;
        this.title = this.props.Title;
        this.assos = this.props.Assos;
    }

    render() {
        return (
            <div>


            </div>
        );
    }
}