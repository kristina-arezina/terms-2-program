import React, {Component, Fragment} from 'react';
import {Header, Footer} from "./Layout"
import Exercises from "./Exercises"
import {muscles, exercises} from "../store";


export default class extends Component {
    render(){
        return <Fragment>
            <Header />

            <Exercises/>

            <Footer />
        </Fragment>
    }
}


