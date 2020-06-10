import React, { useContext } from "react";
import DataContext from "../../../context/DataContext";

import sabujImage from "./sabuj.png";

const RightSide = () => {
  const { setCv, cv } = useContext(DataContext);
  return (
    <div className="all_cv">
      <div></div>
      <a
        href="https://github.com/sabujhasansarker"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://bit.ly/3cQRiNO" alt="" className="icon_img" />
      </a>
      <img
        className={`cv_img ${cv === "sabuj" && "active"}`}
        onClick={() => setCv("sabuj")}
        src={sabujImage}
        alt="sabuj"
      />
      <img
        src="https://bit.ly/37ibs27"
        alt=""
        onClick={() => setCv("rakib")}
        className={`cv_img ${cv === "rakib" && "active"}`}
      />
      <img
        src="https://bit.ly/37gM9gU"
        alt=""
        onClick={() => setCv("fahad")}
        className={`cv_img ${cv === "fahad" && "active"}`}
      />
    </div>
  );
};

export default RightSide;
