import React from "react";
import './styles/CalendarPage.css';
import Calendar from "../Components/Calendar";

export default class CalendarPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="CalendarPageDiv">
                <Calendar/>
            </div>
        );
    }
}