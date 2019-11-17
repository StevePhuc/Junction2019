import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: '10px',
    },
    selectTime: {
        flexDirection: 'row'
    }
}));

export default function RadioButtonsGroup({ valueTime, setValueTime }) {
    const classes = useStyles();

    const handleChange = event => {
        setValueTime(event.target.value);
    };

    return (
        <div>
            <FormControl component="fieldset" className={classes.formControl}>
                {/* <FormLabel component="legend">Time</FormLabel> */}
                <RadioGroup aria-label="gender" className={classes.selectTime} value={valueTime} onChange={handleChange}>
                    <FormControlLabel value="morning" control={<Radio />} label="Morning" />
                    <FormControlLabel value="afternoon" control={<Radio />} label="Afternoon" />
                    <FormControlLabel value="evening" control={<Radio />} label="Evening" />

                </RadioGroup>
            </FormControl>

        </div>
    );
}