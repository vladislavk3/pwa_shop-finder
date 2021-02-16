import {Button, Grid, Paper, Typography, IconButton, TextField} from '@material-ui/core';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import React, {useState} from 'react';

import InputTextField from "./InputTextField";

import {ReactComponent as ShapeIcon} from '../../static/images/ic_combined.svg';
import {ReactComponent as WeThePeopleIcon} from '../../static/images/ic_withpeople.svg';
import {ReactComponent as BackIcon} from '../../static/images/ic_back.svg';
import {ReactComponent as WaitImg} from '../../static/images/img_wait.svg';

const useStyle = makeStyles(theme => ({
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
    margintop32: {
        marginTop: "32px"
    },
    disable_continue_button: {
        height: "32px",
        width: "100px",
        marginRight: "60px",
        borderRadius: "8px",
        backgroundColor: "#D39603",
        '&:hover': {
            background: '#D39603',
        },
    },
    enable_continue_button: {
        height: "32px",
        width: "100px",
        marginRight: "60px",
        borderRadius: "8px",
        backgroundColor: "#464646",
        '&:hover': {
            background: '#464646',
        },
    },
    disable_continue_text: {
        color: "#846210",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "17px",
        textAlign: "center"
    },
    enable_continue_text: {
        color: "#DCDCDC",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "17px",
        textAlign: "center"
    },
}));

const CreateAccount = props => {
    const {history} = props;
    
    const classes = useStyle();

    const [getNameState, setNameState] = useState(false);
    const [getEmailState, setEmailState] = useState(false);
    const [getPasswordState, setPasswordState] = useState(false);

    const handleClickBackButton = () => {
        history.replace('/signin');
    }

    const handleClickContiue = () => {
        if(!getNameState){

        }
        if(!getEmailState){

        }
        if(!getPasswordState){

            return;
        }
        history.push('/signupfinal');
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
                    <Typography className={classes.txt_header}>CREATE ACCOUNT</Typography>
                </Grid>
                <Grid container justify="center" className={classes.grid_discription}>
                    <Typography className={classes.txt_description}>
                        Please complete all fields.
                    </Typography>
                </Grid>
                <Grid container justify="center">
                    <InputTextField label="Full Name" placeholder="First & Last Name" inputtype="text" type="name" checkstate={setNameState}/>
                </Grid>
                <Grid container justify="center" className={classes.margintop32}>
                    <InputTextField label="Email" placeholder="Type your email" inputtype="email" type="email" checkstate={setEmailState}/>
                </Grid>
                <Grid container justify="center" className={classes.margintop32}>
                    <InputTextField label="Password" placeholder="8 characters & alphanumeric" inputtype="password" type="password" checkstate={setPasswordState}/>
                </Grid>
                <Grid container justify="flex-end" className={classes.margintop32}>
                    <Button onClick={handleClickContiue} className={getNameState & getEmailState & getPasswordState ? classes.enable_continue_button : classes.disable_continue_button}>
                        <Typography className={getNameState & getEmailState & getPasswordState ? classes.enable_continue_text : classes.disable_continue_text}>CONTINUE</Typography>
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default CreateAccount;