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

export default function FullWidthGrid() {
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

            <ListItemText
                primary={
                    <React.Fragment >
                      Hello
                    </React.Fragment>
                }
                secondary={
                    <React.Fragment >


                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,


                                <br/>
                                <Button className={classes.button}>
                                    <Link className={classes.link} rel="noopener" variant="body1" href="https://www.blindtextgenerator.com/lorem-ipsum" target="_blank">
                                        Read Full
                                    </Link>
                                </Button>
                    </React.Fragment>
                }
            />
        </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
      </Grid>
    </div>
  );
}
