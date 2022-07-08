import React, { useEffect } from 'react'
import './App.css'
import Home from './pages/Home/Home.component'
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { useStateValue } from './contextAPI/StateProvider';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { auth } from './firebase';
export default function App() {
  const [{basket,user},dispatch]=useStateValue()
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
         <div className="app">
          <Routes>
          <Route path="/login" element={<Login/>}/>
            <Route path="/" 
            element={ 
            <div>
                <Header/>
                <Home/>
            </div> } />
            
          </Routes>
        </div>
    </Router>
  )
}
