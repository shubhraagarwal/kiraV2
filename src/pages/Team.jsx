import Navbar from "../components/Navbar";
import Staking from '../assets/staking.png';
import Antoni from '../assets/Antoni.png'
import Twitter from '../assets/Twitter.png'
import Instagram from '../assets/Instagram.png'
import Mary from '../assets/Mary.png'
import Marvin from '../assets/Marvin.png'
import Marc from '../assets/Marc.png'
import Nicky from '../assets/Nicky.png'
import Kate from '../assets/Kate.png'
import Jack from '../assets/Jack.png'
const Team = () => {
    return (  
        <>
        <div className="navBox">
        <Navbar home = '' market ='' purpose = '' development = '' reserve = '' staking = '' weapon = '' land = '' team ={Staking}/>
        </div>
        <div className="Team">
        <div className="TeamSetOne">
        <div className="MemberOne">
        <div className="team_head">
        <h1>Antoni Tudisco</h1>
        <h2>ARTIST</h2>
        </div>
        <div className="team_cont">
        <div className="socials">
        <img src={Twitter} alt="" />
        <img src={Instagram} alt="" />
        </div>
        <div className="team_pic">
        <img src={Antoni} alt="" />
        </div>
        </div>
        </div>
        <div className="MemberOne" id="Mary">
        <div className="team_head">
        <h1>Mary</h1>
        <h2>CIO</h2>
        </div>
        <div className="team_cont">
        <div className="socials">
        <img src={Twitter} alt="" />
        <img src={Instagram} alt="" />
        </div>
        <div className="team_pic">
        <img src={Mary} alt="" />
        </div>
        </div>
        </div>
      {/*  <div className="MemberTwo" id="Mary">
        <div className="team_head">
        <h1>Mary</h1>
        </div>
        <div className="team_container">
        <div className="team_picture">
        <img src={Mary} alt="" />
        </div>
        <div className="socialsHandles" id="cio">
        <h2>CIO</h2>
        <img src={Twitter} alt=""/>
        <img src={Instagram} alt="" />
        </div>
 
        </div>
    </div>*/}
        
       
        
        </div>


        <div className="TeamSetTwo">   
   {/*     <div className="MemberTwo" id="Marvin">
        <div className="team_head">
        <h1>Marvin</h1>
        </div>
        <div className="team_container">
        <div className="team_picture">
        <img src={Marvin} alt="" />
        </div>
        <div className="socialsHandles" id="pm">
        <h2>PROJECT MANAGER</h2>
        <img src={Twitter} alt="" className="twitter" />
        <img src={Instagram} alt="" className="insta" />
        </div>
        </div>
</div>*/}
<div className="MemberOne" id='Marvin'>
<div className="team_head">
<h1>Marvin</h1>
<h2>PROJECT MANAGER</h2>
</div>
<div className="team_cont">
<div className="socials">
<img src={Twitter} alt="" />
<img src={Instagram} alt="" />
</div>
<div className="team_pic">
<img src={Marvin} alt="" />
</div>
</div>
</div>
        <div className="MemberOne">
        <div className="team_head">
        <h1>Marc Tudisco</h1>
        <h2>ARTIST</h2>
        </div>
        <div className="team_cont">
        <div className="socials">
        <img src={Twitter} alt="" />
        <img src={Instagram} alt="" />
        </div>
        <div className="team_pic">
        <img src={Marc} alt="" />
        </div>
        </div>
        </div>
        </div>


        <div className="TeamSetThree">
       
        <div className="MemberTwo">
        <div className="team_head">
        <h1>Nicky Nick</h1>
        </div>
        <div className="team_container">
        <div className="team_picture">
        <img src={Nicky} alt="" />
        </div>
        <div className="socialsHandles">
        <h2>STRATEGIC ADVISOR</h2>
        <img src={Twitter} alt="" className="twitter"/>
        <img src={Instagram} alt="" className="insta"/>
        </div>
 
        </div>
        </div>
        <div className="MemberTwo">
        <div className="team_head">
        <h1>Kate</h1>
        </div>
        <div className="team_container">
        <div className="team_picture">
        <img src={Kate} alt="" />
        </div>
        <div className="socialsHandles" id="pr">
        <h2 id="prcom">PR & COMMUNICATIONS</h2>
        <img src={Twitter} alt="" className="twitter"/>
        <img src={Instagram} alt="" />
        </div>
 
        </div>
        </div>
        <div className="MemberTwo" id="Kate">
        <div className="team_head">
        <h1>Jack (aka Monique)</h1>
        </div>
        <div className="team_container">
        <div className="team_picture">
        <img src={Jack} alt="" />
        </div>
        <div className="socialsHandles">
        <h2>PROJECT MANAGER</h2>
        <img src={Twitter} alt="" className="twitter"/>
        <img src={Instagram} alt="" />
        </div>
 
        </div>
        </div>
        </div>
        </div>
        </>

    );
}
 
export default Team;