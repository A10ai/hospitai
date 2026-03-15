import { Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Pilot from './pages/Pilot';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

export default function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/pilot" element={<Pilot />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageLayout>
  );
}
