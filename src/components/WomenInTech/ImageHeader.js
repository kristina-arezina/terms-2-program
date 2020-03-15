import React from 'react';
import Typography from '@material-ui/core/Typography';
import WordArt from "./WordArt.png";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    paddingTop:30,
    itemAlign:"center",
    textTransform: 'uppercase',
    backgroundColor:"#f4f4f4",
    fontFamily:"courier new",
  },
}));


export default function ImageHeader() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs alignItems="center" container justify="center"
      >
        <paper className={classes.paper}><img src={WordArt}></img></paper>
      </Grid>
    </React.Fragment>
  );
}
