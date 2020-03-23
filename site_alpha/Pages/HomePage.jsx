import React from 'react';
import WelcomingMessage from '../Components/WelcomingMessage'

export default class AlphaButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            welcomingMessage:{
                message:'',
                authors:''
            }
        }
    }

    render() {
        return(
            <div>
                <WelcomingMessage message={this.state.message} authors={this.state.authors}/>
            </div>
        )
    }
}
