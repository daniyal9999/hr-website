import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import JobListing from './Pages/JobListing';
import JobDetail from './Pages/JobDetail';
import Contactus from './Pages/Contactus';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'rgba(17, 40, 52, 0.25)' }}>
      <BrowserRouter>
          <Navbar/>

          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/jobs"
              element={<JobListing />}
            />
            <Route 
              path="/jobs/:id"
              element={<JobDetail />}
            />
            <Route 
              path="/contactus"
              element={<Contactus />}
            />
          </Routes>
          
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
