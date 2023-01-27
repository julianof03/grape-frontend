import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Dashboard from './pages/Dashboard/index';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <>
      <ToastContainer />
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                    <Dashboard />
                }
              >
                <Route index path="*" element={<Navigate to="/dashboard/subscription" />} />
              </Route>
            </Routes>
          </Router>
    </>
  );
}

