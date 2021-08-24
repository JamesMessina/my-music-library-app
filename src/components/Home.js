import React, { Component } from 'react'
import { Card, Button, TextField, CardHeader, CardContent, CardActions, Container, Divider } from '@material-ui/core';
import AlbumSharpIcon from '@material-ui/icons/AlbumSharp';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          bandName: "",
          isClicked: false
        }
    }

    componentDidMount() {
        this.props.fetchBands()
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClear = () =>{
        this.setState({bandName: ""}); 
        this.setState({isClicked: false})
    }

    handleClick = () =>{
        if(this.state.isClicked){
          this.setState({isClicked: false}); 
        }else{
          this.setState({isClicked: true}); 
        }
    }
    

    render(){
        return(
            <div>
                <form className="band-search-form" noValidate autoComplete="off">
                    <TextField margin="normal" name="bandName" value={this.state.bandName} onChange={this.handleChange} type="text" color= "primary" id="standard-basic"  placeholder="band name" />
                    <Button onClick={this.handleClick} style={{marginTop: "20px", marginLeft: "30px"}} size="small" variant="contained" color="primary">Search</Button>
                    <Button onClick={this.handleClear} style={{marginTop: "20px", marginLeft: "30px"}} size="small" variant="contained" color="primary">Clear</Button>
                </form>
                {
                !this.state.isClicked ?
                <Container style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}} maxWidth="xl">
                    {this.props.bands.map((band, idx) => {
                        return (
                            <Card raised={true} className="card-container"  variant="outlined" key={idx}>
                                <CardContent>
                                    <CardHeader avatar={<AlbumSharpIcon/>} title={band.band_name} subheader={band.yearsActive} />
                                    <p>origin: {band.origin}</p>
                                </CardContent>
                                <Divider />
                                <CardActions style={{color: 'mediumblue'}}>
                                    <Link to={`/band/${band.history_id}`}>See Band History</Link>
                                </CardActions>
                            </Card>
                        )
                    })}
                </Container> :
                <div>
                    {this.props.bands.filter(band => band.band_name.toLowerCase() === this.state.bandName).map((filteredBand, idx) => (
                        <Card raised={true} className="card-container"  variant="outlined" key={idx}>
                            <CardContent>
                                <CardHeader avatar={<AlbumSharpIcon/>} title={filteredBand.band_name} subheader={filteredBand.yearsActive} />
                                <p>origin: {filteredBand.origin}</p>
                            </CardContent>
                            <Divider />
                            <CardActions style={{color: 'mediumblue'}}>
                                <Link to={`/band/${filteredBand.history_id}`}>See Band History</Link>
                            </CardActions>
                        </Card>
                    ))}
                </div>
                }
            </div>
        )
    }
}


export default Home 

