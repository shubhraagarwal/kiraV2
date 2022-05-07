import Navbar from "../components/Navbar";
import Bars from "../assets/statsBlur.png";
import ChartBlur from "../assets/chartBlur.png";
import TBA from "../assets/TBA.png";
import Staking from "../assets/staking.png";
const Chart = () => {
  return (
    <>
      <div className="navBox">
        <Navbar
          home=""
          market=""
          purpose=""
          development=""
          reserve={Staking}
          staking=""
          weapon=""
          land=""
        />
      </div>

      <div className="chart">
    <div>
          <p>
            <strong>KIRA</strong> is an ongoing movement and to defeat the
            Shogun. We will need to deploy funds to develop and grow.{" "}
            <strong>KIRA's</strong> earn together and work together to raise
            awareness and build a reserve of currency that goes towards the
            project and end goal. The Treasury (royalties) will be used
            primarily to build and deploy incentives and advancements to the
            community, starting off with weekly deposits to the{" "}
            <strong>KIRA RESERVE .</strong> <strong>KIRA RESERVE</strong> is
            built exclusively for holders and will not be used by the team for
            anything that does not pertain to bettering <strong>KIRA</strong> as
            a project.
          </p>
          <div  className="Tokenomics_respon">
          <h1>Tokenomics</h1>
          <img src={ChartBlur} alt="" className="Chartblur" />
          <img src={TBA} alt="" id="aboveChart" />
        </div>
        </div>
        <div className="bars">
          <img src={Bars} alt="" className="BarBlur" />
          <img src={TBA} alt="" id="aboveBar" />
        </div>
      </div>
      <div className='res'>
      <h1>Please open the site in a Desktop</h1>
      </div>
    </>
  );
};

export default Chart;
