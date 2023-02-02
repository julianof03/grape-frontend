import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Pages from './pages';
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
                    <Pages />
                }
              >
                <Route index path="*" element={<Navigate to="/dashboard/subscription" />} />
              </Route>
            </Routes>
          </Router>
    </>
  );
}

