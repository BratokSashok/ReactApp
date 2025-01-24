import './App.css';
import React from 'react';
import Header from './components/common/headerComponents/HeaderComponent';
import { Outlet } from 'react-router';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;