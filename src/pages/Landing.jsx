import Navbar from "../components/Navbar";
import LandingBanner from "../assets/LandingBanner.png";
import Staking from "../assets/staking.png";
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
