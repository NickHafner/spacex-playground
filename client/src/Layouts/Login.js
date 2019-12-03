import * as React from "react";
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel, TextField } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
    },
    usernameInput:{
        color: '#748194',
        background: '#141414',
        border: 'none',
        borderRadius: '.33rem',
        padding: '6px 15px',
    }
}));

function Login() {
    const [userName, setUserName] = React.useState("fads");
    const [userPassword, setUserPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <TextField required id="username" value={userName} className={classes.inputBox} InputProps={{className: classes.usernameInput}} label="Username field" variant="outlined" />
        </div>
    );
}
export default Login;