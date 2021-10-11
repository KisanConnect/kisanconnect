import React from 'react';

function Features() {
  return (
        // <!-- Features -->
        <section className="features" id="features">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20 my-24">
                <h2 className="details_on_top ">FEATURES OF</h2>
                <h1 className="sm:text-5xl text-2xl font-medium title-font text-gray-900 kisan_connect_title-text">Kisan Connect</h1>
                <hr style={{color:'green', opacity: '100%', marginTop: '20px', width: '150px', height: '3px',marginLeft: 'auto', marginRight: 'auto'}}/>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3 features_container">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                          <i className="fas fa-dollar-sign dollar" aria-hidden="true"></i>
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium">Desired Value For Your Quality Products</h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base">Farmers will have the choice of choosing the highest price like bidding. This will help the farmers choose the desired value for their quality products.</p>
                      <span className="learnMoreBtn">
                        <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More&nbsp;<i className="fas fa-arrow-right"></i></a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3 features_container">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                          <i className="fas fa-truck" aria-hidden="true"></i>
                        </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium">Choose the most affordable trasportation company</h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base">Farmers will have the freedom to choose the most affordable transporting company via our software.</p>
                      
                      <a className="mt-3 text-indigo-500 inline-flex items-center ">Learn More&nbsp;<i className="fas fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3 features_container">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                          <i className="fas fa-comments" aria-hidden="true"></i>
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium">Chat feature between the Buyers and the Exporters</h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base">For better communication between the buyer and the seller, we have also added the chat feature.</p>
                      <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More&nbsp;<i className="fas fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
  );
}

export default Features;