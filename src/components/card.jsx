import React from 'react'
import '/css/card.css'

const Card = ({email, timestamp, name, desc, quantity, rate, image}) =>{
  const time = timestamp.toDate().toString();
  return(
    <div className="card">
  <div className="container">
    <i class="fas fa-user-circle"></i><span className="account_email">{email}</span>&nbsp;<span className="verifiedTick"><i class="fas fa-check-circle"></i></span>
    <span className="timeUploaded">({time.slice(4, 21)})</span>
    <hr style={{width: '100%', height: '3px', marginTop: '5px', marginBottom: '15px'}}/>
  {image && <img src={image} alt={name} style={{width:'100%', marginBottom: '10px',}}/>}
    <span className="detailsOfProduct">
      <h2><b>Product Name: </b>{name}</h2> 
      <h3><b>Product Description: </b>{desc}</h3>
      <h4><b>Quantity: </b>{quantity} Tons</h4>
      <h4><b>Rate: </b>₹{rate}</h4>
      <p><a href={`mailto: ${email}`} target="blank" style={{transition: '0.3s all ease-in',}}><i className="fas fa-envelope"></i><b> &nbsp;Contact: </b>{email}</a></p> 
    </span>
  </div>
  </div>
  )
}

export default Card;