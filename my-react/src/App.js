import React from 'react';
import{
  BrowserRouter,
  Routes,
  Route,
  Link
}from 'react-router-dom';
function Home(){
  return(
    <h2>welcome to home page</h2>
  );
}
function About(){
  return(
    <h2>welcome to About page</h2>
  );
}
function App(){
  return(
    <BrowserRouter>
    <h2>react router example</h2>
    <nav>
      <Link to="/Home">Home</Link>
      {"/"}
      <Link to="/About">About</Link>
    </nav>
    <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;