import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRouter from './AppRouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ minHeight: '80vh', padding: '20px' }}>
          <AppRouter />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
