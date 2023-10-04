import { Redirect, Route } from 'react-router-dom'

import { useAppSelector } from '~/hooks/redux-hooks'

const PublicRoute = (props) => {
    const auth = useAppSelector((state) => state.auth)

    if (!auth.email) {
        return <Route {...props} />
    }

    return <Redirect to="/" />
}

export default PublicRoute
