import React from 'react'
import './styles/SlideDrawer.css'
import Menu from "./Menu";

export default class SlideDrawer extends React.Component {
    render(){
        let drawerClasses = 'side-drawer';
        if(this.props.show) {
            drawerClasses = 'side-drawer open'
        }       return(

            <div className={drawerClasses}>
                <Menu navigate={this.props.navigate} toggle={this.props.toggle} vertical/>
            </div>)
    }

}
