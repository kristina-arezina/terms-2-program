import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Typography, Button} from '@material-ui/core';
import TemporaryDrawer from "./SmallNavBar"
import MediaQuery from 'react-responsive';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};



export default function Header (props) {

        return(

            <div style={{
            borderRadius: "1px",
            padding: '0 30px',
            margin:"5px",
            }}>
                <MediaQuery query="(max-width: 599px)">
                {matches =>
                    matches ? (
                        <HideOnScroll {...props}>
                        <AppBar color="inherit">
                            <Toolbar>
                                <Typography variant="h6" style={{flexGrow: 1}}>
                                    <Button href="/" style={{ backgroundColor: "Transparent",  overflow: "hidden",fontFamily: 'Cormorant Garamond',fontSize:"20px", padding:20 }} color="inherit" variant="text"
                                            >
                                        Terms2Program
                                    </Button>
                                </Typography>
                                    <TemporaryDrawer />
                            </Toolbar>
                        </AppBar>
                        </HideOnScroll>

                    ) : (
                        <HideOnScroll {...props}>
                        <AppBar color="inherit">
                            <Toolbar>
                                <Typography variant="h6" style={{flexGrow: 1,}}>
                                    <Button href="/" style={{ backgroundColor: "Transparent",  overflow: "hidden", fontSize:"25px", fontFamily: 'Cormorant Garamond', padding:20 }}  color="inherit" variant="text">
                                        Terms2Program
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
                        </HideOnScroll>

                    )}
                </MediaQuery>
            </div>
        )
}
