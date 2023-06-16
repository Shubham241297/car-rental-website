import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import CarList from './components/CarList';
import CarDetails from './components/CarDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div>
        <header style={headerStyle}>
          <nav style={navStyle}>
            <ul style={ulStyle}>
              <li style={liStyle}>
                <Link to="/" style={linkStyle}>Home</Link>
              </li>
              <li style={liStyle}>
                <Link to="/cars" style={linkStyle}>Cars</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

// Styling
const headerStyle = {
  backgroundColor: '#f4f4f4',
  padding: '10px',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '10px',
};

const liStyle = {
  padding: '5px',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
};

export default App;
