import React, {Component, Fragment} from 'react';
import {Header, Footer} from "./Layout"
import Exercises from "./Exercises"
import {muscles, exercises} from "../store";


export default class extends Component {
    states = {
        exercises
    }

    getExercisesByCategory(){
        return this.state.exercises
    }

    render(){
        console.log(this)
        return <Fragment>
            <Header />

            <Exercises
            />

            <Footer
            muscles = {muscles}/>
        </Fragment>
    }
}


