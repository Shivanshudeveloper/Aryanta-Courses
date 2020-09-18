import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
export default class MultipleSliding extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div style={{ width: '100%' }} >
        <Slider {...settings}>
          <div>
            <h3>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/course" >
                1
            </Link>
            </h3>
          </div>
          <div>
            <h3>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/course" >
            2
            </Link>
            </h3>
          </div>
          <div>
            <h3>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/course" >
            3
            </Link>
            </h3>
          </div>
          <div>
            <h3>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/course" >
            4
            </Link>
            </h3>
          </div>
          <div>
            <h3>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/course" >
            5
            </Link>
            </h3>
          </div>
          <div>
            <h3>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/course" >
            6
            </Link>
            </h3>
          </div>
          <div>
            <h3>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/course" >
            7
            </Link>
            </h3>
          </div>
          <div>
            <h3>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/course" >
            8
            </Link>
            </h3>
          </div>
          <div>
            <h3>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/course" >
            9
            </Link>
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}