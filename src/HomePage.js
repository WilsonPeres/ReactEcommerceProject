import React from 'react';
import Toolbar from '../src/components/Navigation/Toolbar/Toolbar';
import Footertoolbar from '../src/components/Footer/FooterToolbar/FooterToolbar';
import Hero from '../src/components/Hero/Hero';
import SlideShow from '../src/components/SlideShow/SlideShow';






class Homepage extends React.Component {
  render() {
    return (
      <div className="ProductsContainer">
        <Toolbar />
        <Hero />
        <div>

          <section className="Intro">
            <h1>Hola! Benvenidos!</h1>
            <p>
              Welcome to El Lagunero! We are Charlottes go to place for Mexican Deserts
              and snacks. Our commitment is to provide yummy and delicious authentic
              Mexican treats and snacks for you and your family to enjoy. We have
              something for everyone. From our cold and refreshing Raspadas the kids can
              drink on a hot summer day. To our famous Manzanas Locas that will have
              your mouth watering and wanting more. Mi casa es tu casa. We hope to see
              you soon!
             </p>
          </section>
          <section className="infoBox">
            <div className="Location">
              <h3> Location</h3>
              <p>
                3808 Driftwood Dr
                 <br />
                Charlotte, North Carolina 28205
              </p>
              <a href="https://bit.ly/3drlJM8" target="_blank" rel="noopener">
                <p className="Lagunero-Location"/>
              </a>
            </div>
            <div className="clear" />
            <div className="hours">
              <h3>Our Hours</h3>
              <ol>
                <li> Sun 10:00AM - 8:00PM</li>
                <li> Mon Closed - Closed</li>
                <li> Tue 3:00PM - 8:00PM</li>
                <li> Wed 3:00PM - 8:00PM</li>
                <li> Thu 3:00PM - 8:00PM</li>
                <li> Fri 3:00PM - 8:00PM</li>
                <li> Sat 10:00AM - 8:00PM</li>
              </ol>
            </div>
            <div className="clear" />
            <div className="FeatureItems">
              <h3>Famous Items</h3>
              <p>Frutas Locas, Raspadas, Mangonadas</p>
              <SlideShow />
            </div>
          </section>
        </div>
        <Footertoolbar />
      </div>
    );
  }
}
export default Homepage;
