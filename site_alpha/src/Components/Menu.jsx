import React from 'react';
import Frise from '../Assets/Menu/Menu__frise.png'
import Rond from '../Assets/Menu/Menu__rond.png'
import AB from '../Assets/Menu/Menu_button_bc.png'

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
                        <a href={'#'} onClick={() => {toggle(); this.props.navigate('HomePage')}}>
                        Accueil
                        </a>
                    </div>
                    <div className={classItem}>
                        <a className="Impair" href={'#'} onClick={() =>{toggle(); this.props.navigate('MarseillePage')}}>
                        Marseille
                        </a>
                    </div>
                    <div className={classItem}>
                        <a href={'#'} onClick={() =>{toggle(); this.props.navigate('MarseillePage')}}>
                        Réseaux
                        </a>
                    </div>
                    <div className={classItem}>
                        <a className="Impair" href={'#'} onClick={() =>{toggle(); this.props.navigate('MarseillePage')}}>
                        Associations
                        </a>
                    </div>
                    <div className={classItem}>
                        <a className="Pair" href={'#'} onClick={() =>{toggle(); this.props.navigate('MarseillePage')}}>
                        Calendrier
                        </a>
                    </div>
                    <div className={"MenuItemEnd" + vertical + " " + classItem}>
                        <a className="Impair" href={'#'}>
                        Contact
                        </a>
                    </div>
            </div>
        )
    }
}
