import { React } from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography, 
    Button} from '@material-ui/core'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';


const Navigation = (props) => {


    const history = useHistory(); 

    function logout(){
        localStorage.removeItem("token");
        localStorage.removeItem("name"); 

        history.push("/"); 
    }

    return (
        <AppBar style={{fontFamily: "'Besley', serif", marginBottom: '10px'}} position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MusicNoteIcon fontSize="large" />
                </IconButton>
                <Typography variant="h6" style={{fontSize: "2em", flexGrow: "1" }}>
                    Music Catalog
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link style= {{fontFamily: "'Kaisei HarunoUmi', serif" }}to="/">Login</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link style= {{fontFamily: "'Kaisei HarunoUmi', serif" }} to="/home">Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link style= {{fontFamily: "'Kaisei HarunoUmi', serif" }} to="/import">Post Band</Link>
                    </li>
                    <li>
                        <Button style={{ backgroundColor: "transparent", fontSize: "16px", textTransform: 'none', fontFamily: "'Kaisei HarunoUmi', serif"}} color="inherit" onClick={logout}>Logout</Button>
                    </li>
                    
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation