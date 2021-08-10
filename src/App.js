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

function App() {
  return (
    <div className="App">
      {/*<Welcome />
      /*<Greet />
      <Hello name="Grihit" subject="CSE">
        <p>Children props</p>
      </Hello>
      <Hello name="Yash" subject="Design" />
      <Bye name="Taksh" subject="Law" />
      <Bye />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />*/}
      <ParentComponent />
    </div>
  );
}

export default App;
