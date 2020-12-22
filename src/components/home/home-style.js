import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '20px',
    },
    gridHome:{
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    gridEnvolve:{
        background: '#ff9800',
        textAlign: 'left',
        color: theme.palette.text.secondary,
        height: '300px'
    },
    gridNews1:{
        background: '#ffb74d',
        textAlign: 'right',
        color: theme.palette.text.secondary,
        height: '300px',
    },
    gridNews2: {
        background: '#ffd180',
        textAlign: 'left',
        color: theme.palette.text.secondary,
        height: '300px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    divider: {
        margin: theme.spacing(2, 0),
      },
}));

export default useStyles;