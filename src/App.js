import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF'
import TaskListComponent from './components/container/task_list';
import GreetingStyles from './components/pure/greetingStyles';
import Clock from './components/pure/forms/clock';
import ClockFun from './components/pure/forms/clockFun';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Didier"></Greeting> */}
        {/* <GreetingF name="Didier"></GreetingF> */}
        {/* <TaskListComponent></TaskListComponent> */}

        {/* <GreetingStyles name= "Didier"></GreetingStyles> */}
        {/* <Clock></Clock> */}
        <ClockFun></ClockFun>

      </header>
    </div>
  );
}

export default App;
