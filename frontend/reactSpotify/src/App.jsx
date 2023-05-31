import { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/login.jsx';
import './App.css';
// import DiscoverUsers from './pages/DiscoverUsers';
// import Discover from './pages/Discover';
// import TopTracks from './pages/TopTracks';
// import Forums from './pages/Forums';

// const ProtectedRoute = ({ element, isAuthenticated, ...props }) => (
//   <Route {...props} element={isAuthenticated ? element : <Navigate to="/login" />} />
// );

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // this state should be managed with authentication state

// [isLoggedIn, setIsLoggedIn] = useState(false); // this state should be managed with authentication state
  
    return (
      <>
       <Navbar /> {/* Add Navbar here */}
       <Routes>
         <Route path="/login" element={<Login />} />
         {/* <ProtectedRoute isAuthenticated={isLoggedIn} path="/discover-users" element={<DiscoverUsers />} />
         <ProtectedRoute isAuthenticated={isLoggedIn} path="/discover" element={<Discover />} />
         <ProtectedRoute isAuthenticated={isLoggedIn} path="/top-tracks" element={<TopTracks />} />
         <ProtectedRoute isAuthenticated={isLoggedIn} path="/forums" element={<Forums />} /> */}
       </Routes>
      </>
    )
  }

export default App;
  
