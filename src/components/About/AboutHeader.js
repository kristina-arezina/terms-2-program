import React from 'react';
import MediaQuery from 'react-responsive';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";

//everything for the header on the about page
const useStyles = makeStyles({
    HeaderStyle1 : {
        background:"#4db6ac",
        color:"#f4f4f4",
        textAlign: "left",
        paddingLeft:"81px",
        paddingTop:"150px",
        paddingBottom:"22px",
        fontSize:"60pt",
        fontWeight: "normal",
        margin:"0px",
        display:"Block",
        fontFamily:"Roboto",
    },
    HeaderStyle2 : {
        background:"#4db6ac",
        color:"#f4f4f4",
        textAlign: "left",
        paddingLeft:"40px",
        paddingTop:"100px",
        paddingBottom:"22px",
        fontSize:"40pt",
        fontWeight: "normal",
        margin:"0px",
        display:"Block",
        fontFamily:"Roboto",
    },


})

function AboutHeader(){
    const classes = useStyles();
    return (
        <header>
            <MediaQuery query="(max-width: 841px)">
                {matches =>
                matches ? (
                    <Typography className={classes.HeaderStyle2}>About Us</Typography>
                ) :
                    (
                        <Typography className={classes.HeaderStyle1}>About Us</Typography>
                    )}
            </MediaQuery>
        </header>
    )
}





export default AboutHeader;