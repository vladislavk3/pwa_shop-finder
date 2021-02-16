import {makeStyles, Grid} from '@material-ui/core';
import React, {useState} from 'react';
import {ReactComponent as TwitterIcon} from '../../static/images/ic_social_twitter.svg';
import ButtonType from './ButtonType';
import ButtonText from './ButtonText';

const useStyle = makeStyles(theme => ({
    
}));

const GoogleLoginButton = props => {
    const classes = useStyle();

    return(
        <React.Fragment>
            <ButtonType>
                <TwitterIcon />
                <Grid item xs={12}>
                    <ButtonText>CONTINUE WITH TWITTER</ButtonText>
                </Grid>
            </ButtonType>
        </React.Fragment>
    );
};

export default GoogleLoginButton;