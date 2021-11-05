import React from 'react'
import { Carousel, } from 'react-bootstrap';
import {useState} from 'react';

export default function SwipeableTextMobileStepper() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s.alicdn.com/@img/imgextra/i1/O1CN015YUpJJ212cGEltgiM_!!6000000006927-0-tps-990-400.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s.alicdn.com/@img/tfs/TB1e.XyReL2gK0jSZFmXXc7iXXa-990-400.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s.alicdn.com/@img/imgextra/i3/O1CN01pDnN7I1buUqWLkrnE_!!6000000003525-0-tps-990-400.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s.alicdn.com/@img/imgextra/i3/O1CN01wNpn1n1H4TXYxRNpr_!!6000000000704-0-tps-990-400.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s.alicdn.com/@img/imgextra/i3/O1CN01QEL53b1ZNOzSa5hHT_!!6000000003182-0-tps-990-400.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}