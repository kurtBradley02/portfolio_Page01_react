import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './login_component/LoginForm';
import CreateAccForm from './login_component/CreateAccForm';
import Dashboard from './page_component/Dashboard';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/"  element={<LoginForm />} />
          <Route path="/Register" element={<CreateAccForm />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>

  
    </div>
  );
}

export default App;
