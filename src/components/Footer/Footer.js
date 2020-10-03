import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="mt-auto border-top shadow-lg text-center mt-md-3">
      <a href="https://www.facebook.com/zan.hong/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f ml-md-2 mr-md-2"></i></a>
      <a href="https://www.instagram.com/zanhong/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram ml-md-2 mr-md-2"></i></a>
      <a href="https://www.linkedin.com/in/zhmok/" target="_blank" rel="noopener noreferrer"><i
        className="fab fa-linkedin-in ml-md-2 mr-md-2"></i></a>
      <a href="https://github.com/ZanHong" target="_blank" rel="noopener noreferrer"><i className="fab fa-github ml-md-2 mr-md-2"></i></a>
    </footer>
  )
}

export default Footer;