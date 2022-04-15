import SuperDetails from "../components/SuperDetails";
import Navbar from "../components/Navbar";
import AssentModel from "../assets/Assent.glb";
import Staking from "../assets/staking.png";
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
        class="Assent"
        title="ASSENT"
        mod="Model"
        img={AssentModel}
        para="Cultivate KIRA community. We are calling all defenders of the forgotten to embark in this battle with us. Thoroughout this journey we will form plans and partnerships, gather resources, create visions the masses can explore through art and visual expression and most importantly obtain our Freedom."
      />
    </>
  );
};

export default Assent;
