import Navbar from "../components/Navbar";
import PurposeBanner from "../assets/PurposeBanner.png";
import KiraBanner from "../assets/KiraBanner.png";
import Progess from "../assets/Progress.png";
import RD from "../assets/R &D.png";
import Running from "../assets/Running.png";
import DevelopmentIMG from "../assets/Development.png";
import Staking from "../assets/staking.png";
const Development = () => {
  return (
    <>
      <div className="navBox">
      <Navbar home = '' market ='' purpose = '' development = {Staking} reserve = '' staking = '' weapon = '' land = ''/>
      </div>
      <div className="Purpose">
        <div className="pur_banner">
          <img src={PurposeBanner} alt="" />
        </div>
        <div className="pur_wrap">
          <div className="Banner_logo">
            <img src={KiraBanner} alt="" />
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
    </>
  );
};

export default Development;
