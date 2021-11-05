import './App.css';
import Fourth from './components/Fourth';
import Header from './components/Header.jsx';
import Second from './components/Second.jsx';
import Third from './components/Third.jsx';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Fifth from './components/Fifth';
import Sixth from './components/Sixth';
import Seventh from './components/Seventh';
import SwipeableTextMobileStepper from './components/SwipeableTextMobileStepper.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Header />
      <Second />
      <SwipeableTextMobileStepper />
      {/* <Swipe /> */}

      {/* <Container>
        <Row className='pt-5'>
          <Col sm={2}><p className='fs-26'>CONSUMER ELECTRONICS</p></Col>
          <Col sm={10} className='pt-2'><div class="label"></div></Col>
        </Row>
      </Container> */}
      <Third />
      {/* <Container>
        <Row className='pt-5'>
          <Col sm={2}><p className='fs-26'>CONSUMER ELECTRONICS</p></Col>
          <Col sm={10} className='pt-2'><div class="label"></div></Col>
        </Row>
      </Container> */}


      <Fourth />
      {/* <Container>
        <Row className='pt-5'>
          <Col sm={2}><p className='fs-26'>CONSUMER ELECTRONICS</p></Col>
          <Col sm={10} className='pt-2'><div class="label"></div></Col>
        </Row>
      </Container> */}
      <Fourth />
      {/* <Container>
        <Row className='pt-5'>
          <Col sm={2}><p className='fs-26'>CONSUMER ELECTRONICS</p></Col>
          <Col sm={10} className='pt-2'><div class="label"></div></Col>
        </Row>
      </Container> */}
      <Fourth />
      {/* <Container>
        <Row className='pt-5'>
          <Col sm={2}><p className='fs-26'><b>JUST FOR YOU</b> </p></Col>
          <Col sm={10} className='pt-2'><div class="label"></div></Col>
        </Row>
      </Container> */}

      <Fifth />
      <Fifth />
      <Fifth />

      {/* <Container>
        <Row className='pt-5'>
          <Col sm={4}><p className='fs-20'><b>OUR TRADE SERVICES ARE HERE FOR YOU</b> </p></Col>
          <Col sm={8} className='pt-2'><div class="label"></div></Col>
        </Row>
        <p>Alibaba.com's trade services help ensure that your purchases are protected.</p>
      </Container> */}

      <Sixth />

      {/* <Container>
        <Row className='pt-5'>
          <Col sm={3}><p className='fs-20'><b>CHOOSE YOUR SUPPLIERS BY REGIONS</b> </p></Col>
          <Col sm={9} className='pt-2'><div class="label"></div></Col>
        </Row>
      </Container> */}

      <Seventh />
      
      <Footer />

      

    </div>
  );
}

export default App;
