import './App.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import 'semantic-ui-css/semantic.min.css'
import Footer from './layouts/Footer';
import Navi from './layouts/Navi';
import AdminDashboard from './layouts/AdminDashboard';
import Homepage from './layouts/Homepage';
import { Container } from 'semantic-ui-react';

function App() {
  const [isAdmin, setIsAdmin] = useState(true)
  const history = useHistory()

  function handleHomepage() {
    setIsAdmin(false)
    history.push("/")
  }

  function handleAdmin() {
    setIsAdmin(true)
  }
  return (
    <div className="App">
      <Navi />
      <Container position='right'>
        {isAdmin
          ? <AdminDashboard signOut={handleAdmin} />
          : <Homepage signIn={handleHomepage} />}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
