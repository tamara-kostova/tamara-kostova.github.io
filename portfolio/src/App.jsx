import { HashRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import About from './About';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;