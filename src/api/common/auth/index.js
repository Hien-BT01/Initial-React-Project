import jwt_decode from 'jwt-decode'
import { useHistory } from 'react-router-dom'

import { login, logout } from '~/features/auth'
import { useAppDispatch } from '~/hooks/redux-hooks'
import { post } from '~/utils/ApiCaller'
import LocalStorageUtils from '~/utils/LocalStorageUtils'

const useAuth = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()

    const loginHandler = (info) => {
        return post({
            endpoint: '/account/login',
            body: info,
        })
    }

    const logoutHandler = () => {
        LocalStorageUtils.deleteUser()
        dispatch(logout())
        history.push('/login')
    }

    const autoLoginHandler = () => {
        const token = LocalStorageUtils.getToken()
        const user = LocalStorageUtils.getUser()

        if (user && typeof user === 'object') {
            if (user?.exp && user?.exp * 1000 > Date.now()) {
                const { name, email, exp, userId, role } = jwt_decode(token)
                dispatch(
                    login({
                        email,
                        exp,
                        name,
                        userId,
                        role,
                        token,
                    })
                )
            } else {
                dispatch(logout())
            }
        } else {
            dispatch(logout())
        }
    }

    return { loginHandler, logoutHandler, autoLoginHandler }
}

export default useAuth
