import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Home, Map, LocationOn } from '@material-ui/icons';
import { getThemeProps } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        // width: 500,
    },
});

export default function SimpleBottomNavigation(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
                // console.log(newValue);
                props.setTab(newValue)
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Home" icon={<Home />} />
            <BottomNavigationAction label="Map" icon={<Map />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
        </BottomNavigation>
    );
}