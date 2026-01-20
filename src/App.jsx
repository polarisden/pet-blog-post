import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import ViewPostPage from './pages/ViewPostPage';
import NotFoundPage from './pages/NotFoundPage';
import SignupLoginPage from './pages/SignupLoginPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/posts/:postId" element={<ViewPostPage />}/>
        <Route path='*' element={<NotFoundPage />}/>
        <Route path='/sign-up' element={<SignupLoginPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
