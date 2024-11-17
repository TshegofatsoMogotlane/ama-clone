import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not_found">
      <Link to="/home">
        <div>
          <img className="ff" src="https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png" alt="" />
        </div>
        <div>
          <img className="dd" src="https://m.media-amazon.com/images/I/51XQbI66UeL._AC_UL320_.jpg" alt="" />
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
