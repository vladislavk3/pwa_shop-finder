import {makeStyles, Typography, Grid} from '@material-ui/core';
import React, {useState} from 'react';
import {ReactComponent as AccountIcon} from '../../static/images/ic_social_account.svg';
import ButtonType from './ButtonType';
import ButtonText from './ButtonText';

const useStyle = makeStyles(theme => ({
    
}));

const CreateAccountButton = props => {
    const classes = useStyle();
    
    const handleClickEvent = () => {
       props.history.push('/signup');
    }

    return(
        <React.Fragment>
            <ButtonType onClick={handleClickEvent}>
                <AccountIcon />
                <Grid item xs={12}>
                    <ButtonText>CREATE ACCOUNT</ButtonText>
                </Grid>
            </ButtonType>
        </React.Fragment>
    );
};

export default CreateAccountButton;