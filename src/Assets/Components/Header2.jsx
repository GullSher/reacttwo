import React from 'react';
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

// {/* The following line can be included in your src/index.js or App.js file */ }
// import { Carousel } from 'react-bootstrap/Carousel';

import Img1 from '../Images/35629A.jpg';
import Img2 from '../Images/161559a.jpg';
import Img3 from '../Images/161573a.jpg';

// import { Carousel } from 'react-bootstrap/Carousel';

const Header2 = () => {
    return (
        <>
            <Carousel>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={Img1}
                        alt="First slide"
                        // width="30%" height="30%"
                        width="400px" height="592px"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        // src="holder.js/800x400?text=Second slide&bg=282c34"
                        src={Img2}
                        alt="Second slide"
                        // width="30%" height="30%"
                        width="400px" height="592px"
                        margin='auto'
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img3}
                        alt="Third slide"
                        // width="30%" height="30%"
                        width="400px" height="592px"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </>
    )
}

export default Header2
