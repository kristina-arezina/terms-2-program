import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export class PageJourney extends Component {
    render(){
return (
    <Paper >
        <Typography variant="h5" component="h3" style={{padding:10, textAlign:"center"}}>
        Programing Journeys
        </Typography>

    </Paper>
)
    }
}

export default PageJourney;