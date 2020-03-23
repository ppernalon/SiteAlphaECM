import React from 'react';
import AlphaButton from './AlphaButton'
import PopUp from "./PopUp";

export default class Map extends React.Component{
    constructor(props){
        super(props)
        this.state={
            places:[{
                placeName:'',
                logoName:"",
                description:"",
                photosNames:["",""]
            },{
                placeName:'',
                logoName:"",
                description:"",
                photosNames:["",""]
            }
            ]
        }
    }

    render() {
        return(
            <div>
                <AlphaButton positionX={} positionY={} title="Mucem" size={}/>
                <AlphaButton positionX={} positionY={} title="VieuxPort" size={}/>
                <PopUp title="" logo="" message="" photos{[]}/>
            </div>
        )
    }
}
