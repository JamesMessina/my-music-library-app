import React from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { Link } from 'react-router-dom'


const Navigation = () => {
    return (
        <AppBar style={{marginBottom: '10px'}} position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MusicNoteIcon fontSize="large" />
                </IconButton>
                <Typography variant="h6" style={{ fontFamily: 'Roboto', fontStyle: "italic", fontSize: "2em", flexGrow: "1" }}>
                    Music Catalog
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/dashboard">Post Band</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/import">Post Album</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation