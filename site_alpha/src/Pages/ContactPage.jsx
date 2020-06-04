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
                    <ContactInfo name={"Julie BRUANT"} poste={"Présidente UA"} phoneNumber={"06 47 30 67 69"} mailAdress={"jbruant@ec-m.fr"}/>
                    <ContactInfo name={"Aris DJALLALI"} poste={"Président BDE"} phoneNumber={"06 51 56 90 36"} mailAdress={"adjalalli@ec-m.fr"}/>
                    <ContactInfo name={"Marie SCHARFF"} poste={"Présidente BDA"} phoneNumber={"07 70 51 99 99"} mailAdress={"mscharff@ec-m.fr"}/>
                    <ContactInfo name={"Sophie BALANDREAU"} poste={"Présidente BDS"} phoneNumber={"06 98 48 08 37"} mailAdress={"sbalandreau@ec-m.fr"}/>
                </div>
            </div>
        )
    }
}
