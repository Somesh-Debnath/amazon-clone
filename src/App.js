import React from 'react'
import './App.css'
import Home from './pages/Home/Home.component'
import Header from './components/Header';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
export default function App() {
  return (
    <Router>
         <div className="app">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
    </Router>
  )
}
