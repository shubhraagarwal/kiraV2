import Navbar from "../components/Navbar";

import Staking from "../assets/staking.png";
import LandingBanner from '../assets/HighBanner.png' 
const Landing = () => {
  return (
    <>
      <Navbar home= {Staking} market = '' />
      <div className="LandBanner">
        <img src={LandingBanner} alt="" />
      </div>
    
    </>
  );
};

export default Landing;
