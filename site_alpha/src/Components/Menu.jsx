import React from 'react';
import Frise from '../Assets/Menu/Menu__frise.png'
import Rond from '../Assets/Menu/Menu__rond.png'
import AB from '../Assets/Menu/Menu_button_bc.png'
import { NavLink, withRouter } from 'react-router-dom'
import NavItem from "./NavItem";

class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visited : [1,0,0,0,0,0]
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



    handleMenu = (number) => {
        let tableau = [];
        for(let i = 0; i < this.pages.length; i++){
            if (i <= number){
                tableau[i]=1;
            }
            else{
                tableau[i]=0;
            }
        }
        this.setState({visited : tableau})
        console.log(this.state.visited)
    };

    render(){
        let className = 'Menu';
        if(this.props.vertical){
            className = 'MenuV';
        }
        return(
            <div className={className}>
                <NavItem toggle={this.props.toggle} title={'Accueil'} onClick={this.handleMenu} to={'/'} number={0} vertical={this.props.vertical} visited={this.state.visited[0]} start/>
                <NavItem toggle={this.props.toggle} title={'Marseille'} onClick={this.handleMenu} to={'/marseille'} number={1} vertical={this.props.vertical} visited={this.state.visited[1]} impair/>
                <NavItem toggle={this.props.toggle} title={'Associations'} onClick={this.handleMenu} to={'/associations'} number={2} vertical={this.props.vertical} visited={this.state.visited[2]}/>
                <NavItem toggle={this.props.toggle} title={'Réseaux'} onClick={this.handleMenu} to={'/reseaux'} number={3} vertical={this.props.vertical} visited={this.state.visited[3]} impair/>
                <NavItem toggle={this.props.toggle} title={'Calendrier'} onClick={this.handleMenu} to={'/calendrier'} number={4} vertical={this.props.vertical} visited={this.state.visited[4]}/>
                <NavItem toggle={this.props.toggle} title={'Contact'} onClick={this.handleMenu} to={'/contact'} number={5} vertical={this.props.vertical} visited={this.state.visited[5]} impair end/>
            </div>
        )
    }

    componentDidMount() {
        this.handleMenu(this.pages.indexOf(this.props.location.pathname));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.location.pathname !== this.props.location.pathname){
            this.handleMenu(this.pages.indexOf(this.props.location.pathname))
        }
    }
}

export default withRouter(Menu);
