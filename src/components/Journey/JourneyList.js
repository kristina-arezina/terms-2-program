import React, {Fragment} from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';

export default ({journeys}) =>
    <Paper>
        {journeys.map(([group,journeys])  =>
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

                    <List >{journeys.map(({ title, description, link }) =>
                        <ListItem alignItems="flex-start"  >
                            <Paper style={{backgroundColor:"#e0f2f1", padding:10}}
                            >

                            <ListItemText
                                style={{fontFamily:"century gothic"}}
                                primary={
                                    <Typography
                                    style={{marginBottom:5}}
                                    >
                                        {title}
                                    </Typography>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            variant="body2"
                                        >
                                            {description}
                                            <br/>
                                            <br/>
                                            <Link rel="noopener" variant="body1" href={link} target="_blank">
                                                {link}
                                            </Link>
                                        </Typography>
                                    </React.Fragment>

                                }
                            /></Paper>


                        </ListItem>


                    )}

                    </List>
                </ExpansionPanelDetails>

            </ExpansionPanel>
        )}
    </Paper>