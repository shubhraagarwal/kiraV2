import Navbar from "../components/Navbar";
import Inventory from "../components/Inventory";
import StakeFoot from "../components/StakeFoot";
// import Staking from "../assets/staking.png";

export const Staking = () => {
  return (
    <>
      <div className="navBox">
        <Navbar />
      </div>
      <div>
        <div>
          <Inventory />
        </div>
      </div>
      <StakeFoot />
    </>
  );
};
