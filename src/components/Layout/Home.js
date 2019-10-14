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
        link: {
            linkLists: { } ,
            videoLists: { },

        },
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
            link: links.find(ex => ex.id === id)
            })
        )
    }

    getLinkListsByTitle(){
        return Object.entries(
            this.state.linkLists.reduce((linkLists,linkList )=>{
                const {id} = linkList

                linkLists[id] = linkLists[id]
                    ? [...linkLists[id], linkList]
                    : [linkList]

                return linkLists
            }, {}))
    }

    render(){
        const exercises = this.getExercisesByMuscles()
            const linkLists = this.getLinkListsByTitle(),
            {catergory, exercise, link} = this.state

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
                    link={link}
                    linkLists={linkLists}
                />
            </nav>

        )}
}

export default Home;