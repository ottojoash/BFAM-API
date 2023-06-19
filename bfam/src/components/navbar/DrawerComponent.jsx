import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

//pages link
import PAGES from "./pages/pages";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {PAGES.map((page, index) => {
            return (
              <ListItemButton
                key={index}
                onClick={() => setOpenDrawer(false)}
                LinkComponent={Link}
                to={page}
              >
                <ListItemIcon>
                  <MenuIcon />
                </ListItemIcon>
                <ListItemText color="grey">{page}</ListItemText>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "grey", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
}

export default DrawerComponent;
