import Navbar from "../components/Navbar";
import SuperDetails from "../components/SuperDetails";
import Model from "../assets/Supernova.glb";
import Staking from "../assets/staking.png";
import SuperLoad from "../assets/SupernovaPng.png";
const Supernova = () => {
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
        loading={SuperLoad}
        class="superNova"
        title="SUPERNOVA"
        mod="Model"
        img={Model}
        class1="cross1"
        head="Assignment 2"
        para="Actions speak louder than words. KIRA's form of action is visual representation. Constant content, exclusive airdrops, social and metaverse identity workshops, game design, engineering and much more will be offered to KIRA. All KIRA will own a piece of the IP that embodies this project. All rights will be given to KIRA to do with which they please. Freedom of expression given to the governing body that has sweat equity and is directly involved. "
      />
      <div className='res'>
      <h1>Please open the site in a Desktop</h1>
      </div>
    </>
  );
};

export default Supernova;