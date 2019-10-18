import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Journey from "./Journey/Journey.js"
import CssBaseline from '@material-ui/core/CssBaseline';
import About from "./About/About.js";
import Home from "./Layout/Home.js";

export default class extends Component {

    render() {

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