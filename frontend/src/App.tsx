import './styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/unprotected/LoginPage';
import NewsPage from './pages/protected/NewsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/news' element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
