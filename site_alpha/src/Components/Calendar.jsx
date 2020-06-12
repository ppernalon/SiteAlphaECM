import React from 'react';
import './styles/Calendar.css';
import Sept_btn from '../Assets/Calendar_buttons/Sept.png';
import Oct_btn from '../Assets/Calendar_buttons/Oct.png';
import Nov_btn from '../Assets/Calendar_buttons/Nov.png';
import Dec_btn from '../Assets/Calendar_buttons/Dec.png';
import Jan_btn from '../Assets/Calendar_buttons/Jan.png';
import Fev_btn from '../Assets/Calendar_buttons/Fev.png';
import Mars_btn from '../Assets/Calendar_buttons/Mars.png';
import Avr_btn from '../Assets/Calendar_buttons/Avr.png';
import Mai_btn from '../Assets/Calendar_buttons/Mai.png';
import Juin_btn from '../Assets/Calendar_buttons/Juin.png';
import trait_verti from '../Assets/Buttons/trait_vertical.png';

export default class Calendar extends React.Component{
    constructor(props) {
        super(props);

        this.months = {
            Sept : ["Septembre", ["Intégration", "WEI", "Croisière", "Week-end sport", "Rallye", "Raid", "Voyage"], Sept_btn],
            Oct: ["Octobre", ["Intercentrales", "Course Contre le Cancer", "Pouce d'Or", "Massiliades"], Oct_btn],
            Nov: ["Novembre", ["AssoM", "Régate Intercentrales", "Movember", "FOCEEN"], Nov_btn],
            Déc: ["Décembre", ["Téléthon", "Campagnes"], Dec_btn],
            Jan: ["Janvier", ["Gala", "Cabaret", "Week-end ski", "Partiels"], Jan_btn],
            Fév: ["Février", ["Good Bye S8", "Makers Original Challenge", "Semaine Ski", "Opération Cupidon"], Fev_btn],
            Mars: ["Mars", ["Good Bye 3A", "Challenge Centrale Lyon", "AssoM"], Mars_btn],
            Avr: ["Avril", ["Course Croisière Edhec", "Chasse aux oeufs"], Avr_btn],
            Mai: ["Mai", ["Good Bye DD", "TOSS", "Massilia Sun Ball", "Traversée du Vieux-Port"], Mai_btn],
            Juin: ["Juin", ["Croisière", "Partiels", "Stage"], Juin_btn],
        };

        this.state = {
            currentMonth : ["Sept", this.months["Sept"]],
        };
    }

    modifyMonth (newMonth) {
        this.setState({currentMonth : [newMonth, this.months[newMonth]]});
    }

    render() {
        let listMonthEvnts = [];

        for (let evnt in this.state.currentMonth[1][1])
        {
            listMonthEvnts.push(<div className={"liEVNT"}>{this.state.currentMonth[1][1][evnt]}</div>);
        }

        return (
            <div id="CalendarDiv">
                <div id="monthsFrieze">
                    <img src={Sept_btn} alt={"Septembre"} className="monthsBTN" id="Sept" onClick={() => this.modifyMonth("Sept")}/>
                    <img src={Oct_btn} alt={"Octobre"} className="monthsBTN" id="Oct" onClick={() => this.modifyMonth("Oct")}/>
                    <img src={Nov_btn} alt={"Novembre"} className="monthsBTN" id="Nov" onClick={() => this.modifyMonth("Nov")}/>
                    <img src={Dec_btn} alt={"Décembre"} className="monthsBTN" id="Déc" onClick={() => this.modifyMonth("Déc")}/>
                    <img src={Jan_btn} alt={"Janvier"} className="monthsBTN" id="Jan" onClick={() => this.modifyMonth("Jan")}/>
                    <img src={Fev_btn} alt={"Février"} className="monthsBTN" id="Fév" onClick={() => this.modifyMonth("Fév")}/>
                    <img src={Mars_btn} alt={"Mars"} className="monthsBTN" id="Mars" onClick={() => this.modifyMonth("Mars")}/>
                    <img src={Avr_btn} alt={"Avril"} className="monthsBTN" id="Avr" onClick={() => this.modifyMonth("Avr")}/>
                    <img src={Mai_btn} alt={"Mai"} className="monthsBTN" id="Mai" onClick={() => this.modifyMonth("Mai")}/>
                    <img src={Juin_btn} alt={"Juin"} className="monthsBTN" id="Juin" onClick={() => this.modifyMonth("Juin")}/>
                </div>
                <div id="monthEvnts">
                    <img src={this.state.currentMonth[1][2]} alt={this.state.currentMonth[0]} id="currentMonthIMG"/>
                    <div id={"listMonthEvntsDiv"}>
                        <h1 id={"monthTitle"}> {this.state.currentMonth[1][0]} </h1>
                        <div id={"listMonthEvnts"}>
                            {listMonthEvnts}
                        </div>
                    </div>
                    <img src={trait_verti} alt={""} id="traitVertical"/>
                </div>

            </div>
        );
    }
}