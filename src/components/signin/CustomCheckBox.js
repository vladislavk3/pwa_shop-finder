import React from 'react';
import clsx from 'clsx';
import {Checkbox} from '@material-ui/core';
import {makeStyles, withStyles} from '@material-ui/core/styles';

import {ReactComponent as Check} from "../../static/icons/ic_checkbox_check.svg"

const CustomCheckBox = withStyles({
    root: {
        width: "32px",
        height: "32px",
        color: "#D39603",
        padding: "0px",
        '&.Mui-checked': {
            color: '#ffffff',
        },
        '& .MuiSvgIcon-root': {
            width: '32px',
            height: '32px',
        },
    },
})(Checkbox);

export default CustomCheckBox;