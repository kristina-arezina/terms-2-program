import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import CreateDialog from "../Exercises/Dialogs/Create"


export class Journey extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const{muscles,onExerciseCreate}=this.props;


    return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="headline" color="inherit" style={{flex: 1}}>
                Learn2Program
            </Typography>
            <Button
                label="Back"
                primary={true}
                onClick={this.back}
            >
                Glossary
            </Button>

        <CreateDialog
        muscles={muscles}
        onCreate={onExerciseCreate}
        />
        </Toolbar>
    </AppBar>

    )
    }
    }

export default Journey;