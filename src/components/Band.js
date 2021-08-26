import React, { useEffect } from 'react'
import { Container, Paper, Typography, makeStyles } from '@material-ui/core';
import '@fontsource/roboto';

const Band = (props) =>{

    const id = props.match.params.history_id
    const band = props.bands.find(b => b.history_id == id)
    console.log(band)

    const useStyles = makeStyles((theme) => ({
        root: {
          ...theme.typography.button,
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(1),
          fontFamily: "'Yanone Kaffeesatz', sans-serif",
          fontSize: "1em"
        },

        title: {
            fontFamily: "'Rampart One', cursive",
            fontSize: "1.5em"
        },

        image: {
            maxHeight: "500px"
        }
    }));

    const classes = useStyles();

    useEffect(() => {
        if(props.histories.length === 0) {
            props.fetchHistories();
        }
    }); 

    return (
        <Container component="section" maxWidth="lg">
            <Paper className={classes.title} style={{textAlign: "center"}} variant="elevation" elevation={20}>
                <h1>{band.band_name}</h1>
                <img alt="band_pic" src={band.image} className={classes.image} />
                {props.histories.map((h, idx) => {
                    if(h.id == id){
                        return (
                            <Typography className= {classes.root} gutterBottom={true} align="center" color="primary" key={idx}>{h.bio}</Typography>
                        )
                    }
                })}
            </Paper>
        </Container>
    )
}

export default Band 