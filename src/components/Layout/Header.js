import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
                                    Learn2Program
                                </Typography>
                                    <TemporaryDrawer />
                            </Toolbar>
                        </AppBar>

                    ) : (
                        <AppBar color="#f4f4f4">
                            <Toolbar>
                                <Typography variant="h6" style={{flexGrow: 1}}>
                                    Learn2Program
                                </Typography>
                                    <Button href="/" color="inherit" variant="text"
                                            style={{
                                                color:"#f4f4f4",
                                                backgroundColor: "#00867d",
                                                textTransform: "uppercase",
                                                borderRadius: "1px",
                                                margin:"5px",
                                                height: 48,
                                            }}
                                            >
                                        Home
                                    </Button>
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