import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export class Header extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
    const{newPage}=this.props;

    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="headline" color="inherit" style={{flex: 1}}>
                    Learn2Program
                </Typography>
                <Button onClick={this.continue}>
                    Programing Journeys
                </Button>
            </Toolbar>
        </AppBar>
)
    }
    }


export default Header;