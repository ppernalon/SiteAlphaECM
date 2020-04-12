import React from 'react';
import {NavLink} from 'react-router-dom';

export default class ScrollButton extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        if (this.props.up){
            return(
                <NavLink className={"ScrollButton"} to={this.props.to}>
                    {this.props.title}
                </NavLink>)
        }
        return (<NavLink className={"ScrollButton"} to={this.props.to}>
            {this.props.title}
        </NavLink>)
    }
}
