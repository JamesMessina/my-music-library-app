import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useHistory } from 'react-router-dom'; 

const useStyles = makeStyles({
    root: {
      margin: "0 auto",
      width: 400,
    },
    title: {
      marginBottom: 16,
      textAlign: "center"
    },
    textField: {
      display: "block",
      marginBottom: 20,
    },
    button: {
      marginRight: 20,
    },
});


function SignUpPage(props){
    const classes = useStyles(); 
    const history = useHistory(); 

    const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
    const [isClicked, setClick] = useState(false); 

    function handleInputChanges(event) {
      const { name, value } = event.target;
    
      setNewUser((previousNewUser) => ({
        ...previousNewUser,
        [name]: value,
      }));
    }

    function returnToLogin(){
      if(isClicked === false){
        setClick(true); 
        history.push("/")
      }else{
        setClick(false); 
      }
    }

    function handleFormSubmit(event) {
      event.preventDefault();
      console.log(newUser);
    }

    return (
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} variant="h4">
              Create New Account
            </Typography>
            <form onSubmit={handleFormSubmit}>
              <TextField
                required
                className={classes.textField}
                fullWidth
                name="name"
                label="Name"
                variant="outlined"
                value={newUser.name}
                onChange={handleInputChanges}
              />
              <TextField
                required
                className={classes.textField}
                fullWidth
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                value={newUser.email}
                onChange={handleInputChanges}
              />
              <TextField
                required
                className={classes.textField}
                fullWidth
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                value={newUser.password}
                onChange={handleInputChanges}
              />
              <div>
                <Button
                  type="submit"
                  className={classes.button}
                  variant="contained"
                  color="primary"
                >
                  Sign up
                </Button>
                <Button onClick={returnToLogin} variant="outlined" color="primary">
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      );
}

export default SignUpPage