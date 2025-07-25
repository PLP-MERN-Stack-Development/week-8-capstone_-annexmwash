
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Outline from './pages/Outline';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/outline" element={<Outline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
