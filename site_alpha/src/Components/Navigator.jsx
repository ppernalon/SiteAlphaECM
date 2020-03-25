import React from 'react';
import './styles/Navigator.css'
import Menu from './Menu';
import SlideDrawer from "./SlideDrawer";
import Backdrop from "./BackDrop";
import HomePage from '../Pages/HomePage'
import MarseillePage from '../Pages/MarseillePage'
import NavBar from './NavBar'

export default class Navigator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentPage:<HomePage/>,
            drawerOpen:false
        }
    }

    navigationHandler = (newPage) => {
        let pages = {
            HomePage: <HomePage navigate={this.props.navigate}/>,
            MarseillePage : <MarseillePage navigate={this.props.navigate}/>
        }
        this.setState({
            currentPage: pages[newPage],
            drawerOpen: !this.state.drawerOpen
        })
    };

    drawerToggleClickHandler = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    }

    backdropClickHandler = () => {
        this.setState({
            drawerOpen: false
        })
    }

    render() {
       return(
            <div className="container">
                <NavBar toggle={this.drawerToggleClickHandler}/>
                {this.state.currentPage}
                <Backdrop show={this.state.drawerOpen} close={this.backdropClickHandler}/>
                <SlideDrawer show={this.state.drawerOpen} navigate={this.navigationHandler}/>
            </div>
        )
    }
}
