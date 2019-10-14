import React, {Component, Fragment} from 'react';
import {Header, Footer} from "./HeaderFooter"
import Exercises from "../Exercises"
import {exercises, muscles} from "../../store";
import {links} from "../../storeLink";

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
            exercise: exercises. find(ex => ex.id ===id) }))
        this.setState(({links}) => ({
            link: links.find(ex => ex.id ===id)
            })
        )
    }

    getLinksByTitles(){
        return Object.entries(
            this.state.links.reduce((links, link) => {
                const {titles} = link

                    links[titles] = links[titles]
                    ? [...links[titles], link]
                        : [link]
        return links
                },{})
        )
    }

    render(){
        const exercises = this.getExercisesByMuscles(),
            {catergory, exercise, link} = this.state
        const links = this.getLinksByTitles()

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
                    links={links}
                    link={link}
                />
            </nav>

        )}
}

export default Home;