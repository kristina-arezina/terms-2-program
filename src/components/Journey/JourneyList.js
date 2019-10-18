import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Button, Link, ListItemText, ListItem, List, ExpansionPanelDetails, Paper, Typography, ExpansionPanelSummary, ExpansionPanel} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    typographyJourneys: {
        textTransform: "uppercase",
        fontFamily:"courier new"
    },
    button:{
        padding:10,
        margin:10,
        border: "1px solid #4db6ac"
    },
    link:{
        textDecoration: "none",
        color: "#4db6ac"
    }

});

export default ({journeys}) => {
    const classes = useStyles();

return (
    <Paper>
        {journeys.map(([group,journeys]) =>

            <ExpansionPanel key={journeys}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography key={journeys}
                        variant="h6"
                        className={classes.typographyJourneys} >
                        {group}
                    </Typography>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>

                    <List>
                        {journeys.map(({ title, description, link, id }) =>
                            <ListItem alignItems="flex-start"  key={id}>
                                <Paper style={{
                                    backgroundColor:"#e0f2f1",
                                    padding:25,
                                    fontFamily:"century gothic",
                                }}
                                >

                                    <ListItemText
                                        primary={
                                            <React.Fragment >
                                                {title}
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <React.Fragment >


                                                    {description}
                                                        <br/>
                                                        <Button className={classes.button}>
                                                            <Link className={classes.link} rel="noopener" variant="body1" href={link} target="_blank">
                                                                Read Full
                                                            </Link>
                                                        </Button>
                                            </React.Fragment>
                                        }
                                    />
                                </Paper>
                            </ListItem>
                        )}
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )}
    </Paper>
)}