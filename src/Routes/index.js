import React from 'react';
import { Switch, Route } from "react-router-dom";

//Layouts
import NonAuthLayout from "../Layouts/NonAuthLayout";
import VerticalLayout from "../Layouts/index";
//routes
import { authProtectedRoutes, publicRoutes, moderatorRoutes } from "./allRoutes";
import { AuthProtected, AccessRoute } from './AuthProtected';
import UserProtectedRoutes from './UserProtectedRoutes';
import ModeratorProtectedRoutes from './ModeratorProtectedRoutes';

const Index = () => {
    const availablePublicRoutesPaths = publicRoutes.map((r) => r.path);
    const availableAuthRoutesPath = authProtectedRoutes.map((r) => r.path);
    const availableModeratorRoutesPath = moderatorRoutes.map((r) => r.path);
    return (
        <React.Fragment>
            <Switch>
                <Route path={availablePublicRoutesPaths}>
                    <NonAuthLayout>
                        <Switch>
                            {publicRoutes.map((route, idx) => (
                                <Route
                                    path={route.path}
                                    component={route.component}
                                    key={idx}
                                    exact={true}
                                />
                            ))}
                        </Switch>
                    </NonAuthLayout>
                </Route>

                <Route path={availableModeratorRoutesPath}>
                    <ModeratorProtectedRoutes>
                        <VerticalLayout>
                            <Switch>
                                {moderatorRoutes.map((route, idx) => (
                                    <AccessRoute
                                        path={route.path}
                                        component={route.component}
                                        key={idx}
                                        exact={true}
                                    />
                                ))}
                            </Switch>
                        </VerticalLayout>
                    </ModeratorProtectedRoutes>
                </Route>

                <Route path={availableAuthRoutesPath}>
                    <UserProtectedRoutes>
                        <VerticalLayout>
                            <Switch>
                                {authProtectedRoutes.map((route, idx) => (
                                    <AccessRoute
                                        path={route.path}
                                        component={route.component}
                                        key={idx}
                                        exact={true}
                                    />
                                ))}
                            </Switch>
                        </VerticalLayout>
                    </UserProtectedRoutes>
                </Route>
            </Switch>
        </React.Fragment>
    );
};

export default Index;
