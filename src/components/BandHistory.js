import React, { Component } from 'react'

class BandHistory extends Component {
    
    

    componentDidMount() {
        this.props.fetchHistories()
    }

    render(){
        return (
            <div>
                {this.props.histories.map((h, idx) => {
                    return (
                        <div key={idx}>
                            <h1>{h.bio}</h1>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default BandHistory 

