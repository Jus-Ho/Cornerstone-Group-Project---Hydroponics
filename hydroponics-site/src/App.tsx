import './App.css'
import React from "react";

function App() {
  

  return (
    <>
      
      <head id='root'>

        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Dorm Hydroponics</title>

      </head>



      <body id='root'>

        <div id='home'>
          <div className='nav-bar'>
            <nav>
            <a href="#home" className="logo">Home</a>
                  <ul id="topmenu">
                    <li><a href="#dorm-hydro">DormHydroponics</a></li>
                    <li><a href="#our-team">Our Team</a></li>
                    <li><a href="#about">About Our Project</a></li>
                  </ul>          
              </nav>
          </div>
          <div className='sensor-tile-container'>
            <div id='tile-one'>
              <h2>TDS Sensor</h2>
              <p>The Total Dissolved Solids is currently reading <span>98</span> parts per million!</p>
              <a href="">Learn more</a>
            </div>
            <div id='tile-two'>
            <h2>My Past Plants</h2>
              <li>Butter Lettuce</li>
              <li>Baby Spinach</li>
              <p></p>
              <a href="">Learn more</a>
            </div>
            <div id='tile-three'>
            <h2>Ultra Violet Sensor</h2>
              <p>The current Ultra Violet index is a <span>7</span>!  The light level is great for growing!</p>
              <a href="">Learn more</a>
            </div>
          </div>


        </div>

        <div id="dorm-hydro">
        <div className="container">
            <h1 className="sub-title">DormHydroponics</h1>
            <div className="work-list">
                <div className="work">
                    <img src="https://oikotimes.com/wp-content/uploads/2021/04/pexels-pragyan-bezbaruah-4199758.jpg"></img>
                    <div className="layer">
                        <h2>How To Use DormHydronics</h2>
                        <h3>Click below for step-by-step instructions on how to set-up and use DormHydroponics</h3>
                        <a href="https://docs.google.com/document/d/1LNwu1_gwERtyeM76DTKI_GVxToXTkA4l6jANFTpLx_Y/edit?usp=sharing">More</a>
                    </div>
                </div>
                <div className="work">
                    <img src="https://gardeningheavn.com/wp-content/uploads/2019/05/drip-hydrorganic-1024x684.jpg"></img>
                    <div className="layer">
                        <h2>Watch Our Commercial</h2>
                        <h3>Learn more about DormHydroponics and see if we just might be the solution for you! </h3>
                        <a href="https://drive.google.com/file/d/1iiXmIhjdBiiB-M6KilDrvpYpUE1DF2QA/view?usp=sharing">More</a>
                    </div>
                </div>
                <div className="work">
                    <img src="https://cdn.shopify.com/s/files/1/2723/8896/files/hydroponics_3_mini_1024x1024.jpeg?v=1567613839"></img>
                    <div className="layer">
                        <h2>FAQ's</h2>
                        <h3>Click to read some Frequently Asked Questions from some of our other users in dorm like yours</h3>
                        <a href="https://docs.google.com/document/d/1FnJkzMQzQwHCXGyzM2MxmbAdW3-OvYKQsyIq9W39jxA/edit?usp=sharing">More</a>
                    </div>
                </div>
            </div>
        </div>
        <a href="#" className="btn">See More</a>
        </div>

        <div id='our-team'>
          <div className="container">
            <h1>Our Team</h1>
          </div>
        </div>




        








      </body>








      

      <div id='about'>
        <h1>About</h1>
      </div>

    </>
  )
}

export default App
