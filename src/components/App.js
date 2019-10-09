import React, {Component, Fragment} from 'react';
import {Header, Footer} from "./Layout/HeaderFooter"
import Exercises from "./Exercises"
import {muscles, exercises} from "../store";
import Journey from "./Journey/Journey.js"
import CssBaseline from '@material-ui/core/CssBaseline';
import About from "./About/About.js";


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
                        <Route path="/findProjects" render={props => (
                            <React.Fragment>
                                <FindProjects />
                            </React.Fragment>
                        )}/>
                    </Fragment>
                </Router>

        );
                return ( <Fragment >
                        <CssBaseline/>
                        <Header
                            home={this.home}
                            journey={this.journey}
                            about={this.about}
                        />
                        <Footer
                            style={{marginTop: 20}}
                            category={catergory}
                            muscles={muscles}
                            onSelect={this.handleCategorySelect}/>
                        <Exercises
                            exercise={exercise}
                            category={catergory}
                            exercises={exercises}
                            onSelect={this.handleExerciseSelect}
                        />
                    </Fragment>
                )

// Jorney
            case 2:
                return (
                    <Fragment>
                        <CssBaseline/>
                        <Header
                            home={this.home}
                            journey={this.journey}
                            about={this.about}
                        />
                        <Journey
                        />
                    </Fragment>

                )
            //About Page
            case 3:
                return (
                    <Fragment>
                        <CssBaseline/>
                    <About/>
                    <Header
                        home={this.home}
                        journey={this.journey}
                        about={this.about}
                    />
                    </Fragment>

                )
        }
    }
}