import React from "react";
import "./index.css";

function About() {

  return (
    <div className="col-md-12 profile">
        <div className="card mb-1" id="no-hover-shadow">
          <div className="card-img-container">
              <img className="bd-placeholder-img" src={process.env.PUBLIC_URL + "/images/mitchell.jpg"} width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail">
              </img>
          </div>
          <div className="card-body">
                  <p className="card-text">So, here's a little about me. I'm currently training to become a top-knotch software developer. Before this, I was getting a Physics degree from UNC Chapel Hill, and then a Master's in Accounting from Kenan Flagler Business School. You may be assuming I'm a bit nerdy at this point, and you'd be right. I'm super into science and technology. And I'm also pretty well versed in the MCU, Star Wars, and some Japanese Animes. I also love to go on runs, make things out of wood, and watch comedy. I'm a big stickler for quality, design, and crafting the user experience. I'm also a big proponent for keeping things simple and making sure everything is as easy to follow and understand as possible. I'm trying to be a better communicator all the time and keep being okay with looking stupid when I need too.</p>
                      <div className="badges">
                        <img src="https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Code-React-informational?style=flat&logo=react&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Code-Redux-informational?style=flat&logo=redux&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Code-Babel-informational?style=flat&logo=babel&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Code-jQuery-informational?style=flat&logo=jquery&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=html5&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Code-CSS3-informational?style=flat&logo=css3&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Code-Bootstrap-informational?style=flat&logo=bootstrap&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Code-Material_Design-informational?style=flat&logo=material-design&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Code-Handlebars-informational?style=flat&logo=handlebars&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Code-Express-informational?style=flat&logo=expressjs&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Code-NodeJS-informational?style=flat&logo=node-dot-js&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Data-PostgreSQL-informational?style=flat&logo=postgresql&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Data-MongoDB-informational?style=flat&logo=mongodb&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Data-mysql-informational?style=flat&logo=mysql&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/OS-Mac-informational?style=flat&logo=ios&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Editor-VS_Code-informational?style=flat&logo=visual-studio-code&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Shell-Bash-informational?style=flat&logo=gnu-bash&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Code-NPM-informational?style=flat&logo=NPM&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Code-Homebrew-informational?style=flat&logo=homebrew&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Code-JSON-informational?style=flat&logo=json&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Code-TravisCI-informational?style=flat&logo=travisci&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Code-Nodemon-informational?style=flat&logo=nodemon&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Tools-Postman-informational?style=flat&logo=postman&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Tools-Heroku-informational?style=flat&logo=heroku&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Code-GIT-informational?style=flat&logo=git&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Tools-Github-informational?style=flat&logo=github&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Tools-Gitlab-informational?style=flat&logo=gitlab&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Tools-Office_365-informational?style=flat&logo=microsoft-office&logoColor=white&color=white" ></img>
                        <img src="https://img.shields.io/badge/Tools-Microsoft_Teams-informational?style=flat&logo=microsoft-teams&logoColor=white&color=white" ></img>
                      </div>
                      
                      <button id="to-linkedin" type="button" className="btn btn-primary"><a class="button-link" href="https://www.linkedin.com/in/mitchellmunderwood">Go to LinkedIn</a></button>
                      <button id="to-github" type="button" className="btn btn-dark"><a class="button-link" href="https://www.github.com/mitchellmunderwood">Go to Github</a></button>
                      <button id="to-resume" type="button" className="btn btn-secondary"><a class="button-link" href="https://www.linkedin.com/in/mitchellmunderwood/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAB5SiFEBZ-gpkNv1miIqwVWwrQn4S9EG2Sg,1604634574699)/">Go to Resume</a></button>

                    <p id="contact-block">Have a position you think I should consider? Just want to get in touch? <br/> 
                      Email me at <a className="contact">mitchellmunderwood@gmail.com</a>. <br/>
                      Call or Message me at <a className="contact">(919) 757-7864</a>.
                    </p>
          </div>
        </div>
    </div>

)
}

export default About;