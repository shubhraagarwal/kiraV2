import Navbar from "../components/Navbar";

import Staking from "../assets/staking.png";
const Landing = () => {
  return (
    <>
      <div className="Landing">
        <Navbar home={Staking} market="" />
       
      </div>
      <div className='res'>
      <h1>Please open the site in a Desktop</h1>
      </div>
    </>
  );
};

export default Landing;
