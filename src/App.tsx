import './App.css';

import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { Dev } from './pages/Dev/Dev';

function App() {
  return (
    <div className="Principal">
      
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="dev" element={<Dev />} />
    </Routes>
  </div>
  );
}

export default App;
