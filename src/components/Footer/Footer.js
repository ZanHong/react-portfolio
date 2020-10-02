import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="footer mt-auto py-2 border-top shadow-lg">
      <div className="text-center mt-md-2">
        <a href="https://www.facebook.com/zan.hong/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f ml-md-2 mr-md-2"></i></a>
        <a href="https://www.instagram.com/zanhong/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram ml-md-2 mr-md-2"></i></a>
        <a href="https://www.linkedin.com/in/zhmok/" target="_blank" rel="noopener noreferrer"><i
          className="fab fa-linkedin-in ml-md-2 mr-md-2"></i></a>
        <a href="https://github.com/ZanHong" target="_blank" rel="noopener noreferrer"><i className="fab fa-github ml-md-2 mr-md-2"></i></a>
        {/* <h6 className="text-light mt-md-2">&copy; 2020 | by <a href="https://github.com/ZanHong" target="_blank" rel="noopener noreferrer">Zan Hong
          Mok</a></h6> */}
      </div>
    </div>
  )
}

export default Footer;