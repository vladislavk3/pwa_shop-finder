import {Typography} from '@material-ui/core';
import {React} from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';

const ButtonText = withStyles({
    root: {
        color: "#EDB730",
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "17px",
        textAlign: "center"
    }
})(Typography);

export default ButtonText;