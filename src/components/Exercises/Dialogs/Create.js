import React, {Fragment} from "react"
import {Dialog, Button} from "@material-ui/core"
import {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "material-ui/Dialog";
import {Add} from "material-ui-icons"

export default props =>
    <Fragment>
        <Button varient="fab" color="primary" mini>
            <Add/>
        </Button>

        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
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