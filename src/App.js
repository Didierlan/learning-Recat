import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF'
import TaskListComponent from './components/container/task_list';
import GreetingStyles from './components/pure/greetingStyles';
import Father from './components/container/father';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <Greeting name="Didier"></Greeting> */}
      {/* <GreetingF name="Didier"></GreetingF> */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* <GreetingStyles name= "Didier"></GreetingStyles> */}
      {/* </header> */}
      {/* <Father></Father> */}
      <TaskListComponent></TaskListComponent>
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}
    </div>
  );
}

export default App;
