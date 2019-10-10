import React, {Component} from 'react';
import PageJourney from "./PageJourney";
import JourneyList from "./JourneyList";
import {level, journeys} from "../../journeyStore";
import {Header} from "../Layout/HeaderFooter.js"

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
        const{muscles,onExerciseCreate}=this.props;

        return (
            <div>
                <Header/>
                <PageJourney/>
                <JourneyList
                    muscles={muscles}
                    level={level}
                    journeys={journeys}
                />
            </div>
        )
    }
}

export default Journey;