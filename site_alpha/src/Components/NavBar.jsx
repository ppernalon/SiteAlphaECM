import React from 'react';
import ButtonImage from '../Assets/Buttons/Buttons__menu.png';
import LogowCM from '../Assets/Logos_site/Logos__wCM.png';
import Menu from "./Menu";

export default class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            windowWidth:window.innerWidth
        }
    }

    handleResize = () => {
        this.setState({
            windowWidth: window.innerWidth
        });
    };

    render() {
        if (this.state.windowWidth > 768){
            return(
                <div className="NavBar">
                    <img src={LogowCM} height="80px" className="MenuLogo"/>
                    <Menu scale={0.3} toggle={this.props.toggle} navigate={this.props.navigate}/>
                </div>
            )
        }
        else{
            return(
                <div className="NavBar">
                    <img src={LogowCM} height="80px" className="MenuLogo"/>
                    <img src={ButtonImage} width="50px" onClick={this.props.toggle} className="MenuButton"/>
                </div>
            )
        }
    }

    componentDidMount() {
        window.addEventListener("resize",this.handleResize);
    }
}
