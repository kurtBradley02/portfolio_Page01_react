import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './login_component/LoginForm';
import CreateAccForm from './login_component/CreateAccForm';
import HomePage from './page_component/HomePage';



function App() {

  const pageStyle = {
    backgroundColor: '#08C6A2',
    height: '100vh'
  };

  return (
    <div className="App" style={pageStyle}>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignIn"  element={<LoginForm />} />
          <Route path="/Register" element={<CreateAccForm />} />
        </Routes>
      </Router>

  
    </div>
  );
}

export default App;
