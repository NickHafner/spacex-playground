import React, { useContext } from 'react';
import logo from '.././logo.png';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import { UserContext } from '../contexts/UserContext';
import { Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { LOGOUT } from '../contexts/UserReducer';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    header: {
        color: '#F4F4f4',
        padding: '.5rem 1rem 2rem 1rem',
    },
    count: {
        color: '#F4F4f4',  
        position: 'relative',
        top: '20%'
    },
    loggout: {
        color: '#F4F4f4',  
        position: 'relative',
        textAlign: 'center',
        top: '20%'
    }
});

function Header(){
    const classes = useStyles();
    const [userState, dispatch] = useContext(UserContext);
    const history = useHistory();

    const loggout = () => {
        dispatch({ type: LOGOUT });
        history.push('/');
    }

    return(
        <React.Fragment>
            <Grid container id='header'>
                <Grid item xs={2} md={1}>
                <div className={classes.loggout}>
                    {userState.validated === true ? <ExitToAppIcon onClick={loggout}/> : null}
                </div>
                </Grid>
                <Grid item xs={8} md={10}>
                    <div className={classes.header}>
                        <img
                            src={logo}
                            alt="SpaceX Logo"
                            style={{ width: 300, display: 'block', margin: 'auto' }}
                        />
                    </div>
                </Grid>
                <Grid item xs={2} md={1}>
                    <Typography Typography variant='h4' component='h2'
                        style={{ height: '100%', display: 'block', margin: 'auto' }}
                    >
                        <div className={classes.count} >
                            {userState.validated === true ? userState.favoriteLaunches.length : null}
                        </div>
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Header;