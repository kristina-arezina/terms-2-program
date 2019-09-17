import React, {Component, Fragment} from 'react';
import {Header, Footer} from "./Layout"
import Exercises from "./Exercises"
import {muscles, exercises} from "../store";


export default class extends Component {
    state = {
        exercises
    }

    getExercisesByMuscles(){
        return Object.entries(
            this.state.exercises.reduce((exercises, exercise) => {
            const {muscles} = exercise

            exercises[muscles] = exercises[muscles]
            ? [...exercises[muscles], exercise]
                : [exercise]

            return exercises
        }, {})
        )
    }

    handleCategorySelected = catergory => {
        this.setState({
            catergory
        })
    }

    render(){
        const exercises = this.getExercisesByMuscles(),
        { catergory } = this.state

        return <Fragment>
            <Header />

            <Exercises
                category = {catergory}
                exercises = {exercises}
            />

            <Footer
                category = {catergory}
            muscles = {muscles}
                onSelect={this.handleCategorySelected}/>

        </Fragment>
    }
}


