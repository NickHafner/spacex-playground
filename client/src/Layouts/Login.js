import React, { useContext, useEffect, useState, useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel, TextField, Button, Grid } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { UserContext } from "../contexts/UserContext";
import { UserReducer, LOGIN } from '../contexts/UserReducer';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    container: {
        color: '#F4F4f4',
        width: '55%',
        height: '35rem',
        margin: '0 auto',
        padding: '1.5rem 1rem 1rem 1rem',
        borderRadius: '1rem',
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        }
    },
    inputBox: {
        width: '100%',
        margin: '.05rem'
    },
    button:{
        marginTop: '1.5rem',
        background: '#748194',
        alignContent: 'center'
    },
    usernameInput:{
        color: '#748194',
        background: '#141414',
        border: 'none',
        borderRadius: '.33rem',
        padding: '6px 15px',
        '& focus': {
            background: '#060606'
        }
    }
}));

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    const classes = useStyles();
    const [userState, dispatch] = useContext(UserContext);

    const usernameChange = ({target}) => {
        setUsername(target.value);
    }

    const passwordChange = ({target}) => {
        setPassword(target.value);
    }

    const login = () => {
        dispatch({type: LOGIN, username: username});
        history.push('/launches')
    }

    return (
        <div className={classes.container}>
            <TextField required id="username" onChange={usernameChange} placeholder='Username' value={username} className={classes.inputBox} InputProps={{className: classes.usernameInput}} label="Username"/>
            <TextField required type="password" id="password" onChange={passwordChange} placeholder='Password'  value={password} className={classes.inputBox} InputProps={{className: classes.usernameInput}} label="Password"/>
            <Grid container alignItems="flex-start" justify="flex-end" direction="row">
                <Button onClick={login} className={classes.button} variant="contained">Login In</Button>
            </Grid>
        </div>
    );
}
export default Login;