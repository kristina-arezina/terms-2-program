import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {muscles, exercises} from "../store";
import Journey from "./Journey/Journey.js"
import CssBaseline from '@material-ui/core/CssBaseline';
import About from "./About/About.js";
import Home from "./Layout/Home.js";


export default class extends Component {
    state = {
        exercises,
        exercise: {},
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



    render() {
        const exercises = this.getExercisesByMuscles(),
            {catergory, exercise} = this.state

        return (
                <Router>

                    <Fragment>
                        <CssBaseline />
                        <Route exact path="/" render={props => (
                            <React.Fragment >
                                <Home />
                            </React.Fragment>
                        )}/>
                        <Route path="/about" render={props => (
                            <React.Fragment>
                                <About />
                            </React.Fragment>
                        )}/>
                        <Route path="/journey" render={props => (
                            <React.Fragment>
                                <Journey />
                            </React.Fragment>
                        )}/>
                    </Fragment>
                </Router>

        );

    }
}