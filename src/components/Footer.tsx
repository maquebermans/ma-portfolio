import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CvIcon from '@mui/icons-material/Article';
import MediumIcon from '@mui/icons-material/Newspaper';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
      <a href="https://github.com/maquebermans" target="_blank" rel="noreferrer"><GitHubIcon/></a>
      <a href="https://www.linkedin.com/in/mukaromalisyaban/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      <a href="https://drive.google.com/file/d/16XTxuAcqShdBR8cuVmkPhH_N1u4xFnx_/view?usp=sharing" target="_blank" rel="noreferrer"><CvIcon/></a>
      <a href="https://medium.com/@mukaromalisyaban" target="_blank" rel="noreferrer"><MediumIcon/></a>
      </div>
      <p>A portfolio designed by Yuji Sato</p>
    </footer>
  );
}

export default Footer;
