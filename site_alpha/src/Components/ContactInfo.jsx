import React from "react";
import "./styles/ContactInfo.css";
import VerticalTrait from "../Assets/Buttons/trait_vertical.png";

export default class ContactInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={"ContactInfo"}>
                <h1 className={"h1ContactInfo"}>
                    {this.props.name + ", " + this.props.poste}
                </h1>
                <img className={"TraitVerticalContact"} src={VerticalTrait} alt={"Trait vertical"}/>
                <div className={"TelEtMailContact"}>
                    <p className={"TelEtMailContactP"}> Tél : <b className={"NumberOrMail"}> {this.props.phoneNumber}</b> </p>
                    <p className={"TelEtMailContactP"}> Email : <b className={"NumberOrMail"}> {this.props.mailAdress}</b> </p>
                </div>
            </div>
        )
    }
}