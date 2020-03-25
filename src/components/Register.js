import React, {useContext} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {Redirect} from "react-router";

import {Context} from "../Context";

/**
 * Shows Copyright information
 */
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                Little Foot Trails
            </Link>{" "} {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

/**
 * Component which houses the Register Form
 */
export const Register = () => {
    const classes = useStyles();
    const {
        auth: [loggedIn, setLoggedIn]
    } = useContext(Context);

    const registerData = {
        email: '',
        lastName: '',
        firstName: '',
        password1: '',
        password2: ''
    };

    /**
     * creates a new User
     * @param  {event} e Event of the Register form
     * @param  {data} data data necessary to create a new User
     */
    function handleRegister(e, data) {
        e.preventDefault();
        fetch('user/create/', {
            crossDomain: true,
            withCredentials: true,
            async: true,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(json => {
                if (json.token) {
                    localStorage.setItem('token', json.access);
                    setLoggedIn(true);
                }
            })
            .catch(error => {
                console.log("error during register", error);
            })
    }

    /**
     * Sets the review form details
     * @param  {string} fieldName Name of the field to be set
     * @param  {event} e Event of the form
     */
    function handleFieldChange(fieldName, e) {
        registerData[fieldName] = e.target.value;
    }

    return loggedIn
        ? (<Redirect path="/"/>)
        : (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <form
                        onSubmit={e => handleRegister(e, registerData)}
                        className={classes.form}
                        action="/"
                        noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    onChange={e => {
                                    handleFieldChange('firstName', e);
                                }}
                                    autoFocus/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    onChange={e => {
                                    handleFieldChange('lastName', e);
                                }}
                                    autoComplete="lname"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    onChange={e => {
                                    handleFieldChange('email', e);
                                }}
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={e => {
                                    handleFieldChange('password1', e);
                                }}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Confirm Password"
                                    type="password"
                                    id="password"
                                    onChange={e => {
                                    handleFieldChange('password2', e);
                                }}
                                    autoComplete="current-password"/>
                            </Grid>
                            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            Register
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Login
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright/>
                </Box>
            </Container>
        );
};
