import { Redirect, Route } from 'react-router-dom'

import { useAppSelector } from '~/hooks/redux-hooks'

const PrivateRoute = (props) => {
    const { role, ...rest } = props
    const auth = useAppSelector((state) => state.auth)

    if (!auth.email) {
        return <Redirect to="/" />
    }

    if (role == 'admin') {
        if (auth.role !== 'admin') {
            return <Redirect to="/" />
        }
    } else if (role == 'user') {
        if (auth.role === 'admin') {
            return <Redirect to="/admin" />
        }
    }

    return <Route {...rest} />
}

export default PrivateRoute
