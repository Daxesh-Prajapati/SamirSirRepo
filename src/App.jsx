import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'; // Uncomment if needed
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Content } from './components/Content';
import { Navbar } from './components/Navbar';
import { HotstarWelcome } from './components/hotstar/Welcome';
import { HotstarMovies } from './components/hotstar/Movies';
import { Error404 } from './components/hotstar/Error404';
import { HotstarHome } from './components/hotstar/Home';
import { Play } from './components/hotstar/Play';
import { FormDemo1 } from './components/forms/FormDemo1';
import { FormDemo2 } from './components/forms/FormDemo2';
import { FormDemo3 } from './components/forms/FormDemo3';
import { FormDemo4 } from './components/forms/FormDemo4';
import { Login } from './components/forms/Login';
import { GTU100ActivityForm } from './components/forms/GTU100ActivityForm';
import { ApiDemo1 } from './components/apis/ApiDemo1';
import { ApiDemo2 } from './components/apis/ApiDemo2';
import { SearchMovie } from './components/omdb/SearchMovie';
import { MovieDetail } from './components/omdb/MovieDetail';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HotstarWelcome />} />
        <Route path="/home" element={<HotstarHome />} />
        <Route path="/movies" element={<HotstarMovies />} />
        <Route path="/play/:id" element={<Play />}></Route>
        <Route path="/*" element={<Error404 />} />
        <Route path="/formdemo1" element={<FormDemo1 />}></Route>
        <Route path="/formdemo2" element={<FormDemo2 />}></Route>
        <Route path="/formdemo3" element={<FormDemo3 />}></Route>
        <Route path="/formdemo4" element={<FormDemo4 />}></Route>
        <Route path="/loginValidateLink" element={<Login />}></Route>
        <Route path="/ApiDemoKiLink" element={<ApiDemo1 />}></Route>
        <Route path="/ApiDemo2NiLink" element={<ApiDemo2 />}></Route>
        <Route path="/SearchMovieLink" element={<SearchMovie />}></Route>
        <Route path="/MovieDetailLink/:id" element={<MovieDetail />}></Route>
        <Route
          path="/GTU100ActivityFormLink"
          element={<GTU100ActivityForm />}
        ></Route>
      </Routes>
      {/* <Footer /> */}
      {/* Add Footer if needed */}
    </div>
  );
}

export default App;
