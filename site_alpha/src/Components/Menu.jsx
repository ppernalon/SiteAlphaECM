import React from 'react';
import Frise from '../Assets/Menu/Menu__frise.png'
import Rond from '../Assets/Menu/Menu__rond.png'

export default class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            scale :1
        }
    }

    render() {
        return(
            <div className="Menu">
                <img src={Frise} height={style.frise.height * this.state.scale}/>
                <img src={Rond} style={{
                    height : 10* this.state.scale,
                    position: 'relative',
                    top:-44,
                    left:-361
                }}/>
                <img src={Rond} style={{
                    height : 13* this.state.scale,
                    position: 'relative',
                    top:-43,
                    left:-308
                }}/>
            </div>
        )
    }
}

const style = {
    frise:{
        height : 80
    }
}
