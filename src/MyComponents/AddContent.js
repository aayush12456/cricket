import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


export const AddContent = () => {
    return (
        <div>
           <img className='c1' src='https://st.depositphotos.com/2288675/2456/i/450/depositphotos_24562241-stock-photo-cricket-bat-and-ball.jpg'/>       
            <Link to="/t20worldcup"><img src="https://www.thestatesman.com/wp-content/uploads/2020/06/Dhoni.jpg" className="img3"/></Link>
              <b><p  className="p1" >India vs pakistan twenty 20 world cup 2007 </p></b>
              <Link to="/worldcup2011"><img src="https://gumlet.assettype.com/swarajya%2F2020-08%2Fbbab0bff-d042-4a7e-bd93-3330f0b116ed%2FEfd9DtmUYAIaAyx.jpg?q=75&auto=format%2Ccompress&w=1200"  className="img4"/></Link>
              <b><p  className="p2" >India's World Cup 2011  Winning Match</p></b>	
              <Link to="/dhonithebestfinisher"><img src="https://circleofcricket.com/post_image/post_image_3ed34b2.jpg"  className="img5"/></Link>
              <b><p className="p3">Dhoni The Best Finisher Last Over Victory India Vs Srilanka</p></b>
              <Link to="/Asiacup2010final"><img src="https://p.imgci.com/db/PICTURES/CMS/257200/257234.4.jpg"  className="img6"/></Link>
              <b><p  className="p4">India Vs Sri Lanka Asia Cup 2010 FINAL</p></b>
              <marquee className='mar'> if you are facing any problem regarding in my website please contact me on my email aayushtapadia28@gmail.com</marquee>
              <div className='nav1'>
<nav className="navbar navbar-expand-lg navbar-light bg-light navbar-static-top navbar-default">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/cricket">Cricket</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/aboutcpp">About Cpp</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/Anchor">The Anchor</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/TalentHunt">Talent Hunt</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/Press">Press</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Gallery">Image Gallery</Link>
        </li>
       
        
      </ul>
     
    </div>
  </div>
</nav>
</div>

<div className='t0'>
<p  className='t1' >Copyright @2022 Runners For Victory All Rights are reserved | site designed and developed by</p>
<a className='t2' href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2">aayushtapadia28@gmail.com</a>
<p className='t3' >Follow us on:</p> 
<a href="https://www.facebook.com/?stype=lo&jlou=Afdm5YgDklCS00vDkbvlJDyxI25WkEaLnIx9CHiQS3BIGaqLl8WZ60Bfqaw6jVwKP1jgvXS673JKLUbK4nLs9Vme3J8qOLTD0VQyVI4CVLhmBQ&smuh=2649&lh=Ac_3d-hI9trfCCOu"><img className='t4' src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/  ></a>
<a href="https://www.instagram.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png " className='t5'/ > </a>
</div>    
        </div>
    )
}
