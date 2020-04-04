import React from 'react';
import './styles/Message.css'

export default class Message extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div id="Message_container">
                <div className="Bordure top"/>
                <div id="Message">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.message}</p>
                </div>
                <div className="Bordure bot"/>
            </div>
        )
    }
}