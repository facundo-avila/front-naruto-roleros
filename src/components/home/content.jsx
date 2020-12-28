import React from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

const Content = (props) => {
    const imagePosition = props.imgPostion;
    console.log(imagePosition)
    if(imagePosition === 'left'){
        return (
            <Grid container>
                <Grid item xs={6}>
                    {props.img}
                </Grid>
                <Grid item xs={6}>
                    {props.text}
                </Grid>
            </Grid>
        )
    }else{
        return (
            <Grid container>
                <Grid item xs={6}>
                    {props.text}
                </Grid>
                <Grid item xs={6}>
                    {props.img}
                </Grid>
            </Grid>
        )
    }
    
}

export default Content;