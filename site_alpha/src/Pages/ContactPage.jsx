import React from 'react';
import './styles/ContactPage.css';
import ContactInfo from "../Components/ContactInfo";
import SocialNetworksLink from "../Components/SocialNetworksLink";

export default class ContactPage extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div id="ContainerContactPage" className={this.props.transition}>
                <div id={"SocialNetworks"}>
                    <h1 id={"TitreLinks"}>Aller plus loin !</h1>
                    <div id={"SocialNetworksLinks-container"}>
                        <SocialNetworksLink Number={1} SocialNetwork={"Facebook"}/>
                        <SocialNetworksLink Number={2} SocialNetwork={"Instagram"}/>
                        <SocialNetworksLink SocialNetwork={"Discord"}/>
                        <SocialNetworksLink SocialNetwork={"Twitter"}/>
                        <SocialNetworksLink SocialNetwork={"CentraleMarseille"}/>
                    </div>
                </div>
                <div id={"Contacts"}>
                    <h1 id={"TitreContacts"}>Contacts</h1>
                    <ContactInfo name={"Julie BRUANT"} poste={"Présidente UA"} phoneNumber={"06 10 22 68 37"} mailAdress={"thomas.sibille@centrale-marseille.fr"}/>
                    <ContactInfo name={"Aris DJALLALI"} poste={"Président BDE"} phoneNumber={"06 10 22 68 37"} mailAdress={"thomas.sibille@centrale-marseille.fr"}/>
                    <ContactInfo name={"Thomas SIBILLE"} poste={"Co-responsable Intégration"} phoneNumber={"06 10 22 68 37"} mailAdress={"thomas.sibille@centrale-marseille.fr"}/>
                    <ContactInfo name={"Théo CHANTRAINE"} poste={"Co-responsable Intégration"} phoneNumber={"06 10 22 68 37"} mailAdress={"thomas.sibille@centrale-marseille.fr"}/>
                </div>
            </div>
        )
    }
}
