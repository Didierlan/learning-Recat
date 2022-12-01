import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import NotFauntPage from './pages/404/NotFauntPage';
import LoginPage from './pages/auth/loginPage';
import DashBoardPage from './pages/dashboard/DashBoard';





function AppRoutingFinal() {

    let loggedIn = true;
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} >
                    {
                        loggedIn ?
                            (<Redirect from='/' to={'/dashboard'} />) : (<Redirect from='/' to={'/login'} />)

                    }

                </Route>

                <Route exact path={'/login'} component={LoginPage} />
                <Route exact path={'/dashboard'} >
                    {
                        loggedIn ?
                            (<DashBoardPage/>) : (<Redirect from='/' to={'/login'} />)

                    }

                </Route>


                <Route component={NotFauntPage}></Route>
            </Switch>
        </Router>


    )

}

export default AppRoutingFinal; 