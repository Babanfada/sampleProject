import React from "react";
import styles from "../styles/header.module.css";
import { GoLightBulb } from "react-icons/go";
import { MdOutlineNightlight } from "react-icons/md";
import { dataContext } from "../App";
const Header = () => {
  const { count, mode, handleToggle } = React.useContext(dataContext);
  return (
    <div className={styles.wrapper}>
      <p id={mode ? "toggle" : ""}>LOGO</p>
      <div onClick={handleToggle}>
        {mode ? (
          <GoLightBulb
            color={`${mode ? "black" : "white"}`}
            fontSize={"small"}
          />
        ) : (
          <MdOutlineNightlight
            color={`${mode ? "black" : "white"}`}
            fontSize={"small"}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
