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
                  <a href="#home"><img src="https://th.bing.com/th/id/OIP.LmjRS7UijNFsD0JQ8S5NewHaHa?rs=1&pid=ImgDetMain" className="logo"></img></a>
                  <ul id="topmenu">
                    <li><a href="#home">Sensors</a></li>
                    <li><a href="#dorm-hydro">DormHydroponics</a></li>
                    <li><a href="#help">Help</a></li>
                    <li><a href="#about">About Our Project</a></li>
                  </ul>          
              </nav>
          </div>
          <div className='sensor-tile-container'>
            <div id='tile-one'>
              <h2>Sensor 1</h2>
              <p>Filler detail of information...Filler detail of information...Filler detail of information...</p>
              <a href="">Learn more</a>
            </div>
            <div id='tile-two'>
            <h2>Sensor 2</h2>
              <p>Filler detail of information...Filler detail of information...Filler detail of information...</p>
              <a href="">Learn more</a>
            </div>
            <div id='tile-three'>
            <h2>Sensor 3</h2>
              <p>Filler detail of information...Filler detail of information...Filler detail of information...</p>
              <a href="">Learn more</a>
            </div>
          </div>

        </div>

      </body>


      <div id='dorm-hydro'>
        <h1>DormHydroponics</h1>
      </div>

      <div id='help'>
        <h1>Help</h1>
      </div>

      <div id='about'>
        <h1>About</h1>
      </div>

    </>
  )
}

export default App
