import { connect } from 'react-redux'
import Band from '../components/Band'

const mapStateToProps = (state) => {
    return {
        bands: state.bands 
    }
}

export default connect(mapStateToProps)(Band)