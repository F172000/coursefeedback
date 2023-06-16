import React from 'react'
import logo from '../images/logo.png';
import sir from '../images/sir.png';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
const Navbar = () => {
  return (
          <div className="App">
      <nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#">
      <img src={logo} alt='logo'></img>
      <span>Faculty Portal</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav ms-auto justify-content-start">
  {/* <li className="nav-item ">
    <div class = 'search-box'>
      <input class = "search-text" type="text" placeholder = "Search Anything"/>
    <a href="#" class = "search-btn">
    <i class="bi bi-search "></i>
    </a>
    
  </div>
  </li> */}
  <li className="nav-item ">
    <a className="nav-link" href="/profile"><i class="bi bi-person-fill "></i> Muhammad Usman</a>
  </li>
  <li className="nav-item ">
    <a className="nav-link" href="/Dashboard"><i class="bi bi-house-door-fill "></i> Home</a>
  </li>
  <li className="nav-item ">
    <a class="nav-link " href="/passwordreset"><i class="bi bi-arrow-repeat "></i> Reset Password</a>
  </li>
  <li className="nav-item ">
    <a class="nav-link " href="/login"><i class="bi bi-box-arrow-right "></i> Logout</a>
  </li>
  <li className="nav-item ">
    <a href="/#"><img src={sir} alt="Avatar" class="avatar"/></a>
  </li>
</ul>
</div>
</div>
     </nav>
    </div>
  )
}

export default Navbar;
