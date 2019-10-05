import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TemporaryDrawer from "./SmallNavBar"
import MediaQuery from 'react-responsive';




export class Header extends Component {

    homePage = e => {
        e.preventDefault();
        this.props.home();
    }

    journeyPage = e => {
        e.preventDefault();
        this.props.journey();
    }

    aboutPage = e => {
        e.preventDefault();
        this.props.about();
    }

    render(){
    const{newPage}=this.props;

    return(

                <MediaQuery query="(max-width: 599px)">
                {matches =>
                    matches ? (
                        <div style={{
                            borderRadius: "1px",
                            padding: '0 30px',
                            margin:"5px",
                        }}>
                            <AppBar color="#f4f4f4">
                                <Typography variant="h6" style={{flexGrow: 1}}>
                                    Learn2Program
                                </Typography>
                                <Toolbar>
                        <TemporaryDrawer/>
                                </Toolbar>
                            </AppBar>
                        </div>

                    ) : (
                        <div style={{
                            borderRadius: "1px",
                            padding: '0 30px',
                            margin:"5px",
                        }}>
                            <AppBar color="#f4f4f4">
                                <Typography variant="h6" style={{flexGrow: 1}}>
                                    Learn2Program
                                </Typography>
                                <Toolbar>
                                    <Button color="inherit" variant="text"
                                            style={{
                                                color:"#f4f4f4",
                                                backgroundColor: "#00867d",
                                                textTransform: "uppercase",
                                                borderRadius: "1px",
                                                margin:"5px",
                                                height: 48,
                                            }}
                                            onClick={this.homePage}>
                                        Home
                                    </Button>
                                    <Button color="inherit" variant="text"
                                            style={{
                                                color:"#f4f4f4",
                                                backgroundColor: "#00867d",
                                                textTransform: "uppercase",
                                                borderRadius: "1px",
                                                margin:"5px",
                                                height: 48,
                                            }}
                                            onClick={this.journeyPage}>
                                        Programing Journeys
                                    </Button>
                                    <Button color="inherit" variant="text"
                                            style={{
                                                color:"#f4f4f4",
                                                backgroundColor: "#00867d",
                                                textTransform: "uppercase",
                                                borderRadius: "1px",
                                                margin:"5px",
                                                height: 48,
                                            }}
                                            onClick={this.aboutPage}>
                                        About
                                    </Button>
                                </Toolbar>
                            </AppBar>
                        </div>

                    )
                }
            </MediaQuery>


)
    }
    }


export default Header;