import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Footer from './layouts/Footer';
import Navi from './layouts/Navi';
import Homepage from './layouts/Homepage';
import AdminDashboard from './layouts/AdminDashboard';

function App() {
  return (
    <div className="App">
      <Navi/>
        <AdminDashboard/>
      <Footer/>
      
    </div>
  );
}

export default App;
