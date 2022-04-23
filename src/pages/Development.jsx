import Navbar from "../components/Navbar";
// import PurposeBanner from "../assets/PurposeBanner.png";
// import KiraBanner from "../assets/KiraBanner.png";
import Progess from "../assets/Progress.png";
import RD from "../assets/R &D.png";
import Running from "../assets/Running.png";
import DevelopmentIMG from "../assets/Development.png";
import Staking from "../assets/staking.png";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import DevImg from "../assets/DevelopmentFix.png";
const Development = () => {
  return (
    <>
      <div className="DevWrap">
        <div className="navBox">
          <Navbar
            home=""
            market=""
            purpose=""
            development={Staking}
            reserve=""
            staking=""
            weapon=""
            land=""
          />
        </div>
        <div className="Purpose">
          <div className="pur_banner">
            <Popup trigger={<img src={DevImg} alt="" />} modal nested>
              {(close) => (
                <div className="modal">
                  <div className="header"> Suggestions </div>
                  <div className="content">
                    <input type="text" placeholder="Enter your twitter" />
                    {/*   <input type="text" placeholder="Start Typing..." />*/}
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Start Typing..."
                    ></textarea>
                    <button className="PopBtn">Send</button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
          <div className="pur_wrap">
            <div className="Banner_logo"></div>
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

        <div className="pop_up"></div>
      </div>
    </>
  );
};

export default Development;
