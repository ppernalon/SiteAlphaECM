import React from 'react';
import PopUp from './PopUp';
import PopUpPortail from './PopUpPortail';
import './styles/AlphaButtons.css';
import {NavLink, withRouter} from "react-router-dom";

class NavItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let classItem = 'MenuItem';
        let classParite;
        let vertical = '';
        let position = '';
        if(this.props.vertical){
            vertical = 'V ';
            classItem = classItem + vertical
        }
        if (this.props.end) {
            classItem = classItem +' MenuItemEnd' + vertical;
            position = 'End'
        }
        if (this.props.start) {
            classItem = classItem + ' MenuItemStart' + vertical;
            position = 'Start'
        }
        if(this.props.visited){
            classItem = classItem + ' visited' + vertical + position;
        }
        if(this.props.impair){
            classParite = 'Impair';
        }

        if (this.props.vertical){
           return (
               <div className={classItem}>
                   <NavLink to={this.props.to}>
                       <a className={classParite} onClick={() => {this.props.toggle(); this.props.onClick(this.props.number)}}>
                           {this.props.title}
                       </a>
                   </NavLink>
               </div>
           )
        }
        else{
            return (
                <div className={classItem} onClick={()=>{this.props.onClick(this.props.number);}}>
                    <NavLink to={this.props.to}>
                        <a className={classParite}>
                            {this.props.title}
                        </a>
                    </NavLink>
                </div>
            )

        }
    }
}

export default withRouter(NavItem);
