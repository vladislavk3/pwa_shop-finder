import {Button, Grid, Paper, Typography, IconButton, TextField} from '@material-ui/core';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import React, {useState} from 'react';

import {ReactComponent as ShapeIcon} from '../../static/images/ic_combined.svg';
import {ReactComponent as WeThePeopleIcon} from '../../static/images/ic_withpeople.svg';
import {ReactComponent as BackIcon} from '../../static/images/ic_back.svg';
import {ReactComponent as CheckIcon} from '../../static/images/ic_check_mark.svg';
import {ReactComponent as DeleteIcon} from '../../static/images/ic_yellow_clear_button.svg';

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
    star_style: {
        fontSize: "25px",
        fontWeight: "bold",
        marginRight: "10px",
        marginTop: "5px"
    },
    show_checkicon: {
        width: '24px',
        height: '24px',
        marginLeft: "10px",
        visibility: "visible"
    },
    hide_checkicon: {
        width: '24px',
        height: '24px',
        marginLeft: "10px",
        visibility: "hidden"
    },
    deleteicon: {
        marginLeft: "-35px",
    },
    textfield_border: {
        '&:focus': {
          borderColor: '#464646',
        },
    },
    textfield_text: {
        color: "#464646",
        marginRight: "30px",
        
    },
    show_deleteicon:{
        visibility: 'visible'
    },
    hide_deleteicon:{
        visibility: 'hidden'
    },
    grid_field: {
        marginLeft: "14px",
        marginRight: "14px",
        marginBottom: "32px"
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

const Login = props => {
    const {history} = props;
    
    const classes = useStyle();

    const [getEmailValue, setEmailValue] = useState("");
    const [checkEmailState, setEmailState] = useState(false);
    const [checkEmailCorrect, setEmailCorrect] = useState(false);

    const [getPasswordValue, setPasswordValue] = useState("");
    const [checkPasswordState, setPasswordState] = useState(false);
    const [checkPasswordCorrect, setPasswordCorrect] = useState(false);

    const handleClickBackButton = () => {
        history.replace('/signin');
    }
    
    const handleChangeEmail = (e) => {
        setEmailValue(e.target.value);
        setEmailState(true);
        if(e.target.value.match(/.+@.+/)){
            setEmailCorrect(true);
        } else {
            setEmailCorrect(false);
        }
    }

    const handleChangePassword = (e) => {
        setPasswordValue(e.target.value);
        setPasswordState(true);
        if(e.target.value.length > 7){
            setPasswordCorrect(true);
        } else {
            setPasswordCorrect(false);
        }
    }

    const handleClickDelEmail = () => {
        setEmailValue("");
        setEmailState(false);
        setEmailCorrect(false);
    }

    const handleClickDelPassword = () => {
        setPasswordValue("");
        setPasswordState(false);
        setPasswordCorrect(false);
    }

    const handleClickLogin = () => {

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
                    <Typography className={classes.txt_header}>LOG IN</Typography>
                </Grid>
                <Grid container justify="center" className={classes.grid_discription}>
                    <Typography className={classes.txt_description}>
                    </Typography>
                </Grid>
                <Grid container justify="center" className={classes.grid_field}>
                    <Typography className={classes.star_style}>*</Typography>
                    <TextField
                        value={getEmailValue}
                        label="Email Address"
                        placeholder="Your registered email address"
                        type="text"
                        variant="outlined"
                        size="small"
                        InputLabelProps={{
                            shrink: true,
                            className:classes.textfield_border
                        }}
                        inputProps={{
                            className:classes.textfield_text
                        }}
                        onChange={handleChangeEmail}
                    />
                    
                    <IconButton size="small" className={classes.deleteicon} onClick={handleClickDelEmail}>
                        <DeleteIcon className={checkEmailState? classes.show_deleteicon: classes.hide_deleteicon} />
                    </IconButton>
                    <IconButton size="small">
                        <CheckIcon className={checkEmailCorrect? classes.show_checkicon: classes.hide_checkicon}/>
                    </IconButton>
                </Grid>
                <Grid container justify="center" className={classes.grid_field}>
                    <Typography className={classes.star_style}>*</Typography>
                    <TextField
                        value={getPasswordValue}
                        label="Password"
                        placeholder="Type your password"
                        type="password"
                        variant="outlined"
                        size="small"
                        InputLabelProps={{
                            shrink: true,
                            className:classes.textfield_border
                        }}
                        inputProps={{
                            className:classes.textfield_text
                        }}
                        onChange={handleChangePassword}
                    />
                    
                    <IconButton size="small" className={classes.deleteicon} onClick={handleClickDelPassword}>
                        <DeleteIcon className={checkPasswordState? classes.show_deleteicon: classes.hide_deleteicon} />
                    </IconButton>
                    <IconButton size="small">
                        <CheckIcon className={checkPasswordCorrect? classes.show_checkicon: classes.hide_checkicon}/>
                    </IconButton>
                </Grid>
                <Grid container justify="flex-end" className={classes.grid_field}>
                    <Button onClick={handleClickLogin} className={checkEmailCorrect & checkPasswordCorrect ? classes.enable_continue_button : classes.disable_continue_button}>
                        <Typography className={checkEmailCorrect & checkPasswordCorrect ? classes.enable_continue_text : classes.disable_continue_text}>CONTINUE</Typography>
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Login;