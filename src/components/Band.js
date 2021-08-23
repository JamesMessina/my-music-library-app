import React from 'react'
import { Container, Paper } from '@material-ui/core';

const Band = (props) =>{
    const id = props.match.params.history_id
    const band = props.bands.find(b => b.history_id == id)
    console.log(band)

    return (
        <Container component="section" maxWidth="lg">
            <Paper variant="elevation" elevation="10">
                <h1 style={{textAlign: "center"}}>{band.band_name}</h1>
            </Paper>
        </Container>
    )
}

export default Band 