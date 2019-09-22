import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';



export default function JourneyList() {
    function Row(props) {
        const { index, style } = props;

        return (
            <ListItem button style={style} key={index}>
                <ListItemText primary={`Item ${index + 1}`} />
            </ListItem>
        );
    }


        return (
            <div>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Complete Beginner</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <FixedSizeList height={400} width={2000} itemSize={46} itemCount={200}>
                            {Row}
                        </FixedSizeList>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>React</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <FixedSizeList height={400} width={2000} itemSize={46} itemCount={200}>
                            {Row}
                        </FixedSizeList>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>C++</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <FixedSizeList height={400} width={2000} itemSize={46} itemCount={200}>
                            {Row}
                        </FixedSizeList>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>JavaScript</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <FixedSizeList height={400} width={2000} itemSize={46} itemCount={200}>
                            {Row}
                        </FixedSizeList>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }


