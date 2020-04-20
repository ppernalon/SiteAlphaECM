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
import ScrollButton from "./ScrollButton";


const HomePage = lazy(() => import('../Pages/HomePage'));
const MarseillePage = lazy(() => import('../Pages/MarseillePage'));
const AssociationsPage = lazy(() => import('../Pages/AssociationsPage'));
const ContactPage = lazy(() => import('../Pages/ContactPage'));

export default class NavigatorRouter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            drawerOpen:false,
            currentPage:'bonjour'
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

    handleScrollButton = () => {
        let path = window.location.pathname;
        this.setState({
            currentPage: path
        })
    }




    render() {
        return(
                <Router>
                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <NavBar toggle={this.drawerToggleClickHandler}/>
                        <div className="pageViewContainer">
                        <ScrollButton className={'ScrollButton ScrollButtonTop'} title="Précédent" to="/marseille" />
                        <Suspense fallback={<SplashPage/>}>
                            <Switch>
                                <Route exact path="/" component={HomePage}/>
                                <Route path="/marseille" component={MarseillePage}/>
                                <Route path="/associations" component={AssociationsPage}/>
                                <Route path="/contact" component={ContactPage}/>
                            </Switch>
                        </Suspense>
                        <ScrollButton className={'ScrollButton ScrollButtonBot'} title="Suivant" to="/marseille" />
                        </div>
                        <Backdrop show={this.state.drawerOpen} close={this.backdropClickHandler}/>
                        <SlideDrawer show={this.state.drawerOpen} toggle={this.drawerToggleClickHandler} navigate={this.navigationHandler}/>
                </Router>
        )
    }

    componentDidMount() {
        this.handleScrollButton()
    }
}
