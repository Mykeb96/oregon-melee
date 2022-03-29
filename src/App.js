import './App.css';
import {
  Routes,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { useState } from 'react'
import HomePage from './components/HomePage';
import StatsPage from './components/StatsPage';
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import EventsPage from './components/EventsPage';
import ContactPage from './components/ContactPage';
import { FaDiscord, FaTwitter, FaFacebookF } from 'react-icons/fa'


function App() {

  const background = document.getElementsByClassName('parallax')

  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleNavClose = () => {
    setIsNavOpen(false)
  }

  const handleClick = () => {
    setIsNavOpen(true)
    console.log('You Navigated!')

    if (isNavOpen == true) {
      setIsNavOpen(false)
    }
  }


  return (
    <div className="App">

      <h1 id='title' onClick={handleNavClose}>Oregon Melee</h1>
      
      <div className='nav-menu'>
        <BsFillGrid1X2Fill className='nav-icon' style={isNavOpen ? {color: '#F3AF8A'} : {color: '#C54D74'}} onClick={handleClick}/>
          {isNavOpen ? <a href='/' className='nav-item nav1'>Home</a> : <p></p>}
          {isNavOpen ? <a href='/stats' className='nav-item nav2'>Stats</a> : <p></p>}
          {isNavOpen ? <a href='/events' className='nav-item nav3'>Events</a> : <p></p>}
          {isNavOpen ? <a href='/contact' className='nav-item nav4'>Contact</a> : <p></p>}
      </div>

      <div className='social-container'>
          <a className='icon' href='https://discord.gg/ETuvQBuRRM'><FaDiscord className='actual-icon'/></a>
          <a className='icon' href='https://www.facebook.com/groups/340535089298820/'><FaFacebookF className='actual-icon' /></a>
          <a className='icon' href='https://twitter.com/meleeoregon'><FaTwitter className='actual-icon' /></a>
      </div>

      <div className="content" onClick={handleNavClose}>
	    <div className="paralax" onClick={handleNavClose}>
      <div className="layer rocks2" onClick={handleNavClose}></div>
      <div className="layer rocks1" onClick={handleNavClose}></div>
      <div className="layer hills" onClick={handleNavClose}></div>
      <div className="layer foreground" onClick={handleNavClose}></div>
      </div>
      </div>

      <Router>
        <Routes>

          <Route path='/' element={<HomePage isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>} />
          <Route path='/stats' element={<StatsPage isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />} />
          <Route path='/events' element={<EventsPage isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />} />
          <Route path='/contact' element={<ContactPage isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />} />

        </Routes>
      </Router>

      <div className='bottom' onClick={handleNavClose}>
        <a href='https://twitter.com/xMykeB'>Developed By Myke B</a>
      </div>

      
    </div>
  );
}

export default App;