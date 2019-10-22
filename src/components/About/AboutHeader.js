import React from 'react';
import MediaQuery from 'react-responsive';

//everything for the header on the about page
function AboutHeader(){
    return (
        <header >
            <MediaQuery query="(max-width: 841px)">
                {matches =>
                matches ? (
                    <h1 style={headerStyle2}>About Us</h1>
                ) :
                    (
                        <h1 style={headerStyle1}>About Us</h1>
                    )}
            </MediaQuery>
        </header>
    )
}

const headerStyle1 = {
    background:"#4db6ac",
    color:"#f4f4f4",
    textAlign: "left",
    paddingLeft:"81px",
    paddingTop:"150px",
    paddingBottom:"22px",
    fontSize:"60pt",
    fontFamily:"century gothic",
    fontWeight: "normal",
    margin:"0px",
    display:"Block",
};

const headerStyle2 = {
    background:"#4db6ac",
    color:"#f4f4f4",
    textAlign: "left",
    paddingLeft:"40px",
    paddingTop:"100px",
    paddingBottom:"22px",
    fontSize:"40pt",
    fontFamily:"century gothic",
    fontWeight: "normal",
    margin:"0px",
    display:"Block",
};


export default AboutHeader;