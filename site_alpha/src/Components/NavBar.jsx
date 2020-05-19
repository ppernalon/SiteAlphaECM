import React from 'react';
import ButtonImage from '../Assets/Buttons/Buttons__menu.png';
import LogowCM from '../Assets/Logos_site/Logos__wCM.png';
import Menu from "./Menu";
import Backdrop from "./BackDrop";
import SlideDrawer from "./SlideDrawer";
import {NavLink} from "react-router-dom";

export default class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            windowWidth:window.innerWidth,

        }
    }

    handleResize = () => {
        this.setState({
            windowWidth: window.innerWidth
        });
    };

    drawerToggleClickHandler = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    };

    backdropClickHandler = () => {
        this.setState({
            drawerOpen: false
        })
    };


    render() {
        if (this.state.windowWidth > 768){
            return(
                <div className="NavBar">
                    <NavLink to={"/"}>
                        <img src={LogowCM} height="80px" className="MenuLogo"/>
                    </NavLink>
                    <Menu/>
                </div>
            )
        }
        else{
            return(
                <div>
                <div className="NavBar">
                    <img src={LogowCM} height="80px" className="MenuLogo"/>
                    <img src={ButtonImage} width="50px" onClick={this.drawerToggleClickHandler} className="MenuButton"/>
                </div>
                    <Backdrop show={this.state.drawerOpen} close={this.backdropClickHandler}/>
                    <SlideDrawer show={this.state.drawerOpen} toggle={this.drawerToggleClickHandler}/>
                </div>
            )
        }
    }

    componentDidMount() {
        window.addEventListener("resize",this.handleResize);
    }

}
