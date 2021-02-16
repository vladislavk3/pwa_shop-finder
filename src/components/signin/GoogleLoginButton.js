import {makeStyles, Grid} from '@material-ui/core';
import React, {useState} from 'react';
import {ReactComponent as GoogleIcon} from '../../static/images/ic_social_google.svg';
import ButtonType from './ButtonType';
import ButtonText from './ButtonText';

const useStyle = makeStyles(theme => ({
    
}));

const GoogleLoginButton = props => {
    const classes = useStyle();

    const handleClickEvent = () => {
        props.history.push('/googlesign');
     }

    return(
        <React.Fragment>
            <ButtonType onClick={handleClickEvent} >
                <GoogleIcon />
                <Grid item xs={12}>
                    <ButtonText>CONTINUE with Google</ButtonText>
                </Grid>
            </ButtonType>
        </React.Fragment>
    );
};

export default GoogleLoginButton;