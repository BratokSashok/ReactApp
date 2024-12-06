/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import MyComnponent from './components/myComponents.jsx/MyComponent';

function App() {

  return (
    <>
      <div>
      <h1>React Component Tutorial</h1>
      <MyComnponent title="User's header" description="This is header"/> {/* Это обображает пользовательский контент*/}
      </div>
    </>
  );
}

export default App
