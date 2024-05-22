import './styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/unprotected/LoginPage';
import NewsPage from './pages/protected/NewsPage';
import AuthenticatedRoutes from './components/route/AuthenticatedRoute';
import UnauthenticatedRoutes from './components/route/UnauthenticatedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<UnauthenticatedRoutes />}>
          <Route path='/' element={<HomePage />} />
        </Route>

        <Route element={<AuthenticatedRoutes />}>
          <Route path='/news' element={<NewsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
