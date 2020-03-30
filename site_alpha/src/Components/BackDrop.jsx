import React from 'react'
import './styles/Backdrop.css'

export default class Backdrop extends React.Component {
    render(){
        if(this.props.show){
            return(
                <div className="backdrop" onClick={this.props.close} />
            )
        }
        return(<div>

        </div>)

    }
}
