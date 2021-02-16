import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, TextField, IconButton} from '@material-ui/core';

import {ReactComponent as CheckIcon} from '../../static/images/ic_check_mark.svg';
import {ReactComponent as DeleteIcon} from '../../static/images/ic_yellow_clear_button.svg';

const useStyles = makeStyles(theme => ({
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
    }
}));

const InputTextField = props => {
    const classes = useStyles();

    const [getText, setText] = useState('');

    const [checkValueStatus, setValueStatus] = useState(false);
    const [checkCorrectValue, setCorrectValue] = useState(false)
    
    const insertTextValue = (e) => {
        setText(e.target.value);
        setValueStatus(true);
        
        switch(props.type){
            case "name":
                if(e.target.value.match(/.+ .+/)){
                    setCorrectValue(true);
                    props.checkstate(true);
                } else {
                    setCorrectValue(false);
                    props.checkstate(false);
                }
                break;
            case "email":
                if(e.target.value.match(/.+@.+/)){
                    setCorrectValue(true);
                    props.checkstate(true);
                } else {
                    setCorrectValue(false);
                    props.checkstate(false);
                }
                break;
            case "password":
                if(e.target.value.length > 7){
                    setCorrectValue(true);
                    props.checkstate(true);
                } else {
                    setCorrectValue(false);
                    props.checkstate(false);
                }
                break;
            default:
                break;
        }
    }

    const handleClickDelete = () => {
        setText('');
        setValueStatus(false);
        setCorrectValue(false);
    };

    return (
        <React.Fragment>
            <Typography className={classes.star_style}>*</Typography>
            <TextField
                value={getText}
                label={props.label}
                placeholder={props.placeholder}
                type={props.inputtype}
                variant="outlined"
                size="small"
                InputLabelProps={{
                    shrink: true,
                    className:classes.textfield_border
                }}
                inputProps={{
                    className:classes.textfield_text
                }}
                onChange={insertTextValue}                
            />
            
            <IconButton size="small" className={classes.deleteicon} onClick={handleClickDelete}>
                <DeleteIcon className={checkValueStatus? classes.show_deleteicon: classes.hide_deleteicon} />
            </IconButton>
            <IconButton size="small">
                <CheckIcon className={checkCorrectValue? classes.show_checkicon: classes.hide_checkicon}/>
            </IconButton>

        </React.Fragment>
    );
}

export default InputTextField;