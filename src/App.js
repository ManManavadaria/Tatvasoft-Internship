// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Apple from "./Apple";
import Homepage from "./Homepage";
import NotFound from "./NotFound";




const App = () => {

  return(
    <>
      <BrowserRouter>
    <div>
      <Link to="/" style={{ marginleft: 5, }} > Home </Link>

      <Link to="/apple" style={{ marginleft: 10, }}> Apple </Link>
      <Link to="applet" style={{ marginleft: 10, }}> Applet </Link>

    </div>

    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/apple" element={<Apple />}></Route>
      <Route path="*" element={<NotFound />}></Route>

    </Routes >
  </BrowserRouter >
    </>
  )

}



export default App;
