import {Grid} from '@material-ui/core';
import {React} from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';

const ButtonGrid = withStyles({
    root: {
        marginBottom: "14px",
    }
})(Grid);

export default ButtonGrid;