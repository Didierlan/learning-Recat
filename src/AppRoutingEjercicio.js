import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import RegisterFormik from './components/pure/forms/registerFormik';
import NotFauntPage from './pages/404/NotFauntPage';
import LoginPage from './pages/auth/loginPage';
import DashBoardPage from './pages/dashboard/DashBoard';
import { useState } from 'react';
import TaskListComponent from './components/container/task_list';





function AppRoutingEjercicio() {



    let login = false;
    let register = true;

    


    return (
        <Router>
            <Switch>
                <Route exact path={'/'} >
                    {
                        register ?
                            (<Redirect from='/' to={'/dashboard'} />) : (<Redirect from='/' to={'/register'} />)

                    }

                </Route>




                <Route exact path={'/login'} component={LoginPage}>
                    {
                        register ? (<LoginPage/>) :
                            (<Redirect from='/' to={'/register'} />)

                    }


                </Route>
                <Route path={'/register'} component={RegisterFormik} />
                <Route path={'/tasks'} component={TaskListComponent} >
                    {
                        login ?
                            (<TaskListComponent  />) : (<Redirect from='/' to={'/login'} />)

                    }
                </Route>
                <Route exact path={'/dashboard'} >
                    {
                        login ?
                            (<DashBoardPage />) : (<Redirect from='/' to={'/login'} />)

                    }

                </Route>


                <Route component={NotFauntPage}></Route>
            </Switch>
        </Router>


    )

}

export default AppRoutingEjercicio; 