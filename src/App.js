import React from 'react';
//import logo from './images/logo.svg';
import './css/App.css';
import ClockTower from './components/ClockTower';
import './css/clockTower.css';

// import Greet from './components/Greet';
//import { Greet } from './components/Greet';
//import Welcome from './components/Welcome';
import Message from './components/Message';
//import Counter from './components/Counter';
//import FunctionClick from './components/FunctionClick';
//import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
//import UserGreeting from './components/UserGreeting';
//import NameList from './components/NameList';
//import Stylesheet from './components/Stylesheet';
//import Inline from './components/Inline';
import './css/appStyles.css';
//import styles from './css/appStyles.module.css';

function App() {
  return (
    <div className="App">
      <ClockTower />

      <br/><br/><br/><br/><br/>
      {/* <h2 className='error'>Error</h2> */}
      {/* <h2 className={styles.success}>Success</h2> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={false} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      <ParentComponent />
      <EventBind />
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      <Message />
      {/* <Welcome name="Bruce" heroName="Batman" /> */}
      {/* <Welcome name="Clark" heroName="Superman" /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children</p>
      </Greet> */}
      {/* <Greet name="Clark" heroName="Superman" /> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Clock Tower!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
