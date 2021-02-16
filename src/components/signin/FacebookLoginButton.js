import {makeStyles, Grid} from '@material-ui/core';
import React, {useState} from 'react';
import {ReactComponent as FacebookIcon} from '../../static/images/ic_social_facebook.svg';
import ButtonType from './ButtonType';
import ButtonText from './ButtonText';

const useStyle = makeStyles(theme => ({
    
}));

const FacebookLoginButton = props => {
    const classes = useStyle();

    return(
        <React.Fragment>
            <ButtonType>
                <FacebookIcon />
                <Grid item xs={12}>
                    <ButtonText>CONTINUE WITH FACEBOOK</ButtonText>
                </Grid>
            </ButtonType>
        </React.Fragment>
    );
};

export default FacebookLoginButton;