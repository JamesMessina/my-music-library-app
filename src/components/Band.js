import React from 'react'
import { Container, Paper } from '@material-ui/core';

const Band = (props) =>{
    const id = props.match.params.history_id
    const band = props.bands.find(b => b.history_id == id)
    console.log(band)

    return (
        <Container component="section" maxWidth="lg">
            <Paper style={{textAlign: "center"}} variant="elevation" elevation={20}>
                <h1>{band.band_name}</h1>
                <img alt="band_pic" src={band.image} />
            </Paper>
        </Container>
    )
}

export default Band 