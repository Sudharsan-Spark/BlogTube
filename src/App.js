import React,{useState,useEffect} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; 

import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import httpClient from './components/httpClient';
import NavBar from './components/NavBar';
import Dress from './components/ShoppingPages/Dress';
import HandBag from './components/ShoppingPages/HandBag';
import Shoes from './components/ShoppingPages/Shoes';
import HP from './components/BookPages/HP';
import LOTR from './components/BookPages/LOTR';
import PJ from './components/BookPages/PJ';
import ElClassico from './components/EntPages/ElClassico';
import Cricket from './components/EntPages/Cricket';
import Basket from './components/EntPages/Basket';
import Black from './components/AstroPages/Black';
import BlueMoon from './components/AstroPages/BlueMoon';
import Halley from './components/AstroPages/Halley';
import PrivateRoute from './components/PrivateRoute';


function App() {
  document.title="BlogTube"
  const [authenticated, setAuthenticated] = useState(false);
  const [responseReceived, setResponseReceived] = useState(false);
  
  useEffect(() => {
    async function checkAuth() {
      try {
        const resp = await httpClient.get('//localhost:5000/@me');
        console.log(resp.data);
        setAuthenticated(true);
      } catch (error) {
        console.log('Not Authenticated');
      } finally {
        setResponseReceived(true);
      }
    }
    checkAuth();
  }, []);
  
 
  return (
    <div>
       <>     
          <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                {responseReceived && (
                <Route element={<PrivateRoute authenticated={authenticated}/>}>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/navbar" element={<NavBar/>} />   
                    <Route path="/*" element={<NotFound/>}/> 
                    <Route path="/home/dress" element={<Dress/>} />
                    <Route path="/home/handbag" element={<HandBag/>} />
                    <Route path="/home/shoes" element={<Shoes/>} />
                    <Route path="/home/hp" element={<HP/>} />
                    <Route path="/home/lotr" element={<LOTR/>} />
                    <Route path="/home/pj" element={<PJ/>} />
                    <Route path="/home/classico" element={<ElClassico/>} />
                    <Route path="/home/cricket" element={<Cricket/>} />
                    <Route path="/home/basketball" element={<Basket/>} />
                    <Route path="/home/blackhole" element={<Black/>} />
                    <Route path="/home/bluemoon" element={<BlueMoon/>} />
                    <Route path="/home/halley" element={<Halley/>} />
                </Route>)}
            </Routes>
          </Router>
       </>
    </div>
  );
}

export default App;