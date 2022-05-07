import SuperDetails from "../components/SuperDetails";
import Navbar from "../components/Navbar";
import AssentModel from "../assets/Assent.glb";
import Staking from "../assets/staking.png";
import AssentLoad from '../assets/AssentPng.png'
const Assent = () => {
  return (
    <>
      <div className="navBox">
        <Navbar
          home=""
          market=""
          purpose={Staking}
          development=""
          reserve=""
          staking=""
          weapon=""
          land=""
        />
      </div>
      
      <SuperDetails
      loading = {AssentLoad}
        class="Assent"
        title="ASSENT"
        mod="Model"
        img={AssentModel}
        class1="Cross"
        head="Assignment 1"
        para="Cultivate KIRA community. We are calling all defenders of the forgotten to embark in this battle with us. Thoroughout this journey we will form plans and partnerships, gather resources, create visions the masses can explore through art and visual expression and most importantly obtain our Freedom."
      />
      <div className='res'>
      <h1>Please open the site in a Desktop</h1>
      </div>
    </>
  );
};

export default Assent;