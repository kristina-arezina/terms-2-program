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

    handleCategorySelect = catergory => {
        this.setState({
            catergory
        })
    }

    handleExerciseSelect = id => {
        this.setState(({exercises}) => ({
            exercise: exercises. find(ex => ex.id ===id)
            }))
    }

    handleExerciseCreate = exercise => {
        this.setState(({exercises}) => ({
            exercises:[
                ...exercises,
                exercise
            ]
        }))
    }

    handleExerciseDelete = id => {
        this.setState(({exercises}) => ({
            exercises: exercises.filter(ex => ex.id !== id)
        }))
    }

    render(){
        const exercises = this.getExercisesByMuscles(),
        { catergory, exercise } = this.state

        return <Fragment>
            <Header
            muscles={muscles}
            onExerciseCreate={this.handleExerciseCreate}
            />
            <Footer
                style={{marginTop:20}}
                category = {catergory}
                muscles = {muscles}
                onSelect={this.handleCategorySelect}/>
            <Exercises
                exercise={exercise}
                category = {catergory}
                exercises = {exercises}
                onSelect={this.handleExerciseSelect}
                onDelete={this.handleExerciseDelete}
            />

        </Fragment>
    }
}


