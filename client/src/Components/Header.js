import React from 'react';
import logo from '.././logo.png';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    header: {
        padding: '.5rem 1rem 2rem 1rem'
    }
});

function Header(){
    const classes = useStyles();
    
    return(
        <React.Fragment>
            <Grid container id='header'>
                <Grid item xs={12}>
                    <div className={classes.header}>
                        <img
                            src={logo}
                            alt="SpaceX"
                            style={{ width: 300, display: 'block', margin: 'auto' }}
                        />
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Header;