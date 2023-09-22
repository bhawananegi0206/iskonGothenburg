import React, { Component } from 'react'
import './app.css'
import './reset.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header'
import Search from './components/searchdetails/Search'
import Flights from './components/flightdetails/Flights'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Header></Header>
        <div className='temple__main'>
          <div className='temple__leftSection'>
          </div>
          <div className='temple__subheading'>
          नमः ॐ विष्णु पादय, कृष्ण पृष्ठाय भूतले, श्रीमते भक्ति वेदांत स्वामिन
          इति नामिने । <br></br>
          नमस्ते सरस्वते देवे गौर वाणी प्रचारिणे, निर्विशेष शून्य-वादी पाश्चात्य
          देश तारिणे ।।
        </div>
          <div className='temple__rightSection'>
            
            </div>
        </div>
       

        <section className='app__content'>
          <div className='search__box'>
            <div className='flight' ref='flightRef'>
              <div className='flightinfo__details'>
              <h1 className='flightinfo__sectionName'>EVENTS</h1>
                <h2 className='flightinfo__heading'>Radhasthami</h2>
                <div className='flightinfo__title'>
                  The appearance day of Radha Rani
                </div>
                <div className='flightinfo__date'>23rd september</div>
                <div className='flightinfo__time'>15:30 - 18:30</div>
                <div className='flightinfo__venue'>
                  Govindas, Karl Johanasgatan 57
                </div>
              </div>
            </div>
          </div>
          <div className='middle_section'>
          <div className="middle_sectionRow"> 
          <div className="middle_sectionColumn image-fader">
            <img src="/assets/collage.png" />
            <img src="/assets/collage1.png" />
            <img src="/assets/collage.png" />
            <img src="/assets/collage1.png" />
            </div>
          </div>
          </div>
          <div className='search__box'>
            <div className='flight' ref='flightRef'>
              <div className='flightinfo__details'>
                <h2 className='flightinfo__heading'>DONATION</h2>
                <p className='flightinfo__subheading'>SWISH ON 123 552 13 49</p>
                <div className='flightinfo__title'>
                  WRITE "NAME & DONATION" IN MESSAGE
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App
