import Navbar from "../components/Navbar";
import Staking from "../assets/staking.png";
import Antoni from "../assets/Antoni.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";
import Mary from "../assets/Mary.png";
import Marvin from "../assets/Marvin.png";
import Marc from "../assets/Marc.png";
import Nicky from "../assets/Nicky.png";
import Kate from "../assets/Kate.png";
import Jack from "../assets/Jack.png";
const Team = () => {
  return (
    <>
      <div className="navBox">
        <Navbar
          home=""
          market=""
          purpose=""
          development=""
          reserve=""
          staking=""
          weapon=""
          land=""
          team={Staking}
        />
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
                <a
                  href="https://twitter.com/AntoniTudisco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Twitter} alt="Twitter" />
                </a>
                <a
                  href="http://instagram.com/antonitudisco
"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Instagram} alt="Instagram" />
                </a>
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
                <a
                  href="https://twitter.com/FomoFairy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Twitter} alt="Twitter" />
                </a>
                <a
                  href="mailto: Fomofairy@gmail.com "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-mail"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>{" "}
                </a>
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
          <div className="MemberOne" id="Marvin">
            <div className="team_head">
              <h1>Marvin</h1>
              <h2>PROJECT MANAGER</h2>
            </div>
            <div className="team_cont">
              <div className="socials">
                <a
                  href="mailto: gilmanicgeyf@gmail.com "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-mail"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>{" "}
                </a>
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
                <a
                  href=" https://twitter.com/marc_tudisco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Twitter} alt="Twitter" />
                </a>
                <a
                  href=" http://instagram.com/marctudisco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Instagram} alt="Twitter" />
                </a>
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
                <h2>PR & COMMUNICATIONS</h2>
                <a
                  href="mailto: Nikimotosatoshi@gmail.com "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-mail"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/katekittywong"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
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
                <a
                  href="mailto: gockgo596@gmail.com  "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-mail"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>{" "}
                </a>
                <a
                  href="www.linkedin.com/in/jackson-lam-34204b228 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
