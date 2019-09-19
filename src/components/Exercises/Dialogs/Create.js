import React, {Fragment, Component} from "react"
import {Dialog, Button} from "@material-ui/core"
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/AddRounded';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';




export default class extends Component {
    state = {
        open: false,
        exercise:{
            title:"",
            description:"",
            muscles:"",
        }
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleChange= name => ({target: {value}}) =>{
        this.setState({
            exercise: {
        ...this.state.exercise,
                [name]:value
        }
        })
    }


    render(){
        const {open, exercise:{title,description,muscles }} = this.state
            return <Fragment>
    <Fab onClick={this.handleToggle} size="medium" >
        <AddIcon/>
    </Fab>

    <Dialog
        open={open}
        onClose={this.handleToggle}
        >
            <DialogTitle id="form-dialog-title">
                Create a New Exercise
            </DialogTitle>
            <DialogContent>
            <DialogContentText>
                Please fill out the form below.
            </DialogContentText>
            <form>
                <TextField
                    label="Title"
                    value={title}
                    onChange={this.handleChange('title')}
                    margin="normal"
                />
            </form>

            </DialogContent>
            <DialogActions>
        <Button color="primary" variant="raised">
        Create
        </Button>
    </DialogActions>
    </Dialog>
    </Fragment>
    }
}
