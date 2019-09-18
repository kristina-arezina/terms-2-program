import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CreateDialog from "../Exercises/Dialogs/Create"


function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="headline" color="inherit" style={{flex: 1}}>
                    Learn2Program
                </Typography>

                <CreateDialog/>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
