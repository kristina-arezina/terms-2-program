import React, {Component} from 'react';
import Header from "./Header.js";
import CreateDialog from "../Exercises/Dialogs/Create";
import PageJourney from "./PageJourney";
import JourneyList from "./JourneyList";

export class Journey extends Component {

    render(){
        const{muscles,onExerciseCreate}=this.props;

    return (
        <div>
    <Header/>
            <CreateDialog
            muscles={muscles}
            onCreate={onExerciseCreate}
        />
        <PageJourney/>
            <JourneyList/>
        </div>
    )}}

export default Journey;