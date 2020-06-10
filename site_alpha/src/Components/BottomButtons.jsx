import React from 'react';
import {NavLink} from 'react-router-dom';

export default class BottomButtons extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        if (this.props.nextTitle === "Marseille"){
            return (
                <div id="BottomButtons">
                    <NavLink className={"BottomButton BottomButtonRight"} to={this.props.nextPath}>
                        {this.props.nextTitle}
                    </NavLink>
                </div>
            )
        }
        else if (this.props.previousTitle === "Calendrier"){
            return(
                <div id="BottomButtons">
                    <NavLink className={"BottomButton BottomButtonLeft"} to={this.props.previousPath}>
                        {this.props.previousTitle}
                    </NavLink>
                </div>
            )
        }
        else {
            return(
                <div id="BottomButtons">
                    <NavLink className={"BottomButton BottomButtonLeft"} to={this.props.previousPath}>
                        {this.props.previousTitle}
                    </NavLink>
                    <NavLink className={"BottomButton BottomButtonRight"} to={this.props.nextPath}>
                        {this.props.nextTitle}
                    </NavLink>
                </div>
            )
        }
    }
}
