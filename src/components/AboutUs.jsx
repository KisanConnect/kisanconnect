import React from 'react';

function AboutUs() {
  return (
    <section className="who_are_we" id="about_us">
      <span className="kisan_connect_with_img">
        <span className="kisanconnect_img">
          <img src="img/Kisan Connect.png" alt="Kisan Connect" />
        </span>
        <div className="kisan_connect">
          <h1 className="welcome_page">Welcome to <span className="green">Kisan Connect</span></h1>
          <div className="para">
            <p>Kisan Connect is an initiative by Ganesh Prasannan, Ansh Sharma and Fauzan Sarwer which bridges the gap betwwen the Farmers and the Buyers digitially. Using our Web-App, Farmers have the freedom to choose their desired values, for example if a farmer grows 10 tons of wheat, he/she can upload the picture and all the details of the crop grown, And companies who need the respective product can contact them through the farmer's given details. <br/><br/> The farmers can choose the company which is giving the highest value, just like in bidding. So from this not only farmers can choose their desired value, their reach of selling goods in a big area can also increase. This will definetly help our country's economy to revive again as companies will buy products from our country and sell the manufactured products to other countries.</p>
          </div>
        </div>
        </span>
      </section>
      );
    }
    
export default AboutUs;