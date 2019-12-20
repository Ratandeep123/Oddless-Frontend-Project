import React from 'react';
import './App.css';
import rect from './assets/Rectangle.png';
import bit from './assets/Bit3d.png';
import small from './assets/small.png';
import big from './assets/big.png';
import Lay from './assets/Lay.png';
import Laye from './assets/Laye.png';
import Layer from './assets/Layer.png';
import network from './assets/network.png';
import vallet from './assets/vallet.png';
import Dzone from './assets/Dzone.png';
import star from './assets/star.png';
import busin from './assets/busin.png';
import real from './assets/real.png';
import cyber from './assets/cyber.png';
import angle from './assets/angle.png';
class App extends React.Component {



  render() {
    return (
      <div className="App">
        {/* Image on Image */}
        <div className="contr">
          <img src={rect} className="img1" />
          <img src={bit} className="img2" />
          <img src={small} className="img3" />
          <img src={big} className="img4" />
        </div>
        <div className="Navigation">
              <div className="topnav">
                <div className="logo">

                </div>
                <div className="menus">
                    <span className="logo"></span>
                    <span className="gap"><a href="home">HOME</a></span>
                    <span className="gap"><a href="Port">PORTFILLO</a></span>
                    <span className="gap"><a href="tech">TECHNOLOGY</a></span>
                    <span className="gap"><a href="mar">MARKETING INSIGHT</a></span>
                    <spna className="gap"><a href="ser">SERVICE</a></spna>
                    <span className="gap"><a href="about">ABOUT US</a></span>
                </div>
              </div>
        </div>
        {/* Text on image */}
        <div className="bottom-left"><h2>LOREM</h2><h1>IPSUM</h1></div>
        <div className="serv">
          <h2>OUR SERVICE</h2>
        </div>
        {/* Services in Row */}
        <div className="row servicesmenu">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img src={Lay} />
            <h5><a href="#">SMART CONTRACTS<br />DEVELOPEMENT</a></h5>
          </div>
          <div className="col-sm-4  col-md-4 col-lg-4">
            <img src={Laye} />
            <h5><a href="#">EXCHANGES</a></h5>
          </div>
          <div className="col-sm-4  col-md-4 col-lg-4">
            <img src={Layer} />
            <h5><a href="#">BLOCKCHAIN DEVELOPEMENT</a></h5>
          </div>
        </div>
        <div className="row top servicesmenu">
          {/* <div className="top"> */}
          <div className="col-sm-4  col-md-4 col-lg-4">
            <img src={network} />
            <h5><a href="#">HYPERLEDGER</a></h5>
          </div>
          <div className="col-sm-4  col-md-4 col-lg-4">
            <img src={vallet} />
            <h5><a href="#">PRIVATE BLOCKCHAIN DEVELOPEMENT</a></h5>
          </div>
          <div className="col-sm-4  col-md-4 col-lg-4">
            <img src={Dzone} />
            <h5><a href="#">WALLET</a></h5>
          </div>
          {/* </div>   */}
        </div>
        <div className="services">
          <h4><a href="#">View All Services</a></h4>
        </div>
        <div className="imge">
          <img src={star} className="star" />
        </div>

        <div className="top-left">
          <h3>TRENDS</h3>
        </div>

        <div className="main">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <h3>
                How BlockChain Technology<br /> Will Fortify <br /> Real Esate Industry
                              </h3>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <h3>
                Blockchain Technology<br /> Can Help <br />Fight Cyber Crime
                              </h3>

            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <h3>
                Blockchain technology<br />Contributing To<br /> Research & developement
                              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <img src={real} />
              <div className="centered">View All</div>
            </div>
            <div className="col-sm-4">
              <img src={cyber} />
              <div className="centered">View All</div>
            </div>
            <div className="col-sm-4">
              <img src={busin} />
              <div className="centered">View All</div>
            </div>
          </div>
        </div>
        <div className="rect">
          <img src={angle} className="angle" />
              <div className="blk"><h3>New to the Blockchain industry?<br/> Or got any queries?<br/> We are just one click away!</h3></div>
          <form>
            <div class="bottom-rightt">
              <div className="hed">
                <h1>Contact us</h1>
                <h6>How Can We Help You?</h6>
              </div>
              <div className="ipt">
                <input type="text" className="inside" name="name" placeholder="Your Name"/>
                <input type="text" className="inside" name="email" placeholder="Enter Email" name="email"/>
                <input type="text" className="inside" name="company" placeholder="Company" />
                <input type="text" className="inside" name="subject" placeholder="Your Subject"/>
              </div>
              <div className="area">
                    <textarea rows="4"  className="box" placeholder="Message" cols="50"></textarea>
              </div>
                <div className="button">
                    <button type="button" className="btn btn-primary clr">Submit</button>
                </div>
            </div>
          </form>
        </div>
        
      </div>
    );
  }
}

export default App;
