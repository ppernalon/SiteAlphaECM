import React, {Suspense, lazy} from 'react';
import './styles/Navigator.css'
import SlideDrawer from "./SlideDrawer";
import Backdrop from "./BackDrop";
import NavBar from './NavBar';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SplashPage from "../Pages/SplashPage";


const HomePage = lazy(() => import('../Pages/HomePage'));
const MarseillePage = lazy(() => import('../Pages/MarseillePage'));
const AssociationsPage = lazy(() => import('../Pages/AssociationsPage'));

export default class NavigatorRouter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            drawerOpen:false
        }
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
                <Router>
                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <NavBar toggle={this.drawerToggleClickHandler}/>
                        <Suspense fallback={<SplashPage/>}>
                            <Switch>
                                <Route exact path="/" component={HomePage}/>
                                <Route path="/marseille" component={MarseillePage}/>
                                <Route path="/associations" component={AssociationsPage}/>
                            </Switch>
                        </Suspense>
                        <Backdrop show={this.state.drawerOpen} close={this.backdropClickHandler}/>
                        <SlideDrawer show={this.state.drawerOpen} toggle={this.drawerToggleClickHandler} navigate={this.navigationHandler}/>
                </Router>
            </div>
        )
    }
}
