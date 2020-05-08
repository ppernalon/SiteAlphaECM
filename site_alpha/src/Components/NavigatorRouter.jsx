import React, {Suspense, lazy} from 'react';
import './styles/Navigator.css'
import SlideDrawer from "./SlideDrawer";
import Backdrop from "./BackDrop";
import NavBar from './NavBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import SplashPage from "../Pages/SplashPage";
import ScrollButton from "./ScrollButton";


const HomePage = lazy(() => import('../Pages/HomePage'));
const MarseillePage = lazy(() => import('../Pages/MarseillePage'));
const AssociationsPage = lazy(() => import('../Pages/AssociationsPage'));
const ReseauxPage = lazy(() => import('../Pages/ReseauxPage'));
const ContactPage = lazy(() => import('../Pages/ContactPage'));
const CalendarPage = lazy(() => import('../Pages/CalendarPage'));

class NavigatorRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
            pageNumber: 0,
            url: '/',
            transitions: ['animated fadeInRight', 'animated fadeInRight', 'animated fadeInRight', 'animated fadeInRight', 'animated fadeInRight',
                'animated fadeInRight'],
            previous : '/contact',
            next : '/marseille'
        }
    }

    pages = [
        '/',
        '/marseille',
        '/reseaux',
        '/associations',
        '/calendrier',
        '/contact'
    ]

    transitions = {
        0 : "animated fadeInRight",
        1 : "animated fadeInLeft"
    }

    handlePageNumber = () => {
        let urlcourante = document.location.href;
        let queue_url = urlcourante.substring(urlcourante.lastIndexOf("/"));
        this.setState({pageNumber: this.pages.indexOf(queue_url)});
    };

    handleTransitions = (url) => {
        let tableau = [];
        for(let i = 0; i < this.pages.length; i++){
            if (i <= this.pages.indexOf(url)){
                tableau[i]=this.transitions[1];
            }
            else{
                tableau[i]=this.transitions[0];
            }
        }
        this.setState({transitions:tableau})
    }


    render() {
        return (
            <div className="container">
                    <NavBar/>
                    <div className="pageViewContainer">
                        <ScrollButton to={this.state.previous} title={"Contacts"}/>
                        <Suspense fallback={<SplashPage/>}>
                            <Switch>
                                <Route exact path="/" component={() => <HomePage transition={this.state.transitions[0]}/>}/>
                                <Route path="/marseille" component={() => <MarseillePage transition={this.state.transitions[1]}/>}/>
                                <Route path="/reseaux" component={() => <ReseauxPage transition={this.state.transitions[2]}/>}/>
                                <Route path="/associations" component={() => <AssociationsPage transition={this.state.transitions[3]}/>}/>
                                <Route path="/calendrier" component={() => <CalendarPage transition={this.state.transitions[4]}/>}/>
                                <Route path="/contact" component={() => <ContactPage transition={this.state.transitions[5]}/>}/>
                            </Switch>
                        </Suspense>
                        <ScrollButton to={this.state.next} title={"Contacts"}/>
                    </div>
            </div>
        )
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.handleTransitions(prevProps.location.pathname);
            this.setState({next:this.pages[this.pages.indexOf(this.props.location.pathname)+1], previous:this.pages[this.pages.indexOf(this.props.location.pathname)-1]})
        }
    }

}

export default withRouter(NavigatorRouter);
