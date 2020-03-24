import React from 'react';
import './styles/PopUp.css'
import Croix from '../Assets/Buttons/Buttons__croix.png';


export default class PopUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visible : false,
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        if (this.state.visible) {
            return (
                <div className='container'>
                    <input type="button" value={this.props.title} onClick={() => this.openModal()}/>
                    <div className="PopUp">
                        <div class={this.props.pole}>
                            <h1> {this.props.title}</h1>
                            <p> </p>
                            <a href="javascript:void(0);" onClick={() => this.closeModal()}><img className="croix" src={Croix}/></a>
                        </div>
                        <div className="tableau">
                            <div className="line-container">
                                <h2> {this.props.name}</h2>
                                <img className="logo" src={this.props.logo}/>
                            </div>
                            <div className="line-container">
                                <p className="Message"> {this.props.message}</p>
                                <img className="logo" src={this.props.logo}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (<div> <input type="button" value={this.props.title}  onClick={() => this.openModal()}/> </div>)
        }
    }
}
