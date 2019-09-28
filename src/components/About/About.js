import React from 'react';
import AboutHeader from "./AboutHeader.js";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';

function About(){
    return(
        <div >
            <AboutHeader/>

            <div className="parent">
                <Grid container spacing={1}>
                    <Grid item sm >
                        <Paper
                            style={{
                            padding: 20,
                            textAlign: 'left',
                            margin:20
                            }}
                        >
                            <h1 style={{
                                backgroundColor:"white",
                                color:"#000000",
                                paddingTop: 10,
                                paddingBottom: 5,
                                border:1,
                                fontFamily:"courier new",
                                fontWeight: "normal"
                            }}
                            >Our Mission</h1>
                            <p className="aboutText">Lorem ipsum elementum ultricies elementum lobortis torquent
                                suscipit ligula,
                                dolor eros suscipit
                                himenaeos sem ut pulvinar, vulputate at pharetra sem nisi faucibus vivamus luctus
                                felis pulvinar vel
                                ac bibendum et, dictum sed tristique curabitur per, arcu etiam gravida sem id
                                consectetur faucibus nibh</p>

                        </Paper>
                    </Grid>


                    <Grid item sm >
                        <Paper style={{
                            padding: 20,
                            textAlign: 'left',
                            margin:20
                        }}
                        >
                            <h1 style={{
                                backgroundColor:"white",
                                color:"#000000",
                                paddingTop: 10,
                                paddingBottom: 5,
                                border:1,
                                fontFamily:"courier new",
                                fontWeight: "normal"
                            }}>Get Started Today</h1>
                            <p style={{
                                paddingTop:10,
                                backgroundColor:"white"
                            }}
                            >
                                elementum libero curae in neque ultrices aptent consectetur,
                                facilisis taciti sollicitudin tempor fames
                                tempor aliquam neque lacinia habitant, interdum sem libero aenean vitae ipsum vivamus
                                auctor proin
                                morbi euismod morbi fermentum metus molestie tincidunt etiam sagittis vivamus,
                                condimentum tempus
                                convallis sollicitudin pretium metus suspendisse purus, curabitur aenean eros
                                proin sodales accumsan
                                hac aliquam. Adipiscing curae elit gravida dolor tincidunt inceptos praesent
                                himenaeos, amet posuere
                                eros nullam
                            </p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}


export default About;