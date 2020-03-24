import React from 'react';
import './styles/Navigator.css'

export default class AlphaButton extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentPage:'HomePage'
        }
    }

    handleNavigation = (newPage) => {
        this.setState({
            currentPage:newPage
        })
    };

    render() {
        return(
            <div className="container">
                <div className="navBar">
                    <Menu navigation={this.handleNavigation} currentPage={this.state.currentPage}/>

                </div>
                <div className="screen">

                </div>
                <div className="drawer">

                </div>
            </div>
        )
    }
}
