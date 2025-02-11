import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import "./App.css"; // Uncomment if needed
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Content } from './components/Content';
import { Navbar } from './components/Navbar';
import { HotstarWelcome } from './components/hotstar/Welcome';
import { HotstarMovies } from './components/hotstar/Movies';
import { Error404 } from './components/hotstar/Error404';
import { HotstarHome } from './components/hotstar/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HotstarWelcome />} />
        <Route path="/home" element={<HotstarHome />} />
        <Route path="/movies" element={<HotstarMovies />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      {/* <Footer /> */}
      {/* Add Footer if needed */}
    </div>
  );
}

export default App;
