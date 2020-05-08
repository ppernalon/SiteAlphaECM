import React from 'react';
import './styles/ContactPage.css';


export default class ContactPage extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div id="ContainerContactPage" className={this.props.transition}>
                <div id={"SocialNetworks"}>
                    <h1>Liens</h1>
                    <a href="https://www.google.fr" className="SocialNetworkButton"> <img src={require("../Assets/fb.png")}/> Facebook Admissibles</a>
                    <a href="https://www.google.fr" className="SocialNetworkButton"> <img src={require("../Assets/fb.png")}/>Instagram Admissibles</a>
                    <a href="https://www.google.fr" className="SocialNetworkButton"> <img src={require("../Assets/fb.png")}/>Centrale Marseille Le site officiel</a>
                </div>
                <div id={"Contacts"}>
                    <h1>Contacts</h1>
                    <div className={"ContactInfo"}>
                        <header>
                            Thomas Sibille
                        </header>
                        <nav><p>|</p><p>|</p></nav>
                        <main>
                            <p><span>Tel :</span> 06 10 22 68 37</p>
                            <p><span>Email :</span> thomas.sibille@centrale-marseille.fr</p>
                        </main>
                    </div>
                    <div className={"ContactInfo"}>
                        <header>
                            Thomas Sibille
                        </header>
                        <nav><p>|</p><p>|</p></nav>
                        <main>
                            <p><span>Tel :</span> 06 10 22 68 37</p>
                            <p><span>Email :</span> thomas.sibille@centrale-marseille.fr</p>
                        </main>
                    </div>
                    <div className={"ContactInfo"}>
                        <header>
                            Thomas Sibille
                        </header>
                        <nav><p>|</p><p>|</p></nav>
                        <main>
                            <p><span>Tel :</span> 06 10 22 68 37</p>
                            <p><span>Email :</span> thomas.sibille@centrale-marseille.fr</p>
                        </main>
                    </div>
                    <div className={"ContactInfo"}>
                        <header>
                            Thomas Sibille
                        </header>
                        <nav><p>|</p><p>|</p></nav>
                        <main>
                            <p><span>Tel :</span> 06 10 22 68 37</p>
                            <p><span>Email :</span> thomas.sibille@centrale-marseille.fr</p>
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}
