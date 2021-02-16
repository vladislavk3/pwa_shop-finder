import {createMuiTheme} from '@material-ui/core/styles';

export default createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: 40,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 40,
      },
      '@media (min-width:600px)': {
        minHeight: 40,
      },
    },
  },
  mainPaper: {
    borderRadius: '8px',
    backgroundColor: '#FAFAFA',
    boxShadow: '0 0 4px 0 rgba(0,0,0,0.2)',
    margin: '8px',
    height: 'calc(100vh - 70px)',
    overflowY: 'scroll',
    position: 'relative',
  },
  bottomBar: {
    height: '56px',
  },
  typography: {
    //not working it must be Acumin Pro Condensed
    fontFamily: ['acumin-pro-condensed'].join(','),
    h1: {
      fontFamily: ['acumin-pro-condensed'].join(','),
    },
    h2: {
      fontFamily: ['acumin-pro-condensed'].join(','),
    },
    h3: {
      fontFamily: ['acumin-pro-condensed'].join(','),
    },
    h4: {
      fontFamily: ['acumin-pro-condensed'].join(','),
    },
    h5: {
      fontFamily: ['acumin-pro-condensed'].join(','),
    },
    h6: {
      fontFamily: ['acumin-pro-condensed'].join(','),
    },
    subtitle1: {
      fontFamily: ['acumin-pro-condensed'].join(','),
    },
    subtitle2: {
      fontFamily: ['acumin-pro-condensed'].join(','),
    },
    body1: {
      fontFamily: ['acumin-pro-condensed'].join(','),
    },
    body2: {
      fontFamily: ['acumin-pro-semi-condensed'].join(','),
    },
    button: {
      fontFamily: ['acumin-pro-condensed'].join(','),
    },
    caption: {
      fontFamily: ['acumin-pro-condensed'].join(','),
    },
    overline: {
      fontFamily: ['acumin-pro-condensed'].join(','),
    },
  },
  w100: {
    width: '100%',
  },
  h100: {
    height: '100%',
  },
  wh100: {
    width: '100%',
    height: '100%',
  },
  overrides: {
    'Mui-selected': {
      color: '#FFB400 !important',
      fontSize: '14px',
      fontWeight: 'bold',
      lineHeight: '17px',
    },
    'MuiButtonBase-root': {
      color: '#969696',
      fontSize: '13px',
      lineHeight: '16px',
    },
    //Default app styles for buttons, this is realy useful for us
    MuiButton: {
      root: {
        color: '#828282',
      },
      containedPrimary: {
        width: '165px',
        backgroundColor: '#EDB730',
        color: '#FFFFFF',
        '&$disabled': {
          backgroundColor: '#D7D7D7',
          color: 'rgba(0, 0, 0, 0.26)',
        },
        '&:hover': {
          backgroundColor: '#EDB730',
        },
        disabled: {},
      },
    },
  },
});
