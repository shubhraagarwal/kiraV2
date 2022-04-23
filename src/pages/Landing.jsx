import Navbar from "../components/Navbar";

import Staking from "../assets/staking.png";
const Landing = () => {
  return (
    <>
      <div className="Landing">
        <Navbar home={Staking} market="" />
      </div>
    </>
  );
};

export default Landing;
