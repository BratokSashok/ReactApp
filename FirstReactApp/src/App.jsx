import './App.css'
import MyComponent from './components/myComponents/MyComponent';
import Button from './components/common/buttonComponents/ButtonComponent.jsx';

function App() {

  return (
    <>
      <div>
      <h1>React Component Tutorial</h1>
      <MyComponent
         title="User's header" 
         description="This is header"
      /> {/* Это обображает пользовательский контент*/}
      <br />
      <Button
        onClick={() => alert("Button is pushed!")}
      >
        Push me
      </Button>
      </div>
    </>
  );
}

export default App
