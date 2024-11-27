import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login.js"
import Dashboard from './components/Dashboard.js';
import RequireAuth from './components/Auth.jsx';
import Schedule from './components/schedule.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
            
          }
        />
        <Route
        path="/Schedule"
        element={
          <RequireAuth>
            <Schedule />
            </RequireAuth>

        }
        />
      </Routes>
    </Router>
  );
}

export default App;
