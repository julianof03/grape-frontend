import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Pages from './pages';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './contexts/UserContext';

export default function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                    <Pages />
                }>
              </Route>
            </Routes>
          </Router>
      </UserProvider>
    </>
  );
}

