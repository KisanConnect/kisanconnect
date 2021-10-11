import React from 'react';
import '/css/navbar.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {useAuthState} from 'react-firebase-hooks/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCsrXuFkfKgfkx4ugidV-oORDO7CO7tUu0",
  authDomain: "kisanconnect-17649.firebaseapp.com",
  projectId: "kisanconnect-17649",
  storageBucket: "kisanconnect-17649.appspot.com",
  messagingSenderId: "686437593836",
  appId: "1:686437593836:web:b9a4aa38fb10e796616bc9",
  measurementId: "G-Z8BMNQYH0S"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Header(props) {

  return (
    <header className="header">
      <a href="/#" className="header__logo">Kisan Connect</a>

      <ion-icon id="nav-toggle">
      
      {props.onMain?<a href="/main" className="log_in">Go To Home</a>:<a href="/main" className="log_in">Go To Main</a>}
            <button type="button" className="btn btn-danger"  style={{marginLeft: 10, marginBottom: 5,}} onClick={() => auth.signOut()}>Sign Out</button>
            </ion-icon>


      <nav className="nav_nav" id="nav-menu">
        <div className="nav__content bd-grid">

          <ion-icon name="close-outline" className="nav__close" id="nav-close"></ion-icon>

          <div className="nav__perfil">
            <div className="nav__img">
              <img src="img/logo.png" alt="Kisan Connect" />
            </div>

            <div>
              <a href="/#" className="nav__name">Kisan Connect</a>
              <span className="nav__profesion">Connecting the farmers to the world.</span>
            </div>
          </div>

          <div className="nav__menu_nm">
            <ul className="nav__list">
              <li className="nav__item"><a href="/#" className="nav__link active">Home</a></li>
              <li className="nav__item"><a href="/#about_us" className="nav__link">About Us</a></li>
              <li className="nav__item"><a href="/#features" className="nav__link">Features</a></li>
              <li className="nav__item"><a href="/#team" className="nav__link">Team</a></li>
              <li className="nav__item"><a href="/#contact_us" className="nav__link">Contact Us</a></li>
            </ul>
          </div>


          <div className="nav__menu_nm">
            {props.onMain?<a href="/main" className="log_in">Go To Home</a>:<a href="/main" className="log_in">Go To Main</a>}
            <button type="button" className="btn btn-danger"  style={{marginLeft: 10, marginBottom: 5,}} onClick={() => auth.signOut()}>Sign Out</button>

            
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;