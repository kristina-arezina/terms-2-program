import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export class Header extends Component {

    continue = e => {
        e.preventDefault();
        this.props.home();
    }

    back = e => {
        e.preventDefault();
        this.props.journey();
    }

    render(){
    const{newPage}=this.props;

    return(
        <div style={{
            borderRadius: "1px",
            padding: '0 30px',
            margin:"5px",
        }}>
        <AppBar color="#f4f4f4">
            <Toolbar>
                <Typography variant="h6" style={{flexGrow: 1}}>
                    Learn2Program
                </Typography>
                <Button color="inherit" variant="text"
                        style={{
                            color:"#f4f4f4",
                            backgroundColor: "#00867d",
                            textTransform: "uppercase",
                            borderRadius: "1px",
                            margin:"5px",
                            height: 48,
                        }}
                        onClick={this.continue}>
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
                        onClick={this.back}>
                    Programing Journeys
                </Button>
            </Toolbar>
        </AppBar>
        </div>
)
    }
    }


export default Header;