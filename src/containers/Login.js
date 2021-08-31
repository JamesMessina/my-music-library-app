import { connect } from 'react-redux'
import LoginPage from '../components/Login'
import { SignIn } from '../redux/actions/UserActions'

const mapDispatchToProps = (dispatch) => {
    return {
        SignIn : (user) => dispatch(SignIn(user))
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)

