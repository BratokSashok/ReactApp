import './App.css'
import MyComponent from './components/myComponents/MyComponent';
import MyButton from './components/common/buttonComponents/ButtonComponent.jsx';
import SummaryFunction from './components/SummaryFunction/SummaryFunction';
import Counter from './components/counter/Counter';
import PositiveSummary from './components/onlyPositiveSummary/PositiveSummary';

function App() {

  return (
    <>
      <div>
      <h1>React Component Tutorial</h1>
      <br />
      <MyComponent
         title="User's header" 
         description="This is header"
      /> {/* Это обображает пользовательский контент*/}
      <br />
      <MyButton
        onClick={() => alert("Button is pushed!")}
      >
        Push me
      </MyButton>
      <br />
      <Counter />
      <br />
      <SummaryFunction />
      <br />
      <PositiveSummary />
      </div>
    </>
  );
}

export default App
