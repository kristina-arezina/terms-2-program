import React, {Fragment, Component} from "react"
import {Dialog, Button} from "@material-ui/core"
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/AddRounded';
import { white } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';



export default class extends Component {
    state = {
        open: false
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render(){
        const {open} = this.state
            return <Fragment>
<Fab style={{color: 'white' }} onClick={this.handleToggle} mini>
    <AddIcon/>
</Fab>

<Dialog
    open={open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title">
<DialogTitle id="form-dialog-title">
    Create a New Exercise
</DialogTitle>
<DialogContent>
    <DialogContentText>
    Please fill out the form below.
    </DialogContentText>
<form>
</form>

</DialogContent>
<DialogActions>
<Button color="primary">
Create
</Button>
</DialogActions>
</Dialog>
</Fragment>
    }
}
