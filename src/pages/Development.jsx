import Navbar from "../components/Navbar";
import PurposeBanner from "../assets/PurposeBanner.png";
import KiraBanner from "../assets/KiraBanner.png";
import Progess from "../assets/Progress.png";
import RD from "../assets/R &D.png";
import Running from "../assets/Running.png";
import DevelopmentIMG from "../assets/Development.png";
import Staking from "../assets/staking.png";
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DevImg from '../assets/DevelopmentFix.png'
const Development = () => {
  return (
    <>
    <div className="DevWrap">
      <div className="navBox">
      <Navbar home = '' market ='' purpose = '' development = {Staking} reserve = '' staking = '' weapon = '' land = ''/>
      </div>
      <div className="Purpose">
        <div className="pur_banner">
        <Popup trigger={ <img src={DevImg} alt="" />} 
                   modal nested> 
    {close => (
      <div className="modal">
    
        <button className="close" onClick={close}>
          &times;
        </button>

        <div className="header"> PopUp </div>
        <div className="content">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
      </div>
    )}
    </Popup>
        </div>
        <div className="pur_wrap">
          <div className="Banner_logo">
     
     
          </div>
          <div className="pur_stats">
            <div>
              <span>
                <img src={Progess} alt="" />{" "}
                <span className="stats_pos"> = &nbsp;In Progress</span>
              </span>
            </div>
            <div>
              <span>
                <img src={RD} alt="" />{" "}
                <span className="stats_pos">= &nbsp;R & D</span>
              </span>
            </div>
            <div>
              <span>
                <img src={Running} alt="" />{" "}
                <span className="stats_pos">= &nbsp;Always Running</span>
              </span>
            </div>
            <div>
              <span>
                <img src={DevelopmentIMG} alt="" />
                <span className="stats_pos"> = &nbsp;In Development</span>
              </span>
            </div>
          </div>
        </div>
      </div>


      <div className="pop_up">

      </div>
      </div>
    </>
  );
};

export default Development;
