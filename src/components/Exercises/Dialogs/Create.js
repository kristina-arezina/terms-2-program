import React, {Fragment} from "react"
import {Dialog, Button} from "@material-ui/core"
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';


export default props =>
    <Fragment>
        <Button varient="fab" color="primary" mini>
            <AddIcon />
        </Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Create a New Exercise </DialogTitle>
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