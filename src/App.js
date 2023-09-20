import React, { Component } from 'react';
import './app.css';
import './reset.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Search from './components/searchdetails/Search';
import Flights from './components/flightdetails/Flights';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
        <div className='heroImage'>
            
          </div>
        <section className="app__content">
        <div className="search__box">
        <div class="galleryImg">
          <img src="/assets/gallery1.jpg" alt="Nature" />
        </div>
        <div class="galleryImg">
        <img src="/assets/gallery2.jpg" alt="Nature" />
        </div>
        <div class="galleryImg">
        <img src="/assets/gallery3.jpg" alt="Nature" />
        </div>
        <div class="galleryImg">  
        <img src="/assets/gallery4.jpg" alt="Nature" />
        </div>
        </div>
          <Flights></Flights>
          <div className="search__box">
      <div class="galleryImg">
        <img src="/assets/gallery5.jpg" alt="Nature" />
      </div>
      <div class="galleryImg">
      <img src="/assets/gallery6.jpg" alt="Nature" />
      </div>
      <div class="galleryImg">
      <img src="/assets/gallery7.jpg" alt="Nature" />
      </div>
      <div class="galleryImg">  
      <img src="/assets/gallery8.jpg" alt="Nature" />
      </div>
    </div>
        </section>
      </div>
    );
  }
}

export default App;
