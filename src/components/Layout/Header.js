import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Typography, Button} from '@material-ui/core';
import TemporaryDrawer from "./SmallNavBar"
import MediaQuery from 'react-responsive';

export class Header extends Component {

    render(){

        return(

            <div style={{
            borderRadius: "1px",
            padding: '0 30px',
            margin:"5px",
            }}>
                <MediaQuery query="(max-width: 599px)">
                {matches =>
                    matches ? (
                        <AppBar color="#f4f4f4">
                            <Toolbar>
                                <Typography variant="h6" style={{flexGrow: 1}}>
                                    <Button href="/" style={{ backgroundColor: "Transparent",  overflow: "hidden", }} color="inherit" variant="text"
                                            >
                                        Learn2Program
                                    </Button>
                                </Typography>
                                    <TemporaryDrawer />
                            </Toolbar>
                        </AppBar>

                    ) : (
                        <AppBar color="#f4f4f4">
                            <Toolbar>
                                <Typography variant="h6" style={{flexGrow: 1,}}>
                                    <Button href="/" style={{ backgroundColor: "Transparent",  overflow: "hidden", fontSize:"20px", fontFamily:"courier new" }}  color="inherit" variant="text">
                                    Learn2Program
                                    </Button>
                                </Typography>

                                    <Button href="/journey" color="inherit" variant="text"
                                            style={{
                                                color:"#f4f4f4",
                                                backgroundColor: "#00867d",
                                                textTransform: "uppercase",
                                                borderRadius: "1px",
                                                margin:"5px",
                                                height: 48,
                                            }}
                                            >
                                        Programing Journeys
                                    </Button>
                                    <Button href="/about" color="inherit" variant="text"
                                            style={{
                                                color:"#f4f4f4",
                                                backgroundColor: "#00867d",
                                                textTransform: "uppercase",
                                                borderRadius: "1px",
                                                margin:"5px",
                                                height: 48,
                                            }}
                                            >
                                        About
                                    </Button>
                            </Toolbar>
                        </AppBar>

                    )}
                </MediaQuery>
            </div>
        )

    }
}


export default Header;