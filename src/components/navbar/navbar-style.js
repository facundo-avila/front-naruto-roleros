import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    buttonLink:{
      marginRight: '10px',
      '&:focus': {
        borderBottom: '3px solid red'
      }
    },
    navbar:{
        background: 'black'
    },
    title: {
      flexGrow: 1,
    },
  }));

  export default useStyles;