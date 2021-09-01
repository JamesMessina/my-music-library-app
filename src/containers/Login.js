import { connect } from 'react-redux'
import LoginPage from '../components/Login'
import { signInUser } from '../redux/actions/UserActions'

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const dispatchStateToProps = {
    signInUser,
};

export default connect(mapStateToProps, dispatchStateToProps)(LoginPage)

