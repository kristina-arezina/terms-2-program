import React, {Component, Fragment} from 'react';
import {Header, Footer} from "./Layout"
import Exercises from "./Exercises"
import {muscles, exercises} from "../store";


export default class extends Component {
    state = {
        exercises,
        exercise: {}
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

    handleExerciseSelected = id => {
        this.setState(({exercises}) => ({
            exercise: exercises. find(ex => ex.id ===id)
            }))
    }

    render(){
        const exercises = this.getExercisesByMuscles(),
        { catergory, exercise } = this.state

        return <Fragment>
            <Header />

            <Exercises
                exercise={exercise}
                category = {catergory}
                exercises = {exercises}
                onSelect={this.handleExerciseSelected}
            />

            <Footer
                category = {catergory}
            muscles = {muscles}
                onSelect={this.handleCategorySelected}/>

        </Fragment>
    }
}


