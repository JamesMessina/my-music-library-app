import { connect } from 'react-redux'
import LoginPage from '../components/Login'
import { signInUser } from '../redux/actions/UserActions'

const mapDispatchToProps = (dispatch) => {
    return {
        signInUser : (user) => dispatch(signInUser(user))
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)

