import React from 'react'
import './styles/SlideDrawer.css'

export default class SlideDrawer extends React.Component {
    render(){
        let drawerClasses = 'side-drawer';
        if(this.props.show) {
            drawerClasses = 'side-drawer open'
        }       return(

            <div className={drawerClasses}>
                <h1>Hello, I'm sliding!</h1>
                <a onClick={() => this.props.navigate('HomePage')}>Page d'accueil</a>
                <br/>
                <a onClick={() => this.props.navigate('MarseillePage')}>Presentation marseille</a>
            </div>)
    }

}
