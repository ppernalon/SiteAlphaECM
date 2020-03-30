import React from 'react';
import Frise from '../Assets/Menu/Menu__frise.png'
import Rond from '../Assets/Menu/Menu__rond.png'
import AB from '../Assets/Menu/Menu_button_bc.png'
import MarseillePage from "../Pages/MarseillePage";


export default class Menu extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="Menu" style={{height:85, flexDirection:'row', justifyContent:'center'}}>
                <a href={'#'}>
                    <div className="MenuItemStart MenuItem">
                        Accueil
                    </div>
                </a>
                <a onClick={() => this.props.navigate('MarseillePage')}>
                    <div className="MenuItem">
                        Marseille et ses alentours
                    </div>
                </a>
                <a href={'#'}>
                    <div className="MenuItemEnd MenuItem">
                        Accueil
                    </div>
                </a>
            </div>
        )
    }
}

const style = {
    frise:{
        height : 80
    }
}
