import './styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/unprotected/LoginPage';
import NewsPage from './pages/protected/NewsPage';
import PrivateRoutes from './components/route/PrivateRoute';
import UnauthenticatedRoutes from './components/route/UnauthenticatedRoute';

function App() {
  return (
    <Router>
      <Routes>
 
        <Route element={<UnauthenticatedRoutes />}>
          <Route path='/' element={<HomePage />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path='/news' element={<NewsPage />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
