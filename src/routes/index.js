import { Suspense, lazy } from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'

import LoadingPage from '../pages/Loading'
import HybridRoute from './HybridRoute'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import { AdminLayout, UserLayout } from '~/layout'

const publicRoutes = [
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: lazy(() => import('../pages/Login')),
    // },
    {
        path: '/',
        name: 'home',
        component: lazy(() => import('../pages/Home')),
        layout: 'common',
    },
]

const hybridRoutes = []

const privateRoutes = [
    // {
    //     path: '/bookmark',
    //     name: 'bookmark',
    //     component: lazy(() => import('../pages/Bookmark')),
    //     layout: 'common',
    //     role: 'user',
    // },
    // {
    //     path: '/admin',
    //     name: 'dashboard',
    //     component: lazy(() => import('../pages/Admin/Dashboard')),
    //     layout: 'admin',
    //     role: 'admin',
    // },
]

const Routes = (
    <Suspense fallback={<LoadingPage />}>
        <Switch>
            {/* {publicRoutes.map(
                ({ layout, ...route }) => !layout && <PublicRoute key={route.name} exact={true} {...route} />
            )}
            {hybridRoutes.map(
                ({ layout, ...route }) => !layout && <HybridRoute key={route.name} exact={true} {...route} />
            )}
            {privateRoutes.map(
                ({ layout, ...route }) => !layout && <PrivateRoute key={route.name} exact={true} {...route} />
            )} */}
            <Route path="/admin">
                <AdminLayout>
                    <Suspense fallback={<LoadingPage />}>
                        <Switch>
                            {publicRoutes.map(
                                ({ layout, ...route }) =>
                                    layout === 'admin' && <PublicRoute key={route.name} exact={true} {...route} />
                            )}
                            {hybridRoutes.map(
                                ({ layout, ...route }) =>
                                    layout === 'admin' && <HybridRoute key={route.name} exact={true} {...route} />
                            )}
                            {privateRoutes.map(
                                ({ layout, ...route }) =>
                                    layout === 'admin' && <PrivateRoute key={route.name} exact={true} {...route} />
                            )}
                            <Redirect to="/admin" />
                        </Switch>
                    </Suspense>
                </AdminLayout>
            </Route>
            <Route>
                <UserLayout>
                    <Suspense fallback={<LoadingPage />}>
                        <Switch>
                            {publicRoutes.map(
                                ({ layout, ...route }) =>
                                    layout === 'common' && <PublicRoute key={route.name} exact={true} {...route} />
                            )}
                            {hybridRoutes.map(
                                ({ layout, ...route }) =>
                                    layout === 'common' && <HybridRoute key={route.name} exact={true} {...route} />
                            )}
                            {privateRoutes.map(
                                ({ layout, ...route }) =>
                                    layout === 'common' && <PrivateRoute key={route.name} exact={true} {...route} />
                            )}
                            <Redirect to="/" />
                        </Switch>
                    </Suspense>
                </UserLayout>
            </Route>
        </Switch>
    </Suspense>
)

export default Routes
