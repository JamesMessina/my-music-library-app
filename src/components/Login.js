import React from 'react';
import {TextField, Paper, Container, Button} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(4),
    },
  },
  form: {
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  buttoncontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  button:{
      marginLeft: "70px",
      marginBottom: "10px"
  }

}));

function LoginPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container style={{marginTop: "30px"}} maxWidth="xs">
            <Paper elevation={20}>
                <div className={classes.form}>
                    <form noValidate autoComplete="off">

                        <TextField label="username" required id="standard-required" /><br/>
                        <TextField
                            label="password"
                            required={true}
                            id="standard-password-input"
                            type="password"
                        />
                        <div>
                            <Button className={classes.button} type="submit" variant="contained" color="primary">
                                Sign In 
                            </Button>
                        </div>
                    </form>
                </div>
            </Paper>
        </Container>
    </div>
  );
}

export default LoginPage