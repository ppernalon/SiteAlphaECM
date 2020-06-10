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
import BottomButtons from "./BottomButtons";
import Background from "../Assets/Background_global.jpg";
import BackgroundFlou from "../Assets/Background_global_flou.jpg";



const HomePage = lazy(() => import('../Pages/HomePage'));
const MarseillePage = lazy(() => import('../Pages/MarseillePage'));
const AssociationsPage = lazy(() => import('../Pages/AssociationsPage'));
const ReseauxPage = lazy(() => import('../Pages/ReseauxPage'));
const ContactPage = lazy(() => import('../Pages/ContactPage'));
const CalendarPage = lazy(() => import('../Pages/CalendarPage'));

class NavigatorRouterV2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
            pageNumber: 0,
            transitions: ['animated fadeInRight', 'animated fadeInRight', 'animated fadeInRight', 'animated fadeInRight', 'animated fadeInRight',
                'animated fadeInRight'],
            previous : {
                path :"/",
                title: ''
            },
            next : {
                path :'/marseille',
                title: 'Marseille'
            },
            backGround:Background
        }
    }

    pages = [
        '/',
        '/marseille',
        '/associations',
        '/reseaux',
        '/calendrier',
        '/contact'
    ]

    pagesTitle = [
        'Accueil',
        'Marseille',
        'Associations',
        'Réseaux',
        'Calendrier',
        'Contact'
    ]

    transitions = {
        0 : "animated fadeInRight",
        1 : "animated fadeInLeft"
    }


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
            <div className="container" style={{backgroundImage: "url(" + this.state.backGround + ")"}}>
                <NavBar/>
                <div className="pageViewContainer">
                        <div id="ColumnRight">
                        <ScrollButton to={this.state.previous.path} title={this.state.previous.title} up/>
                        </div>
                        <Suspense fallback={<SplashPage/>}>
                            <Switch>
                                <Route exact path="/" component={() => <HomePage transition={this.state.transitions[0]}/>}/>
                                <Route path="/marseille" component={() => <MarseillePage transition={this.state.transitions[1]}/>}/>
                                <Route path="/associations" component={() => <AssociationsPage transition={this.state.transitions[2]}/>}/>
                                <Route path="/reseaux" component={() => <ReseauxPage transition={this.state.transitions[3]}/>}/>
                                <Route path="/calendrier" component={() => <CalendarPage transition={this.state.transitions[4]}/>}/>
                                <Route path="/contact" component={() => <ContactPage transition={this.state.transitions[5]}/>}/>
                                <Route component={HomePage}/>
                            </Switch>
                        </Suspense>
                        <div id="ColumnLeft">
                        <ScrollButton to={this.state.next.path} title={this.state.next.title}/>
                        </div>
                    </div>
                <BottomButtons nextPath={this.state.next.path} previousPath={this.state.previous.path} nextTitle={this.state.next.title} previousTitle={this.state.previous.title}/>
            </div>
        )
    }

    componentDidMount() {
        let index = this.pages.indexOf(this.props.location.pathname);
        if(index === 0){
            this.setState({
                next:{path: this.pages[1], title : this.pagesTitle[1]
                },
                previous:{path:"/", title:''}
            })
        }
        if(index === 5){
            this.setState({
                next:{path:this.pages[0], title:''},
                previous:{path:this.pages[4], title:this.pagesTitle[4]}
            })
        }
        if(index <5 && index>0){
            this.setState({next:{path : this.pages[index+1], title : this.pagesTitle[index+1]}, previous:{path : this.pages[index-1], title : this.pagesTitle[index-1]}})
        }
    }


    componentDidUpdate(prevProps, prevState, prevSnap) {
        if (this.props.location !== prevProps.location) {
            this.handleTransitions(prevProps.location.pathname);
            console.log(prevProps.location.pathname);
            let index = this.pages.indexOf(this.props.location.pathname);
            if(index === 0){
                this.setState({
                    next:{path: this.pages[1], title : this.pagesTitle[1]
                    },
                    previous:{path:"/", title:''},
                    backGround: Background
                })
            }
            if(index === 5){
                this.setState({
                    next:{path:this.pages[0], title:''},
                    previous:{path:this.pages[4], title:this.pagesTitle[4]},
                    backGround: BackgroundFlou
                })
            }
            if(index <5 && index>0){
                this.setState({next:{path : this.pages[index+1], title : this.pagesTitle[index+1]}, previous:{path : this.pages[index-1], title : this.pagesTitle[index-1]}, backGround: BackgroundFlou})
            }
        }
    }


}

export default withRouter(NavigatorRouterV2);
