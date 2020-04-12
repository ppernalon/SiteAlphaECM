import React from 'react';
import Frise from '../Assets/Menu/Menu__frise.png'
import Rond from '../Assets/Menu/Menu__rond.png'
import AB from '../Assets/Menu/Menu_button_bc.png'
import { NavLink } from 'react-router-dom'

export default class Menu extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let className = 'Menu';
        let classItem ='MenuItem';
        let vertical = '';
        let toggle = () => {};
        if(this.props.vertical){
            className = 'MenuV';
            classItem ='MenuItemV';
            vertical = 'V';
            toggle = this.props.toggle
        }
        return(
            <div className={className}>
                    <div className={"MenuItemStart" + vertical + " " + classItem}>
                        <NavLink to="/">
                            <a onClick={() => toggle()}>
                            Accueil
                            </a>
                        </NavLink>
                    </div>
                    <div className={classItem}>
                        <NavLink to="/marseille">
                        <a className="Impair" onClick={() => toggle()}>
                        Marseille
                        </a>
                        </NavLink>
                    </div>
                    <div className={classItem}>
                        <NavLink to="/reseaux">
                            <a onClick={() => toggle()}>
                                Réseaux
                            </a>
                        </NavLink>
                    </div>
                    <div className={classItem}>
                        <NavLink to="/associations">
                            <a className="Impair" onClick={() => toggle()}>
                                Associations
                            </a>
                        </NavLink>
                    </div>
                    <div className={classItem}>
                        <NavLink to="/calendrier">
                            <a onClick={() => toggle()}>
                                Calendrier
                            </a>
                        </NavLink>
                    </div>
                    <div className={"MenuItemEnd" + vertical + " " + classItem}>
                        <NavLink to="/contact">
                            <a className="Impair" onClick={() => toggle()}>
                                Contact
                            </a>
                        </NavLink>
                    </div>
            </div>
        )
    }
}
