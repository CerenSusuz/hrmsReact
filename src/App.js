import './App.css';
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Footer from './layouts/Footer';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';

function App() {
  return (
    <div className="App">
      <Navi />
        <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
