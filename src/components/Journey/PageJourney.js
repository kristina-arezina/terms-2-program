import React, {Component} from 'react';
import {Paper,Typography } from '@material-ui/core';

export class PageJourney extends Component {
    render(){

        return (
            <Paper>
                <Typography variant="h5" component="h3" style={{
                    paddingTop:200,
                    paddingBottom:80,
                    textAlign:"center",
                    textTransform: 'uppercase',
                    backgroundColor:"#f4f4f4",
                    fontFamily:"courier new",
                }}>
                    Programing Journeys
                </Typography>
            </Paper>
        )
    }
}

export default PageJourney;