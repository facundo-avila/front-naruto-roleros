import React from 'react'
import Grid from '@material-ui/core/Grid';

import useStyles from './home-style'
import Typography from '@material-ui/core/Typography'

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.gridHome}>
                    <Typography variant="h2" color="initial">INICIO FORO</Typography>
                </Grid>

                <Grid item xs={12} className={classes.gridEnvolve}>
                    <Typography variant="h6" color="initial">COMO ENTRAR</Typography>
                </Grid>
                <Grid item xs={12} className={classes.gridNews1}>
                    <Typography variant="h6" color="initial">NOVEDADES 1</Typography>
                </Grid>
                <Grid item xs={12} className={classes.gridNews2}>
                    <Typography variant="h6" color="initial">NOVEDADES 2</Typography>
                </Grid>
            </Grid>

        </div>
    );
}

export default Home;