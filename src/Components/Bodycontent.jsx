import React from "react";
import styles from "../styles/bodycontent.module.scss";
import MediaCard from "./Card";
import { dataContext } from "../App";
import Skeletons from "./Skeleton";
import { Pagination, Stack } from "@mui/material";

const Bodycontent = () => {
  const { users } = React.useContext(dataContext);

  const [pageNumber, setpageNumber] = React.useState(0);
  const usersperpage = 6;
  const pagesVisited = pageNumber * usersperpage;
  const displayUsers = users.slice(pagesVisited, pagesVisited + usersperpage);
  const pageCount = Math.floor(users.length / usersperpage);
  const handleChange = (e, p) => {
    setpageNumber(p);
  };
  return (
    <>
      <div className={styles.wrapper}>
        {users ? (
          displayUsers.map((user, index) => {
            return <MediaCard key={index} user={user} />;
          })
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "5vw",
              border: "1px solid blue",
              width: "100vw",
            }}
          >
            <Skeletons />
            <Skeletons />
            <Skeletons />
          </div>
        )}
      </div>
      <Pagination
        count={pageCount}
        size="small"
        onChange={handleChange}
        shape="rounded"
        className={styles.page}
      />
    </>
  );
};

export default Bodycontent;
