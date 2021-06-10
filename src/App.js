import './App.css';
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Footer from './layouts/Footer';
import AdminDashboard from './layouts/AdminDashboard';
import Navi from './layouts/Navi';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
        <AdminDashboard/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
