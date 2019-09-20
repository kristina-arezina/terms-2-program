import React, {Fragment, Component} from "react"
import {Dialog, Button} from "@material-ui/core"
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/AddRounded';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

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
        const {open, exercise:{title,description,muscles }} = this.state,
        {classes, muscles: categoires } = this.props
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
                    style={{width:500}}
                />
                <br/>
                <FormControl >
                    <InputLabel htmlFor="muscles">Muscles</InputLabel>
                    <Select
                        style={{width:500}}
                        value={muscles}
                        onChange={this.handleChange("muscles")}
                        >
                        {categoires.map(category =>
                            <MenuItem value={category}>{category}</MenuItem>
                        )}

                    </Select>
                </FormControl>
                <br/>
                <TextField
                    style={{width:500}}
                    multiline
                    rows="6"
                    label="Description"
                    value={description}
                    onChange={this.handleChange('description')}
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
