import React, {Component} from 'react';
import PageJourney from "./PageJourney";
import JourneyList from "./JourneyList";
import {muscles} from "../../store";
import {level, link, journeys} from "../../journeyStore";

export class Journey extends Component {
state={
    journeys
}
    getJourneyByLevel(){
        return Object.entries(
            this.state.journeys.reduce((journeys,journey )=>{
                const {level} = journey

                journeys[level] = journeys[level]
                    ? [...journeys[level], journey]
                    : [journey]

                return journeys
            }, {}))
    }

    render(){
        const journeys = this.getJourneyByLevel()
        const{newPage}=this.props;
        const{muscles,onExerciseCreate}=this.props;

    return (
        <div>
        <PageJourney/>
            <JourneyList
                muscles={muscles}
                level={level}
                journeys={journeys}
                link={link}
            />
        </div>
    )}}

export default Journey;