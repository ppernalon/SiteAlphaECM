import React from 'react';
import './styles/Message.css'

export default class Message extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
            <div id="Message_container">
                <div className="BordureMessageComponent topMessageComponent"/>
                <div id="MessageComponent">
                    <h1 id={"h1IDMessageComponent"}>{this.props.title}</h1>
                    <p id={"pIDMessageComponent"}> &emsp; &emsp; {this.props.message}</p>
                </div>
                <div className="BordureMessageComponent botMessageComponent"/>
            </div>
            </div>
        )
    }
}
