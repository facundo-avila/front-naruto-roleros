import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    navbar:{
        background: 'black'
    },
    title: {
      flexGrow: 1,
    },
  }));

  export default useStyles;