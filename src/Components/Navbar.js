import React from 'react';
import PropTypes from 'prop-types';
// import { Link  } from 'react-router-dom';

function Navbar(props) {
  const {title, aboutTitle, mode, toggleMode} = props;
 return (
  <>
    <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${mode} navbar-${mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">{aboutTitle}</a>
        </li> */}
      </ul>
      {/* <div className="d-flex">
        <div className="bg-primary rounded mx-2" style={{height:'30px',width: '30px', cursor : 'pointer'}} onClick={()=>{toggleMode('primary')}}></div>
        <div className="bg-success rounded mx-2" style={{height:'30px',width: '30px', cursor : 'pointer'}} onClick={()=>{toggleMode('success')}}></div>
        <div className="bg-danger rounded mx-2" style={{height:'30px',width: '30px', cursor : 'pointer'}} onClick={()=>{toggleMode('danger')}}></div>
        <div className="bg-warning rounded mx-2" style={{height:'30px',width: '30px', cursor : 'pointer'}} onClick={()=>{toggleMode('warning')}}></div>
        <div className="bg-dark rounded mx-2" style={{height:'30px',width: '30px', cursor : 'pointer'}} onClick={()=>{toggleMode('dark')}}></div>
        <div className="bg-light rounded mx-2" style={{height:'30px',width: '30px', cursor : 'pointer'}} onClick={()=>{toggleMode('light')}}></div>
      </div> */}
      <div className={`form-check form-switch text-${props.mode ==='light'? 'dark' : 'light'}`}>
      <input className="form-check-input" onClick={()=>{toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div>
    </div>
  </div>
</nav>
  </>
 ); 
}

export default Navbar;

Navbar.propType = {
  title: PropTypes.string,
  aboutTitle: PropTypes.string
}

Navbar.defaultProps = {
  title : 'Set Title of Page Here',
  aboutTitle : 'Set About Title of Page Here'
}