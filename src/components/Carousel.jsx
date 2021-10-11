import React from 'react';

function Carousel() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide pointer-event" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item" data-bs-interval="3000">
              <img src="img/img_1.png" className="d-block w-100 carousel-item-1 carousel-img-responsive" alt="..."/>
            </div>
            <div className="carousel-item active" data-bs-interval="4000">
              <img src="img/img_2.png" className="d-block w-100 carousel-img-responsive" alt="..."/>

            </div>
            <div className="carousel-item" data-bs-interval="6000">
              <img src="img/img_3.png" className="d-block w-100 carousel-img-responsive" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev carousel_control" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next carousel_control" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
  );
}

export default Carousel;