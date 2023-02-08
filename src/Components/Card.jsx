import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import styles from "../styles/card.module.scss";
import { Link } from "react-router-dom";

export default function MediaCard({ user }) {
  return (
    <Card sx={{ maxWidth: 345, objectFit: "cover" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={user.profile.avatar}
        title="green iguana"
        // className={styles.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <span>{user.profile.firstName}</span>{" "}
          <span>{user.profile.lastName}</span>
        </Typography>
        <div variant="body2" color="text.secondary">
          <h3>User details</h3>
          {/* <p>Address : {user.profile.address}</p> */}
          <p>PhoneNumber : {user.profile.phoneNumber}</p>
          <p>BVN : {user.profile.bvn}</p>
        </div>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Link to={`userdetails/${user.id}`}>
          <Button size="small">More Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
