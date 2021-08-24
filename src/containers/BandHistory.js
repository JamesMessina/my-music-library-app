import { connect } from 'react-redux'
import BandHistory from '../components/BandHistory'
import { fetchHistories } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        histories: state.histories 
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchHistories : () => dispatch(fetchHistories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandHistory)