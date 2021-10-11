import React from "react"
import App from '../App'

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

function Screen(){
  const [user] = useAuthState(auth);
  return (
    <>
    {user ? <App/> : <Sign/> }
    </>
  );
}

// Creating Some Variables
const signupbox = {
  backgroundColor: 'white',
  width: '50rem',
  height: 'auto',
  padding: '25px',
  borderRadius: '9px',
  margin: 'auto',
  marginTop: '5%',
  boxShadow: '0 0 20px #39C795',
}

const img = {
  marginTop: '10%',
  width: '25rem',
}

const h1 = {
  fontSize: '2.5rem',
  fontFamily: "'Roboto', sans-serif",
  marginLeft: '24px',
  marginBottom: '15px',
}


const button = {
  padding: 0,
  backgroundColor: 'white',
  outline: 'none',
  border: 'none',
  height: 0,
}


const imgInsideButton = {
  width: '22rem',
  marginTop: '10px',
  marginLeft: '22px',
}


const info = {
  width: '23rem',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,'Open Sans', 'Helvetica Neue', sans-serif",
  fontSize: '13px',
  marginLeft: '24px',
  fontWeight: 400,
}



function Sign() {
  


    const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    }
  return(
    // <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black',}}>
    //   <button onClick={signInWithGoogle}><img src="img/googlebutton.png" style={{borderRadius: '9px',}}/></button>
    // </div>

    <div className="signupBox" style={signupbox}>
      <div className="flex" style={{display: 'flex',}}>
        <span className="img">
          <img src="img/signup.jfif" style={img}/>
        </span>
        <span className="signInDetails" style={{marginTop: '85px',}}>
          <h1 style={h1}>Sign Up</h1>
          <hr style={{width: '200px', height: '3px', marginBottom: '20px',  color: '#39C795', opacity: '60%', boxShadow: '0 0 10px 1px #39C795', marginLeft: '25px',}}/>
          <button onClick={signInWithGoogle}><img src="img/googlebutton.png" alt="Sign In with Google" style={imgInsideButton}/></button>
          <button>Sign in with Google</button>
          <p style={info}>Note: Till now we have integrated Sign In with Google account only, but we will add more in future.</p>
        </span>
      </div>
      <hr style={{width: '75%', height: '3px', marginBottom: '20px',  color: '#39C795', opacity: '60%', boxShadow: '0 0 10px 1px #39C795', marginLeft: '25px', margin: 'auto',}}/><br/>
      <div className="who_we_are">
        <h1 style={{color: '#0087ca', fontSize: '2.3rem', fontFamily: "'Poppins', sans-serif", textAlign: 'center',}}>Welcome to Kisan Connect</h1><br/>
        <p style={{fontFamily: "'Poppins', sans-serif", fontSize: '17px', fontWeight: 400, textAlign: 'center', }}>Kisan Connect is an initiative by <b>Ganesh Prasannan</b>, <b>Ansh Sharma</b> and <b>Fauzan Sarwer</b> which bridges the gap between the Farmers and the Buyers digitally. Using our Web-App, Farmers have the freedom to choose the desired values for their products. The farmers can upload the pictures and all the necessary details of the crop grown, and companies who need the  products can contact them through the farmer's given contact information. The farmers can choose the company giving the highest value, just like in bidding. So from this, not only farmers can choose the desired value for their product, their reach of selling goods can also increase. This will definitely help our country's economy to revive again as companies buy products from our country's own farmers and sell the manufactured products to other countries.</p>
      </div>
    </div>


  );
}

export default Screen;
