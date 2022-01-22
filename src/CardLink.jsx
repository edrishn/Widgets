import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default function CardLink(props) {
  return (
    <Card>
      <CardActionArea>
        <Link to={props.link}>
          <CardContent>
            {props.icon}
            <Typography>{props.text}</Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
