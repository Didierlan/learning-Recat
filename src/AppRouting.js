import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import HomePague from './pages/home/homePague';
import NotFauntPage from './pages/404/NotFauntPage';
import Aboutpage from './pages/about-faqs/AboutPage';
import Profilepage from './pages/profile/profilePage';
import Taskspage from './pages/tasks/tasksPage';
import Taskdetailpage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/loginPage';
import StatePage from './pages/home/statePage';




function AppRouting() {


    let taskList = [
        {
            id: 1,
            name: 'Task 1',
            description: 'My fist Task'
        },
        {
            id: 2,
            name: 'Task 2',
            description: 'My second Task'
        }
    ]


    const logged = localStorage.getItem('credential');
    return (
        <Router>

            <div>
                <aside>
                    <Link to='/'>|| HOME |</Link>
                    <Link to='/login'>| LOGIN |</Link>
                    <Link to='/about'>| ABOUT |</Link>
                    <Link to='/faqs'>| FAQs |</Link>
                    <Link to='/task/1'>| Task 1 |</Link>
                    <Link to='/task/2'>| Task 2 |</Link>

                    <Link to='/any404'>| Not Existing Route |</Link>


                </aside>

                <main>
                    <Switch>
                        <Route exact path='/' component={HomePague} />
                        <Route exact path='/state-online' component={StatePage} />
                        <Route path={'/login'} component={LoginPage}>
                            {
                                logged ? <Redirect to={'/'} /> : <LoginPage />
                            }
                        </Route>
                        <Route path='/(about|faqs)' component={Aboutpage} />
                        <Route path='/profile' component={Profilepage}>
                            {
                                logged ? <Profilepage /> : () => {
                                    alert('User no autenticado')
                                    return (
                                        <Redirect to={'/login'} />
                                    )
                                }
                            }


                        </Route>
                        <Route path='/tasks' component={Taskspage} />
                        <Route
                            exact
                            path='/task/:id'
                            render={
                                ({ match }) => (<Taskdetailpage task={taskList[match.params.id - 1]} />)
                            }>

                        </Route>
                        {/* 404 - Page No Found */}
                        <Route component={NotFauntPage} />
                    </Switch>
                </main>

            </div>


        </Router>
    )
}

export default AppRouting; 