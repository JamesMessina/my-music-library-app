import { connect } from 'react-redux'
import AuthRoute from '../components/AuthRoute'

const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}

export default connect(mapStateToProps, null)(AuthRoute)