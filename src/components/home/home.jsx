import React from 'react'
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import useStyles from './home-style'
import Typography from '@material-ui/core/Typography'

import Content from './content';

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.gridHome}>
                    <Typography variant="h2" color="initial">INICIO FORO</Typography>
                </Grid>

                <Grid item xs={12} className={classes.gridEnvolve}>
                    <Content
                        imgPostion='left'
                        img={
                            <Typography variant="h6" color="initial">INSERT IMAGE</Typography>
                        }
                        text={
                            <div className={classes.gridFormat}>
                                <Typography variant="body1" color="initial">
                                    Bienvenido al foro renovado de Naruto Roleros. Disfruta de una experiencia mas modernas y
                                    aventuras con mayor fluidez. Compite contra otros ninjas por ser el mas poderoso,
                                    el mas sabio o el mas creativo.
                                </Typography>

                                <Button variant="contained" color="primary" component={Link} to="/singin">
                                    ¡Ingresa ahora!
                                </Button>
                            </div>
                        }
                    />
                </Grid>

                <Grid item xs={12} className={classes.gridNews1}>
                    <Content imgPostion='rigth' img={
                        <Typography variant="h6" color="initial">INSERT IMAGE</Typography>
                    }
                        text={
                            <div className={classes.gridFormat}>
                                <Typography variant="body1" color="initial">Noticias de actualización, el foro se está armando poco a poco!</Typography>

                            </div>
                        }
                    />
                </Grid>

                <Grid item xs={12} className={classes.gridNews2}>
                    <Content imgPostion='left' img={
                        <Typography variant="h6" color="initial">INSERT IMAGE</Typography>
                    }
                        text={
                            <div className={classes.gridFormat}>
                                <Typography variant="body1" color="initial">Vea los tutoriales para saber como jugar!</Typography>

                            </div>
                        }
                    />
                </Grid>

            </Grid>

        </div>
    );
}

export default Home;