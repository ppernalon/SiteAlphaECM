import React from 'react';
import PresentationMessage from '../Components/WelcomingMessage'
import Map from '../Components/Map'

export default class MarseillePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            presentationMessage:{
                title:'',
                message:''
            }
        }
    }

    render() {
        return(
            <div>
                <Map/>
                <PresentationMessage title={this.state.title} message={this.state.message} />
            </div>
        )
    }
}
