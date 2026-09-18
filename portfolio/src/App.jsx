import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Portfolio from './Portfolio';
import About from './About';

// react-router keeps the scroll offset across navigations, which lands you halfway down
// the page you just opened; reset it unless the URL points at an in-page anchor.
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => { if (!hash) window.scrollTo(0, 0); }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        {/* deep links are served by public/404.html, which bounces them back to / with
            ?redirect=; anything still unmatched is a genuine typo, so send it home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
