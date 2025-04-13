import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CvIcon from '@mui/icons-material/Article';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media-hosting.imagekit.io/f8190c0729384273/Screen%20Shot%202025-04-12%20at%2013.28.54.png?Expires=1839060702&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=10el3zQQTTNI8xHrdF5~ye8HhiK1fG6AiPn~5dPv1Bf6uGIDUMtIHf2bhAo2CYe-tFQlGxzEYrfIHWBydC2p1YP5F2NIG-d~PHeF8oQmaD1xJdpkYmtoxMAPqw-mv0xjnsX1dW-wnNjbeGxCUMKtkvwfIab556n9DG00MPmAOSTpnLNqsyBTijX9LLfDXhHm-~RkiaDJMEbcLwsgEVID38Exa4O57cL03lpbUzHU~k~ut53GFGMJMGko81qRqITTbsxMBLRZ8XDwMTC-KX0YNqPxwDXyYX8ZEhpVZCQv4pOSDWecKditsJtdz7c5~x6~EQfHfR3yNWfbZbU4MJtjMg__" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
          <a href="https://github.com/maquebermans" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/mukaromalisyaban/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          <a href="https://drive.google.com/file/d/1Jr0YOJi3BKPoTOwuKKJqQ3Ncmm_0rdM8/view?usp=sharing" target="_blank" rel="noreferrer"><CvIcon/></a>
          </div>
          <h1>Mukarom Alisyaban</h1>
          <p>Engineer & Database Geek</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/maquebermans" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mukaromalisyaban/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://drive.google.com/file/d/1Jr0YOJi3BKPoTOwuKKJqQ3Ncmm_0rdM8/view?usp=sharing" target="_blank" rel="noreferrer"><CvIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
