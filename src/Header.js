import React, {useState} from 'react'
import logo from '../src/images/logo.png';
import {TopVideosData, TopVideo} from './TopVideo';
import {Link} from 'react-router-dom';
const Header = () => {
  const [menuActive, setMenuState] = useState(false);
  const [seachActive, setSearchState] = useState(false);

  function refreshPage() {
    window.location.reload(false);
  }
    return (
      <>
      <div>
           <header>
            <div className="container">
  
<nav className="navbar navbar-light amber lighten-4 fixed-top">

   <label className="navigationtop">
<input type='checkbox' />
<span className='menu' onClick={() => setMenuState(!menuActive)}> <span className='hamburger'></span> </span>
<ul className={` ${menuActive ? "navigationtopshow" : ""}`}>

  <li className="bcnormal" onClick={refreshPage}> <Link to='/' >Home</Link> </li>
  <li className="bcnormal" onClick={refreshPage}> <Link to='/about'>Arricle</Link> </li>
  <li className="bcnormal" onClick={refreshPage}> <Link to='/Pregnancy' >Pregnancy</Link> </li>
  <li className="bcnormal" onClick={refreshPage}> <Link to='/SmilePlease' >Smile Please</Link> </li>
  <li className="bcnormal" onClick={refreshPage}> <Link to='/DoctorSpeak' >Doctor Speak</Link> </li>
  <li className="bcnormal" onClick={refreshPage}> <Link to='/SmilePlease' >Our Team</Link> </li>
    
        <li className="text-center"><Link to="#" title="Youtube" className="youtubemob">
        <i className="fab fa-youtube"></i></Link> <Link to="#" title="Facebook" className="facebookmob">
        <i className="fab fa-facebook-f"></i></Link> <Link to="#" title="Twitter" className="twittermob">
        <i className="fab fa-twitter"></i></Link></li>
     
</ul>
     
       
</label>
    
    <div className="logo-language">
 <Link className="navbar-brand mrgnleft60px" to="/"><img src={logo} title="Saheli" alt="Saheli" /></Link>
    <div className="dropdown language-dropdown-menu pull-right">
    <button className="language-dropdown" id="language_menu" data-toggle="dropdown">
              ENG <span className="caret"></span>
          </button>


<ul id="language_groupdown_menu" className="dropdown-menu regular-fourteen" role="menu" aria-labelledby="menu1">
            <li className="language-dropdown-item" data-language="english"><Link to='/'>English</Link></li>
            <li className="divider"></li>
            <li className="language-dropdown-item" data-language="hindi"><Link to='/'>हिंदी</Link></li>
            <li className="divider"></li>
            <li className="language-dropdown-item" data-language="telugu"><Link to='/'>తెలుగు</Link></li>
            <li className="divider"></li>
            <li className="language-dropdown-item" data-language="tamil"><Link to='/'>தமிழ்</Link></li>
            <li className="divider"></li>
            <li className="language-dropdown-item" data-language="kannada"><Link to='/'>ಕನ್ನಡ</Link></li>
            <li className="divider"></li>
            <li className="language-dropdown-item" data-language="bangla"><Link to='/'>বাংলা</Link></li>
            <li className="divider"></li>
            <li className="language-dropdown-item" data-language="marathi"><Link to='/'>मराठी</Link></li>
            <li className="divider"></li>
            <li className="language-dropdown-item" data-language="gujarati"><Link to='/'>ગુજરાતી</Link></li>
            <li className="divider"></li>
            <li className="language-dropdown-item" data-language="malayalam"><Link to='/'>മലയാളം</Link></li>
            <li className="divider"></li>
            <li className="language-dropdown-item" data-language="punjabi"><Link to='/'>ਪੰਜਾਬੀ</Link></li>
          </ul>
        </div>
    </div>
    
<div className="socialmedia">
   <Link to="/" title="Search" className="serchicon" id="searchtoggl" onClick={() => setSearchState(!seachActive)}> <i className="fas fa-search"></i></Link>
    <Link to="/" title="Youtube" className="youtubeicon"><i className="fab fa-youtube"></i></Link>
    <Link to="/" title="Facebook" className="facebookicon"><i className="fab fa-facebook-f"></i></Link>
    <Link to="/" title="Twitter" className="twittericon "><i className="fab fa-twitter"></i></Link>
    
   
    <div id="searchbar" className={` ${seachActive ? "disblock" : ""}`}>
      <form id="searchform" method="get" action="">
        <button type="submit" id="searchsubmit" className="fa fa-search fa-4x"></button>
        <input type="search" name="s" id="searchme" placeholder="Search Keywords..." autoComplete="off" />
        
      </form>
    </div>
    
    </div>

</nav>

            </div>
            </header>

            <div className="container">

            <div className="row topbox-downtop">
         {
        TopVideosData.map((val, ind) => {
          return <TopVideo key={ind} Id={val.Id}  imgsrc={val.imgsrc} title={val.title} titspan={val.titspan} button={val.button} link={val.link}   />
          })
           }
         </div>
            </div>
          
        </div>
      </>  
    )
}

export default Header;
