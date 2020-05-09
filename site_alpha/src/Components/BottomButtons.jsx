import React from 'react';
import {NavLink} from 'react-router-dom';

export default class BottomButtons extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
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
