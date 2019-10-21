import React from 'react';
import AboutHeader from "./AboutHeader.js";
import MediaQuery from 'react-responsive';
import {Header} from "../Layout/HeaderFooter.js"
import {Grid, Paper } from "@material-ui/core";

//All the content on the About page
function About(){
    return(
        <div>
            <Header/>
            <AboutHeader/>
                <MediaQuery query="(max-width: 841px)">
                {matches =>
                    matches ? (
                        <div className="parent">
                            <Grid container spacing={1}  >
                                <Grid item xs={12}>
                                    <Paper
                                        style={{
                                            padding: 30,
                                            textAlign: 'left',
                                            backgroundColor:"white",
                                            color:"#000000",
                                            margin:20,
                                            fontFamily:"century gothic",
                                            }}
                                    >
                                        <h1
                                            style={{
                                            paddingTop: 10,
                                            paddingBottom: 5,
                                            border:1,
                                            fontFamily:"courier new",
                                            fontWeight: "normal"
                                            }}
                                            >You Can Program
                                        </h1>
                                        <p
                                            style={{
                                                fontSize:16,
                                                lineHeight: 1.6
                                            }}
                                        >
                                            Programing is not difficult but it is complicated. Something is difficult if it requires a lot of skills to accomplish that task. For example, memorizing a huge list of random numbers in 1 minute is difficult as not many people have the capacity to do that. Thankfully, programming is complicated rather than difficult which means anyone can learn to program if they get over the two main barriers that make programming seem difficult.<br/><br/>

                                            Many people wish to learn how to program since it is a powerful tool that allows for innovation, creation, and optimization. Unfortunately, getting started is intimidating. A major barrier that gets in the way of learning how to code is the language that is used in this field. There seem to be hundreds of terms, abbreviations, and acronyms for concepts that seem foreign. Being unable to decipher the words in every programing article or video tutorial is discouraging to many and causes people to give up on learning to program.<br/><br/>

                                            Another major setback for people that wish to get into programming is that it is very hard to figure out where to start. Hundreds of programming languages exist not to mention the thousands of libraries and frameworks that go with each language. Additionally, each language uses different rules for writing programs (called syntax) and is capable of doing specific jobs well. It is overwhelming to attempt to learn the different methods of programming which makes people stop their programing journey before they have even started.
                                        </p>
                                    </Paper>
                                </Grid>


                                <Grid item xs={12}>
                                    <Paper
                                        style={{
                                            padding:30,
                                        textAlign: 'left',
                                        backgroundColor:"white",
                                        color:"#000000",
                                        margin:20,
                                            fontFamily:"century gothic",
                                        }}
                                    >
                                        <h1
                                            style={{
                                            paddingTop: 10,
                                            paddingBottom: 5,
                                            border:1,
                                            fontFamily:"courier new",
                                            fontWeight: "normal"
                                            }}
                                        >Get Started Today
                                        </h1>
                                        <p
                                            style={{
                                                fontSize:16,
                                                lineHeight: 1.6,

                                            }}
                                        >
                                            Programing is not difficult but it is complicated. Something is difficult if it requires a lot of skills to accomplish that task. For example, memorizing a huge list of random numbers in 1 minute is difficult as not many people have the capacity to do that. Thankfully, programming is complicated rather than difficult which means anyone can learn to program if they get over the two main barriers that make programming seem difficult.<br/><br/>

                                            Many people wish to learn how to program since it is a powerful tool that allows for innovation, creation, and optimization. Unfortunately, getting started is intimidating. A major barrier that gets in the way of learning how to code is the language that is used in this field. There seem to be hundreds of terms, abbreviations, and acronyms for concepts that seem foreign. Being unable to decipher the words in every programing article or video tutorial is discouraging to many and causes people to give up on learning to program.<br/><br/>

                                            Another major setback for people that wish to get into programming is that it is very hard to figure out where to start. Hundreds of programming languages exist not to mention the thousands of libraries and frameworks that go with each language. Additionally, each language uses different rules for writing programs (called syntax) and is capable of doing specific jobs well. It is overwhelming to attempt to learn the different methods of programming which makes people stop their programing journey before they have even started.
                                        </p>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </div>
                ):(
                        <div className="parent">
                            <Grid container spacing={1}  >
                                <Grid  item xs={6}>
                                    <Paper
                                        style={{
                                            padding: 30,
                                            textAlign: 'left',
                                            backgroundColor:"white",
                                            color:"#000000",
                                            margin:20
                                        }}
                                    >
                                        <h1 style={{
                                            paddingTop: 10,
                                            paddingBottom: 5,
                                            border:1,
                                            fontFamily:"courier new",
                                            fontWeight: "normal"
                                        }}
                                        >You Can Program</h1>
                                        <p style={{
                                            fontFamily:"century gothic", fontSize:16,lineHeight: 1.6
                                        }}
                                        >
                                            Programing is not difficult but it is complicated. Something is difficult if it requires a lot of skills to accomplish that task. For example, memorizing a huge list of random numbers in 1 minute is difficult as not many people have the capacity to do that. Thankfully, programming is complicated rather than difficult which means anyone can learn to program if they get over the two main barriers that make programming seem difficult.<br/><br/>
                                            Many people wish to learn how to program since it is a powerful tool that allows for innovation, creation, and optimization. Unfortunately, getting started is intimidating. A major barrier that gets in the way of learning programming is the language that is used in this field. There seem to be hundreds of terms, abbreviations, and acronyms for concepts that seem foreign. Being unable to decipher the words in every programing article or video tutorial is discouraging to many and causes people to give up on learning to program.<br/><br/>
                                            Another major setback for people that wish to get into programming is that it is very hard to figure out where to start. Hundreds of programming languages exist not to mention the thousands of libraries and frameworks that go with each language. Additionally, each language uses different rules for writing programs (called syntax) and is capable of doing specific jobs well. It is overwhelming to attempt to learn the different methods of programming and makes people stop their journey before they have even started.
                                        </p>
                                    </Paper>
                                </Grid>

                                <Grid item xs={6}>
                                    <Paper style={{
                                        padding: 30,
                                        textAlign: 'left',
                                        backgroundColor:"white",
                                        color:"#000000",
                                        margin:20
                                    }}
                                    >
                                        <h1 style={{

                                            paddingTop: 10,
                                            paddingBottom: 5,
                                            border:1,
                                            fontFamily:"courier new",
                                            fontWeight: "normal"
                                        }}>Get Started Today</h1>
                                        <p style={{
                                            fontFamily:"century gothic", fontSize:16, lineHeight: 1.6
                                        }}
                                        >
                                            Terms2Program is a web app designed to encourage people to program. The core belief of this application is that the world is missing out on amazing innovation and problem-solving because people are misguided into thinking programing is beyond their intellectual abilities.<br/><br/>

                                            This web app is comprised of two parts. The HOME page of this application presents a list of regularly used terms in the field of programming, along with a simple description of each term and a list of resources that you can use to learn more about that topic. The terms are divided into two categories WEB BASICS and SOFTWARE DEVELOPMENT TERMS. Additionally, on the HOME page, there is a list of common programming LANGUAGES, FRAMEWORKS, and LIBRARIES. Clicking on an item from any of the above categories brings up a description of that programing language / library / framework, what it can be used for, along with a list of resources that can help you get started learning it.<br/><br/>

                                            The second part of Terms2Program is meant to motivate and inspire people to program at all levels. The best way to learn any skill is to see how successful people went about learning it; as the old saying goes, "If you can't beat them, join them". The PROGRAMING JOURNEYS page, as suggested by its name, presents a list of programming journeys from successful, self-taught programmers. In addition to helping complete beginners get started the PROGRAMING JOURNEYS page contains stories that explain how people approached learning specific skills in programming (languages / libraries / frameworks).
                                        </p>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </div>
                )}
                </MediaQuery>
        </div>
    )
}



export default About;