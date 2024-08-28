import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import UserLoginPage from './components/UserLoginPage';
import TechnicianLoginPage from './components/TechnicianLoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user-login" element={<UserLoginPage />} />
          <Route path="/technician-login" element={<TechnicianLoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
