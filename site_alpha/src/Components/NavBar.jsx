import React from 'react';

export default class NavBar extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                <button onClick={this.props.toggle}>Open drawer</button>
            </div>
        )
    }
}
