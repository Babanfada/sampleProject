import React from "react";
import { BsSearch } from "react-icons/bs";
import styles from "../styles/searchbar.module.scss";
import { dataContext } from "../App";
const Searchbar = () => {
  const { mode, searchUser } = React.useContext(dataContext);

  return (
    <div
      style={{ border: `${mode ? "3px solid black" : "3px solid white"}` }}
      className={styles.container}
    >
      <BsSearch color={`${mode ? "black" : " white"}`} />
      <input
        className={mode ? styles.place : ""}
        type={"text"}
        placeholder={"Search by first Name only..."}
        onChange={searchUser}
      />
    </div>
  );
};

export default Searchbar;
