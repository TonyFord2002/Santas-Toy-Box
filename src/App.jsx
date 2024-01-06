import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home'
import Register from './components/Register'
import ContactUs from './components/ContactUs'
import Support from './components/Support'
import Partners from './components/Partners'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
