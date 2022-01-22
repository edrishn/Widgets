import React from "react";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CardLink from "./CardLink";
import BuildIcon from "@material-ui/icons/Build";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

export default function CardsList() {
  return (
    <Card>
      <List>
        <ListItem>
          <CardLink icon={<BuildIcon />} text="Build" link="/Build" />
        </ListItem>
        <ListItem>
          <CardLink icon={<AddAPhotoIcon />} text="Photo" link="/Photo" />
        </ListItem>
      </List>
    </Card>
  );
}
