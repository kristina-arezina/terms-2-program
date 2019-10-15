import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Button, Link, ListItemText, ListItem, List, ExpansionPanelDetails, Paper, Typography, ExpansionPanelSummary, ExpansionPanel} from "@material-ui/core";

export default ({journeys}) =>
    <Paper>
        {journeys.map(([group,journeys]) =>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography
                        variant="h6"
                        style={{textTransform: "uppercase", fontFamily:"courier new"}}
                    >
                        {group}
                    </Typography>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>

                    <List>
                        {journeys.map(({ title, description, link }) =>
                            <ListItem alignItems="flex-start"  >
                                <Paper style={{backgroundColor:"#e0f2f1", padding:10}}
                                >

                                    <ListItemText
                                        primary={
                                            <Typography
                                                style={{
                                                    marginBottom:"1.5%",
                                                    fontFamily:"century gothic",
                                                    color:"#000000"
                                                }}
                                            >
                                                {title}
                                            </Typography>
                                        }
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    style={{fontFamily:"century gothic",
                                                        color:"#000000",
                                                        fontWeight: 50,
                                                        margin:20
                                                    }}
                                                >
                                                    {description}
                                                        <br/>
                                                        <Button style={{padding:10, margin:10, border: "1px solid #4db6ac"}}>
                                                            <Link style={{textDecoration: "none", color: "#4db6ac"}} rel="noopener" variant="body1" href={link} target="_blank">
                                                                Read Full
                                                            </Link>
                                                        </Button>
                                                </Typography>
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