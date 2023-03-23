import React from "react";

import { Link } from "react-router-dom";

import styles from "./Item.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = ({ element }) => {
  return (
    <Card sx={{ width: 300, height: 300, marginTop: 2 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={element.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {element.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {element.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${element.id}`}>
          <Button size="small" variant="contained" color="secondary">
            Ver mas...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
