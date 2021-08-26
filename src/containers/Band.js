import { connect } from 'react-redux'
import Band from '../components/Band'
import { fetchHistories } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        bands: state.bands,
        histories: state.histories
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchHistories : () => dispatch(fetchHistories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Band)