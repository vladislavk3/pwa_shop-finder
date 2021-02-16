import {Button} from '@material-ui/core';
import {React} from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';

const ButtonType = withStyles({
    root: {
        width: '280px',
        height: '32px',
        borderRadius: '8px',
        background: '#464646',
        paddingLeft: "20px",
        paddingRight: "20px",
        justifyContent: "left",
        '&:hover': {
          background: '#464646',
        },
      },
})(Button);

export default ButtonType;