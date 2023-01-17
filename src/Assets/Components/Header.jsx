import React from 'react';

import Img1 from '../Images/35629.jpg';
import Img2 from '../Images/161559.jpg';
import Img3 from '../Images/161573.jpg';
import '../Components/Comp-Css/HeaderCss.css';
import '../Components/HeaderJsx.jsx';

// Following  https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_carousel2&stacked=h

export default function Header() {
  return (
    <div class="container">
      <br />
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div class="slideshow-container">

          {/* <!-- Full-width images with number and caption text --> */}

          {/* <!-- Indicators --> */}
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          {/* <!-- Wrapper for slides --> */}
          <div className="carousel-inner">
            <div className="item active">
              <img src={Img1} alt="Chania" width={'400px'} height={'400px'} />
              <div className="carousel-caption">
                <h3>Los Angeles</h3>
                <p>LA is always so much fun!</p>
              </div>
            </div>

            <div className="item">
              <img src={Img2} alt="Chicago" width={'400px'} height={'400px'} />
              <div className="carousel-caption">
                <h3>Chicago</h3>
                <p>Thank you, Chicago!</p>
              </div>
            </div>

            <div className="item">
              <img src={Img3} alt="New York" width={'400px'} height={'400px'} />
              <div className="carousel-caption">
                <h3>New York</h3>
                <p>We love the Big Apple!</p>
              </div>
            </div>
          </div>

          {/* <!-- Left and right controls --> */}
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous &nbsp; </span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};
