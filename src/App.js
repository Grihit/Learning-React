import './App.css';
import Welcome from './components/Welcome'
import Greet from './components/Greet'
import Hello from './components/Hello'
import Bye from './components/Bye'
import Counter from './components/Counter'
import FunctionClick from './components/FuntionClick'
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import NameListObjects from './components/NameListObjects';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      {/*<Welcome />*/}
      <Greet />
      <Hello name="Grihit" subject="CSE">
        <p>Children props</p>
      </Hello>
      <Hello name="Yash" subject="Design" />
      <Bye name="Taksh" subject="Law" />
      <Bye />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <UserGreeting UserName="Grihit" />
      <NameList />
      <NameListObjects />
      <Stylesheet primary = {true} />
      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default App;
