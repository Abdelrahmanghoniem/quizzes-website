import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login.js"
import Dashboard from './pages/dashboard.tsx';
import RequireAuth from './components/Auth.jsx';
import Schedule from './pages/schedule.tsx';
import Announcements from './pages/announcements.tsx';
import Performance from './pages/performance.tsx';
import Gradebook from './pages/gradebook.tsx';
import Courses from './pages/courses.tsx';

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
        path="/schedule"
        element={
          <RequireAuth>
            <Schedule />
            </RequireAuth>

        }
        />

        <Route
        path="/announcements"
        element={
          <RequireAuth>
            <Announcements />
            </RequireAuth>

        }
        />

        <Route
        path="/performance"
        element={
          <RequireAuth>
            <Performance />
            </RequireAuth>

        }
        
        />
          <Route
        path="/gradebook"
        element={
          <RequireAuth>
            <Gradebook />
            </RequireAuth>

        }
        />

        <Route
        path="/courses"
        element={
          <RequireAuth>
            <Courses />
            </RequireAuth>

        }
        />
      </Routes>
    </Router>
  );
}

export default App;
