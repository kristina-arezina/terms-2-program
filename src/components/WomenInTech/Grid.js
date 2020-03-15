import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Link, ListItemText, ListItem, List, ExpansionPanelDetails, Paper, Typography, ExpansionPanelSummary, ExpansionPanel} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft:20,
    marginRight:20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    padding:25,
    fontFamily:"century gothic",
  },
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
}));

export default ({womenJourney}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <Paper style={{
            backgroundColor:"#fffff",
            padding:25,
            fontFamily:"century gothic",
        }}
        >
        {womenJourney.map(({ title, description, link, id }) =>
            <ListItem alignItems="flex-start"  key={id}>
                <Paper style={{
                    backgroundColor:"#e0f2f1",
                    padding:25,
                    fontFamily:"century gothic",
                }}>
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
                }>
            </ListItemText>
        </Paper>
</ListItem>
      //   <Grid item xs={12} sm={6}>
      //     <Paper className={classes.paper}>xs=12 sm=6</Paper>
      //   </Grid>
      //     <Grid item xs={12} sm={6}>
      //       <Paper className={classes.paper}>xs=12 sm=6</Paper>
      //     </Grid>
      //     <Grid item xs={12} sm={6}>
      //       <Paper className={classes.paper}>xs=12 sm=6</Paper>
      //     </Grid>
      //     <Grid item xs={12} sm={6}>
      //       <Paper className={classes.paper}>xs=12 sm=6</Paper>
      //     </Grid>
      //     <Grid item xs={12} sm={6}>
      //       <Paper className={classes.paper}>xs=12 sm=6</Paper>
      //     </Grid>



  ,
)}
