import {Button, Grid, Paper, Typography, IconButton, TextField} from '@material-ui/core';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import React, {useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import CustomCheckBox from "./CustomCheckBox";
import UserService from "./../services/UserService";

import {ReactComponent as ShapeIcon} from '../../static/images/ic_combined.svg';
import {ReactComponent as WeThePeopleIcon} from '../../static/images/ic_withpeople.svg';
import {ReactComponent as BackIcon} from '../../static/images/ic_back.svg';
import {ReactComponent as ReCaptchaIcon} from "../../static/images/ic_recaptcha.svg";

const site_key = '6Leo-MoUAAAAAHX7O7kjUw972TApNgigGvgrpTlP';

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
        marginTop: "5px"
    },
    hide_star_style: {
        fontSize: "25px",
        fontWeight: "bold",
        marginTop: "5px",
        visibility: "hidden"
    },
    text_style: {
        marginLeft: "8px",
        color: "#464646",
        fontSize: "12px",
        fontWeight: 600,
        lineHeight: "16px"
    },
    margin_left_44: {
        marginLeft: "44px"
    },
    recaputre_style: {
        width: "28px",
        height: "28px",
        marginLeft: "2px"
    },
    recaptcha_style: {
        width: "250px",
        height: "250px"
    },
    disable_finish_txt: {
        color: "#846210",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "17px",
        textAlign: "center"
    },
    disable_finish_icon: {
        height: "32px",
        width: "100px",
        borderRadius: "8px",
        backgroundColor: "#D39603",
        "&:hover": {
            backgroundColor: "#D39603"
        }
    },
    enable_finish_txt: {
        color: "#DCDCDC",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "17px",
        textAlign: "center"
    },
    enable_finish_icon: {
        height: "32px",
        width: "100px",
        borderRadius: "8px",
        backgroundColor: "#464646",
        "&:hover": {
            backgroundColor: "#464646"
        }
    },
}));

const recaptchaRef = React.createRef();

const CreateAccountFinal = props => {
    const classes = useStyle();

    const [getTermAgree, setTermAgree] = React.useState(false);
    const [getAllNews, setAllNews] = React.useState(false);
    const [checkRobot, setCheckRobot] = React.useState(false);
    const [captcharValue, setCaptcharValue] = React.useState('');
    const {history, location} = props;

    const handleClickBackButton = () => {
        history.replace('/signup');
    }

    const handleClickFinish = () => {

    }

    const handleClickTerm = () => {
        setTermAgree(!getTermAgree);
    }

    const handleClickNews = () => {
        setAllNews(!getAllNews);
    }

    function onChange(value) {
        console.log('Captcha value: ' + value);
        if (value === null) {
          recaptchaRef.current.execute();
        } else {
          setCheckRobot(true);
          setCaptcharValue(value);
        }
    }

    const handleClickCaptchar = event => {
        recaptchaRef.current.execute();
    };

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
                    <Typography className={classes.txt_header}>FINAL STEP</Typography>
                </Grid>
                <Grid container justify="center" className={classes.grid_discription}>
                    <Typography className={classes.txt_description}>
                    Tap on the checkboxes with an asterisk <br />
                    to create your account.
                    </Typography>
                </Grid>
                <Grid container justify="flex-start" alignItems="center" className={classes.margin_left_44}>
                    <Typography className={classes.star_style}>
                        *
                    </Typography>
                    <CustomCheckBox onClick={handleClickTerm} />
                    <Typography className={classes.text_style}>By signing up, I agree to ALL’s Terms of Use.</Typography>
                </Grid>
                <Grid container justify="flex-start" alignItems="center" className={classes.margin_left_44}>
                    <Typography className={classes.hide_star_style}>
                        *
                    </Typography>
                    <CustomCheckBox onClick={handleClickNews} />
                    <Typography className={classes.text_style}>I agree to receive ALL’s newsletters.</Typography>
                </Grid>
                <Grid container justify="flex-start" alignItems="center" className={classes.margin_left_44}>
                    <Typography className={classes.star_style}>
                        *
                    </Typography>
                    <CustomCheckBox checked={checkRobot}/>
                    <Typography className={classes.text_style}>I’m not a robot.</Typography>
                    <IconButton size="small" onClick={handleClickCaptchar}>
                        <ReCaptchaIcon className={classes.recaputre_style}/>
                    </IconButton>
                </Grid>
                <Grid container justify="center" className={classes.recaptcha_style}>
                    {/* <ReCaptchaDialog /> */}
                </Grid>
                <Grid container justify="center">
                    <Button onClick={handleClickFinish} className={getTermAgree & checkRobot ? classes.enable_finish_icon : classes.disable_finish_icon}>
                        <Typography className={getTermAgree & checkRobot ? classes.enable_finish_txt : classes.disable_finish_txt}>FINISH</Typography>
                    </Button>
                </Grid>
                <ReCAPTCHA
                    sitekey={site_key}
                    onChange={onChange}
                    ref={recaptchaRef}
                    size={'invisible'}
                    style={{visibility: 'hidden'}}
                />
            </Grid>
        </Paper>
    );
}

export default CreateAccountFinal;