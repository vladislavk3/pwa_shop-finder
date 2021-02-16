import {Button, Grid, Paper, Typography, IconButton, TextField} from '@material-ui/core';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import React, {useState} from 'react';
import {GoogleLogin} from 'react-google-login';

import {ReactComponent as ShapeIcon} from '../../static/images/ic_combined.svg';
import {ReactComponent as WeThePeopleIcon} from '../../static/images/ic_withpeople.svg';
import {ReactComponent as BackIcon} from '../../static/images/ic_back.svg';

const useStyles = makeStyles(theme => ({
    content: {
        backgroundColor: '#EDB730',
        height: '100vh',
        position: 'relative',
        borderRadius: '0px',
        overflow: 'hidden'
    },
    shape: {
        position: 'absolute',
        bottom: '0px',
        width: '100%'
    },
    margin_top: {
        marginTop: '51px'
    },
    grid_welcome: {
        marginTop: "16px"
    },
    txt_welcome: {
        color: '#464646',
        fontSize: "18px",
        fontWeight: "bold",
        lineHeight: "22px",
        textAlign: "center"
    },
    grid_discription: {
        marginTop: '8px',
        marginBottom: '24px'        
    },
    txt_header: {
        color: '#464646',
        fontSize: "18px",
        fontWeight: "bold",
        lineHeight: "22px",
        textAlign: "center"
    },
    txt_description: {
        color: '#464646',
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "17px",
        textAlign: "center"
    },
    backbutton: {
        marginTop: "5px",
        marginLeft: "5px"
    },
}));

const GoogleSignIn = props => {
    const classes = useStyles();

    const {history} = props;

    const handleClickBackButton = () => {
        history.replace('/signin');
    }

    const responseGoogle = (response) => {
        console.log(response.Zi.id_token);
        if(response.Zi.id_token === null){
            
        } else {
            
        }
    }

    return(
        <Paper className={classes.content}>
            <ShapeIcon className={classes.shape} />
            <IconButton
                edge="start"
                aria-label="Back Button"
                className={classes.backbutton}
                onClick={handleClickBackButton}
            >
                <BackIcon />
            </IconButton>

            <Grid container direction="column" alignItems="center" className={classes.margin_top}>
                <Grid container justify="center">
                    <WeThePeopleIcon />
                </Grid>
                <Grid container justify="center" className={classes.grid_welcome}>
                    <Typography className={classes.txt_header}>WELCOME BACK!</Typography>
                </Grid>
                <Grid container justify="center" className={classes.grid_discription}>
                    <Typography className={classes.txt_description}>
                    </Typography>
                </Grid>
                <Grid container justify="center" >
                    <GoogleLogin
                        clientId="916996495952-het0cstbe1t60f89buufhici7c8oc1ql.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />    
                </Grid>
            </Grid>
        </Paper>
    );
}

export default GoogleSignIn;