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
            name:"",
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

    handleSubmit = () => {
        //    To do: must create validation
        const {exercise} = this.state

        this.props.onCreate({
            ...exercise,
            id:exercise.name.toLowerCase().replace(/ /g, "-")
        })

        this.setState({
            exercise:"",
            open:false,
            description:"",
            muscles:"",
            name:"",
        })
    }

    render(){
        const {open, exercise:{name,description,muscles }} = this.state,
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
                            label="Name"
                            value={name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            style={{width:250}}
                        />
                        <br/>
                        <FormControl >
                            <InputLabel htmlFor="muscles">Muscles</InputLabel>
                            <Select
                                style={{width:250}}
                                value={muscles}
                                onChange={this.handleChange("muscles")}
                            >
                                {categoires.map(category =>
                                    <MenuItem key={category} value={category}>{category}</MenuItem>
                                )}

                            </Select>
                        </FormControl>
                        <br/>
                        <TextField
                            style={{width:250}}
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
                    <Button
                        color="primary"
                        variant="raised"
                        onClick={this.handleSubmit}
                    >
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    }
}
