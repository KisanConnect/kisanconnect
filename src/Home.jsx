import React, { useRef, useState } from 'react';
import '/css/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/card'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

import 'firebase/compat/storage'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'



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
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();



function Main() {
  return (
    <>
<Header onMain={true}/>
      <Input />
    </>
  );
}

function Input() {
  const [user] = useAuthState(auth);
  const [image, setImage] = useState(null);
  const fileRef = useRef(null);
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const quantityRef = useRef(null);
  const rateRef = useRef(null);

  const [posts] = useCollection(
    firebase.firestore().collection('posts').orderBy('timestamp','desc')
  );
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('submitted')
    db.collection('posts').add({
      
      product_name: nameRef.current.value,
      product_desc: descRef.current.value,
      product_quantity: quantityRef.current.value,
      product_rate: rateRef.current.value,
      email: user.email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(doc => {
      if (image) {
        const storageRef = storage.ref();
        var uploadTask = storageRef.child(`posts/${doc.id}`).putString(image, 'data_url');

        // setImage(null);
        uploadTask.on('state_changed',
          null,
          (error) => {
            console.log(error);
          },
          () => {
            
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              db.collection('posts').doc(doc.id).set({
                image: downloadURL
              }, {merge: true})
              window.location.reload(); 
            });
          }
        );
      }
      else{
        window.location.reload(); 
      }
    })
    
  }

  const addImage = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImage(readerEvent.target.result);
    }
  }
  return (
    <div className="div" style={{marginTop:'7%'}}>
        
        
        
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
         
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i className="fas fa-plus"></i>&nbsp;&nbsp;Create a New Post
    </button>
    </div>
    

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Create a New Post</h5>
            <button type="button" className="btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form onSubmit={onSubmitHandler}>

                    Product Name: <input ref={nameRef} type="text" placeholder="Product Name..." className="margin-b-12"/><br/>
                    Quantity (In Tons): <input ref={quantityRef} type="number" name="quantity" placeholder="Quantity (In Tons)" className="margin-b-12" min='1'/><br/>
                    Product Description: <input ref={descRef} type="text" placeholder="Product Description..." id="product_description" className="margin-b-12"/><br/>
                    Minimum Rate (In ₹): <input ref={rateRef} type="number" placeholder="Minimum Rate..."/>
                    <input ref={fileRef} type="file" id="file" accept="image/*" onChange={addImage}/>
                    <label htmlFor="file">
                        <span className="material-icons"></span>Choose a Photo
                    </label>
                    <p>{image && (
          <img style={{ height: 100 }} src={image} onClick={() => setImage(null)} />
        )}</p>
        <button type="button" className="btn btn-danger mt-4 mr-2" data-bs-dismiss="modal" aria-label="Close">Close</button>
        <button className="btn btn-primary mt-4" type="submit">Submit</button>
                </form>
            
      </div>
      </div>
      </div>
    </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
       

          

      <div className="div" style={{textAlign:'center', width:'100%', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:'30px'}}>

        
        {posts?.docs.map(post=>(
          <Card 
          key={post.id}
          image={post.data().image}
          name={post.data().product_name}
          desc={post.data().product_desc}
          quantity={post.data().product_quantity}
          rate={post.data().product_rate}
          email={post.data().email}
          timestamp ={post.data().timestamp}
          />

          
        ))}
      </div>
    </div>
  );
}

export default Main;