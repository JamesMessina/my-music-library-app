import { React, useState } from "react"; 
import {TextField, Paper, Container, Button} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'; 


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(4),
        
    },
  },

  loginMessage: {
    textAlign: "center"
  },

  form: {
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  button:{
    marginLeft: "70px",
    marginBottom: "10px"
  },

  newuserlink:{
    marginBottom: "20px",
    textAlign: "center",
    color: "#3E73E0"
  }

}));

export default function LoginPage(props) {
  const classes = useStyles(); 

  const [user, setUser] = useState({ email: "", password: "" });


  function handleInputChanges(event){
    const { name, value } = event.target

    setUser((previoususer) => ({
      ...previoususer, 
      [name] : value,
    }))
  }

  function handleFormSubmit(event) {
    event.preventDefault(); 
    console.log(user);
    props.signInUser(user)
      .then(props.history.push('/home'))
  }
  


  return (
    <div className={classes.root}>
        <Container style={{marginTop: "30px"}} maxWidth="xs">
            <Paper elevation={20}>
                <div className={classes.form}>
                    <form onSubmit={handleFormSubmit}>
                        <TextField label="Email" name="email" type="email" value={user.email} onChange={handleInputChanges} required /><br/>
                        <TextField
                            style={{marginTop: "10px"}}
                            label="Password"
                            name="password"
                            required
                            value={user.password}
                            onChange={handleInputChanges}
                            type="password"
                        />
                        <div>
                            <Button className={classes.button} type="submit" variant="contained" color="primary">
                                Sign In 
                            </Button>
                        </div>
                        <p className={classes.newuserlink}><Link to="">Not a member? Click here</Link></p>
                    </form> 
                </div>
            </Paper>
        </Container>
    </div>
  );
}

