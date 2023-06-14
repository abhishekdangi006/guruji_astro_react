import React from "react";
import Slider from "react-slick";
import classes from "./offer.module.css"

export default function Offer(props) {
    const {offer} = props;
    console.log(offer);
    var settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className={classes.offer}>
      <Slider {...settings}>
        {offer.map((off) => <div>
          <img className="img-fluid" src={off.img} alt="offer"/>
          {console.log(off.img)}
        </div>)}
      </Slider>
      </div>
    );
  }