import React from 'react'
import santasToyBoxLogo from "../images/santasToyBoxLogo.png";
import christmasOrnamentsImg from '../images/christmas-ornaments-hanging-gold.jpg'
import redHangingOrnaments from '../images/red-hanging-ornaments-2.png'

function Home() {
    return (
      <div>
        <img
          src={christmasOrnamentsImg}
          className="Ornaments-banner"
        />
        <img src={santasToyBoxLogo} className="App-logo" />
        <div className="Mission-statement">
          Providing toys to Watauga County children since 1986.
        </div>
        <div className="Register">
          This can be set up to say something about how to{" "}
          <a href={`/register`}>register</a>.
        </div>
        <div className="Links">
          <div>
            <a href="/contactUs">Contact Us</a>
          </div>
          <div>
            <a href="/support">Support</a>
          </div>
          <div>
            <a href="/partners">Partners</a>
          </div>
        </div>
      </div>
    );
}

export default Home