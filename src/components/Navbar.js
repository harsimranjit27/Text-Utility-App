import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                {/* <li className="nav-item">
                  { <Link className="nav-link" to="/about">{props.aboutText}</Link> }
                  <a className="nav-link" href="/about">{props.aboutText}</a>
                </li> */}
              </ul>
            </div>
            
            <div className="form-check form-switch px-2">
              <input className="form-check-input ms-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleRedMode}/>
              <label className={`form-check-label me-0 text-${props.mode === "light"?"dark":"light"}`} htmlFor="flexSwitchCheckChecked">
                Red Mode
              </label>
            </div>
            <div className="form-check form-switch px-2">
              <input className="form-check-input ms-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.togglePurpleMode}/>
              <label className={`form-check-label me-0 text-${props.mode === "light"?"dark":"light"}`} htmlFor="flexSwitchCheckChecked">
                Purple Mode
              </label>
            </div>
            <div className="form-check form-switch px-2">
              <input className="form-check-input ms-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleGreenMode}/>
              <label className={`form-check-label me-0 text-${props.mode === "light"?"dark":"light"}`} htmlFor="flexSwitchCheckChecked">
                Green Mode
              </label>
            </div>
            <div className="form-check form-switch px-2">
              <input className="form-check-input ms-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleDarkMode}/>
              <label className={`form-check-label me-0 text-${props.mode === "light"?"dark":"light"}`} htmlFor="flexSwitchCheckChecked">
                Dark Mode
              </label>
            </div>
            
          
        </div>
      </nav>
    );
}

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About text here"
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
