import { Home } from './pages/Home';
import { Routes, Router, Route } from 'react-router';
import { NavBar } from './components/NavBar';
import { Calculator } from './pages/Calculator';
function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>

    </>
    


      
  );
}

export default App;
