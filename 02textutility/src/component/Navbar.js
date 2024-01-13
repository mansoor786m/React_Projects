import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../index.css'
import { Link } from 'react-router-dom';


export default function Navbar(props) {

    const [radioCheck, setradioCheck] = useState(false);
    const handleclick = (color) => {
        console.log(radioCheck)
        // console.log(color)
        if(( color==='blue' || color==='green') && radioCheck ===false ){
            props.handleDarkMode(color)

        }
        if((color==='blue' || color==='green' )&& radioCheck === true ){
            props.handleDarkMode(color)
            setradioCheck(false)
        }else{
            props.handleDarkMode(color)
            if (color==='grey') {
                setradioCheck(true) 
            }else{
                setradioCheck(false)
            }
         
        }


    



    
    };


    return (
        <div className="container my-3  ">
            <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode === 'light' ? '#95a5a6' : 'grey'}  `}>
                <div className={`container-fluid `}>
                    <a className={`navbar-brand  text-${props.mode === 'light' ? 'black' : 'white'}`} href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse text-${props.mode === 'light' ? 'grey' : 'white'}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
                                {/* <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link> */}
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true" href="/">{props.about}</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className={`form-check mx-3 form-switch text-${props.mode === 'light' ? 'black' : 'white'}`} >
                        <input className="form-check-input" type="checkbox"  defaultChecked={radioCheck} role="switch" id="dark-mode" onClick={() => radioCheck? handleclick('light') : handleclick('grey')} />
                        <label className="form-check-label" htmlFor="dark-mode">Light/Dark mode</label>
                        <button type="button" className="btn btn-primary" onClick={() => handleclick('blue')}>Primary</button>
                        <button type="button" className="btn btn-success" onClick={() => handleclick('green')}>Secondary</button>
                    </div>

                </div>

            </nav>
        </div>
    )
}


// how define the type of props in a function
Navbar.prototype = {
    title: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}
// how define the defaults props in a function
Navbar.defaultProps = {
    title: 'Set The Title Here',
    home: 'Home',
    about: 'About'

}