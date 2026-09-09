import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './Portfolio';
import About from './About';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        {/* in-page anchors opened in a new tab land on /#work etc., which is not a route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
