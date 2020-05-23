import React from "react";
import Fb_icon from "../Assets/Icons/Facebook.png";
import Twitter_icon from "../Assets/Icons/Twitter.png";
import Discord_icon from "../Assets/Icons/discord.png";
import Instagram_icon from "../Assets/Icons/Instagram.png";
import CentraleMarseille_icon from "../Assets/Icons/ECM_medaillon.png";
import LinksSocialNetworks from "../content/LinksSocialNetworks";
import AlphaIMG from "../Assets/SocialNetworks/Fb_Alpha.png";
import EcoleIMG from "../Assets/SocialNetworks/Fb_ECM.png";
import LeftArrow from "../Assets/Buttons/Buttons__scroll_sp_left_black.png"
import "./styles/SocialNetworkLink.css";

export default class SocialNetworksLink extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            clicked:false,
        }
        this.AlphaAndEcole = (this.props.SocialNetwork === "Facebook" || this.props.SocialNetwork === "Instagram")
        this.Icons = {
            Facebook: Fb_icon,
            Instagram: Instagram_icon,
            Discord: Discord_icon,
            Twitter: Twitter_icon,
            CentraleMarseille: CentraleMarseille_icon
        }
    }

    openAlphaEcoleChoice = () => {
        if (!this.state.clicked){
            let LinksDiv = document.getElementById("LinksContainer_"+this.props.Number);
            LinksDiv.style.display = "flex";
            this.setState({
                clicked:true,
            })
        }
        else{
            this.closeAlphaEcoleChoice();
        }
    }

    closeAlphaEcoleChoice = () => {
        let LinksDiv = document.getElementById("LinksContainer_"+this.props.Number);
        LinksDiv.style.display = "none";
        this.setState({
            clicked:false,
        })
    }

    render() {
        if (this.AlphaAndEcole){
            return(
                <div className={"SocialNetworksLink-container1"}>
                    <img className="SocialNetworkIcon" src={this.Icons[this.props.SocialNetwork]} onClick={this.openAlphaEcoleChoice}/>
                    <div id={"LinksContainer_"+this.props.Number} className={"LinksContainer"}>
                        <a href={LinksSocialNetworks[this.props.SocialNetwork]["Alpha"]} target="_blank" className="SocialNetworkButton LinksContainerItems"> <img className="SocialNetworkIcon" src={AlphaIMG}/></a>
                        <a href={LinksSocialNetworks[this.props.SocialNetwork]["Ecole"]} target="_blank" className="SocialNetworkButton LinksContainerItems"> <img className="SocialNetworkIcon" src={EcoleIMG}/></a>
                        <img className="closeArrowSocialNetworks LinksContainerItems" src={LeftArrow} onClick={this.closeAlphaEcoleChoice}/>
                    </div>
                </div>
            )

        }
        else{
            return(
                <div className={"SocialNetworksLink-container2"}>
                    <a href={LinksSocialNetworks[this.props.SocialNetwork]} target="_blank" className="SocialNetworkButton"> <img className="SocialNetworkIcon" src={this.Icons[this.props.SocialNetwork]}/></a>
                </div>
            )
        }
    }
}