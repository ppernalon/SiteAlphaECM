import React from 'react'
import './styles/Backdrop.css'

export default class Backdrop extends React.Component {
    render(){
        return(
            <div className="backdrop" onClick={this.props.close} />
        )
    }
}
