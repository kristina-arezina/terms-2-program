import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export class PageJourney extends Component {
    render(){
return (
    <Paper >
        <Typography variant="h5" component="h3" style={{
            paddingTop:150,
            paddingBottom:80,
            textAlign:"center",
            textTransform: 'uppercase',
            backgroundColor:"#fef9ce",
            fontFamily:"courier new",
        }}>
        Programing Journeys
        </Typography>

    </Paper>
)
    }
}

export default PageJourney;