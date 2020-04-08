import React from 'react';
import './styles/Navigator.css'
import Menu from './Menu';
import SlideDrawer from "./SlideDrawer";
import Backdrop from "./BackDrop";
import HomePage from '../Pages/HomePage'
import MarseillePage from '../Pages/MarseillePage'
import NavBar from './NavBar'
import AssociationsPage from "../Pages/AssociationsPage";

export default class Navigator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentPage:<HomePage/>,
            drawerOpen:false
        }
    }


    navigationHandler = (newPage) => {
        this.setState({
            currentPage: this.pages[newPage]
        })
    };

    pages = {
        HomePage: <HomePage navigate={this.navigationHandler}/>,
        MarseillePage : <MarseillePage navigate={this.navigationHandler}/>,
        AssociationsPage : <AssociationsPage navigate={this.navigationHandler}/>
    }

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
                <NavBar toggle={this.drawerToggleClickHandler} navigate={this.navigationHandler}/>
                {this.state.currentPage}
                <Backdrop show={this.state.drawerOpen} close={this.backdropClickHandler}/>
                <SlideDrawer show={this.state.drawerOpen} toggle={this.drawerToggleClickHandler} navigate={this.navigationHandler}/>
            </div>
        )
    }
}
