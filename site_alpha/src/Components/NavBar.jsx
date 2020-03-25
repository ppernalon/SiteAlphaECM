import React from 'react';
import ButtonImage from '../Assets/Buttons/Buttons__menu.png';
import LogowCM from '../Assets/Logos_site/Logos__wCM.png';
import Menu from "./Menu";

export default class NavBar extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="NavBar">
                <img src={LogowCM} height="80px" className="MenuLogo"/>
                <Menu />
                <img src={ButtonImage} width="50px" onClick={this.props.toggle} className="MenuButton"/>
            </div>
        )
    }
}
