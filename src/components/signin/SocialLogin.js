import {Button, Grid, Paper, Typography} from '@material-ui/core';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import React, { useState } from 'react';

import {ReactComponent as ShapeIcon} from '../../static/images/ic_combined.svg';
import {ReactComponent as WeThePeopleIcon} from '../../static/images/ic_withpeople.svg';
import ButtonGrid from "./ButtonGrid";
import GoogleLoginButton from './GoogleLoginButton';
import TwitterLoginButton from './TwitterLoginButton';
import FacebookLoginButton from './FacebookLoginButton';
import CreateAccountButton from './CreateAccountButton';

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
        marginTop: '100px'
    },
    grid_welcome: {
        marginTop: "16px"
    },
    txt_header: {
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
    txt_description: {
        color: '#464646',
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "17px",
        textAlign: "center"
    },
    grid_or: {
        height: "32px",
        marginBottom: "14px",
        textAlign: "center"
    },
    txt_or: {
        color: "#464646",
        marginTop: "8px",
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "17px",
        textAlign: "center"
    },
    margin_top_72: {
        marginTop: "72px"
    },
    txt_account: {
        marginRight: "10px",
        color: "#464646",
        fontSize: "11px",
        fontWeight: "bold",
        lineHeight: "14px",
        display: "inline"
    },
    grid_login: {
        width: "240px"
    },
    btn_login: {
        height: "32px",
        width: "100px",	
        borderRadius: "8px",
        backgroundColor: "#464646",
        '&:hover': {
            background: '#464646',
        }
    },
    txt_login: {
        color: "#DCDCDC",
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "17px",
        textAlign: "center"
    }
}));

const SocialLogin = props => {
    const {history} = props;
    
    const classes = useStyles();

    const [getHistory, setHistory] = useState(history);

    const handleClickLogin = () => {
        history.push('/login');
    }

    return(
        <Paper className={classes.content}>
            <ShapeIcon className={classes.shape} />
            
            <Grid container direction="column" alignItems="center" className={classes.margin_top}>
                <Grid container justify="center">
                    <WeThePeopleIcon />
                </Grid>
                <Grid container justify="center" className={classes.grid_welcome}>
                    <Typography className={classes.txt_header}>WELCOME</Typography>
                </Grid>
                <Grid container justify="center" className={classes.grid_discription}>
                    <Typography className={classes.txt_description}>
                        Tap on a network if you have an account with them, <br />
                        or tap “create account” to register with your email.
                    </Typography>
                </Grid>
                <ButtonGrid container justify="center">
                    <GoogleLoginButton history={getHistory} />
                </ButtonGrid>
                <ButtonGrid container justify="center">
                    <TwitterLoginButton />
                </ButtonGrid>
                <ButtonGrid container justify="center">
                    <FacebookLoginButton />
                </ButtonGrid>
                <Grid container justify="center" className={classes.grid_or}>
                    <Typography className={classes.txt_or}>or</Typography>
                </Grid>
                <ButtonGrid container justify="center">
                    <CreateAccountButton history={getHistory}/>
                </ButtonGrid>
                <Grid container justify="center" className={classes.margin_top_72} alignItems="center">
                    <Typography className= {classes.txt_account}>ALREADY HAVE AN ACCOUNT?</Typography>
                    <Button className={classes.btn_login} onClick={handleClickLogin}>
                        <Typography className={classes.txt_login}>LOG IN</Typography>
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default SocialLogin;