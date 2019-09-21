import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

export class Journey extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){

    return (
        <div>
        <h1>Hello from journey</h1>

            <Button
            label="Back"
            primary={true}
            onClick={this.back}
            >
                Back
            </Button>

        </div>
    )
}
}
export default Journey;