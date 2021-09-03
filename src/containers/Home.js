import { connect } from 'react-redux'
import Home from '../components/Home'
import { fetchBands } from '../redux/actions/bandActions'

const mapStateToProps = (state) => {
    return {
        bands: state.bands, 
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchBands : () => dispatch(fetchBands())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)