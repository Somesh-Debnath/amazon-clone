import React from 'react'
import './App.css'
import Home from './pages/Home/Home.component'
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
export default function App() {
  return (
    <Router>
         <div className="app">
          <Routes>
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
