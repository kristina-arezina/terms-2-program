import React, {Component, Fragment} from 'react';
import {Header, Footer} from "./HeaderFooter"
import Exercises from "../Exercises"
import {exercises, muscles} from "../../store";
import {titles, links} from "../../storeLink";


export class Home extends Component {
    state = {
        exercises,
        exercise: {},
        links,
        link: {},
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

    render(){
        const exercises = this.getExercisesByMuscles(),
            {catergory, exercise} = this.state
        return(
            <nav>
                <Header/>
                <Footer
                    style={{marginTop: 20}}
                    category={catergory}
                    muscles={muscles}
                    onSelect={this.handleCategorySelect}
                />
                <Exercises
                    exercise={exercise}
                    category={catergory}
                    exercises={exercises}
                    onSelect={this.handleExerciseSelect}
                    titles={titles}
                />
            </nav>

        )
    }

}


export default Home;