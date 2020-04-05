import React from 'react';
import Slideshow from './Slideshow';

export default class PopUpAsso extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
        }

        this.logo = this.props.Logo;
        this.color = this.props.Color;
        this.name = this.props.Name;
        this.message = this.props.Message;
        this.title = this.props.Title;
        this.images = this.props.Images;
        this.links = this.props.Links;
    }

    render() {
        return(
            <div>
                <div className="tableau">
                    <div className="line1-container">
                        <img className="logo" alt="logo" src={this.logo}/>
                        <h2> {this.name}</h2>
                    </div>
                    <div className="line2-container">
                        <div className="Message">
                            <p id="Texte_PopUp"> {this.message}</p>
                            <div className="Links"></div>
                        </div>
                        <Slideshow className="Photos" images={this.images}></Slideshow>
                    </div>
                </div>
            </div>
        )
    }
}