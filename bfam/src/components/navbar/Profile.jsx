import { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Paper,
  Popper,
  Stack,
  Switch,
  Typography,
} from "@mui/material";

// third-party
import PerfectScrollbar from "react-perfect-scrollbar";
import { Logout, Search, Settings, Person } from "@mui/icons-material";
import useAppState from "../../state/state";
function Profile({ handleLogout }) {
  const theme = useTheme();
  const state = useAppState();
  const navigate = useNavigate();

  const [sdm, setSdm] = useState(true);
  const [value, setValue] = useState("");
  const [notification, setNotification] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(false);

  const anchorRef = useRef(null);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListItemClick = (event, index, route = "") => {
    setSelectedIndex(index);
    handleClose(event);

    if (route && route !== "") {
      navigate(route);
    }
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Chip
        sx={{
          height: "48px",
          alignItems: "center",
          borderRadius: "27px",
          transition: "all .2s ease-in-out",
          borderColor: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            "& svg": {
              stroke: theme.palette.primary.light,
            },
          },
          "& .MuiChip-label": {
            lineHeight: 0,
          },
        }}
        icon={
          <Avatar
            src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
            sx={{
              ...theme.typography.mediumAvatar,
              margin: "8px 0 8px 8px !important",
              cursor: "pointer",
            }}
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            color="inherit"
          />
        }
        label={<Settings stroke={1.5} size="1.5rem" htmlColor="white" />}
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          display: "flex",
          justifyContent: "flex-end",
          margin: 5,
          marginTop: 10,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 14],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Paper
            sx={{
              alignSelf: "auto",
              borderRadius: 5,
              right: 0,
            }}
            placement="bottom-end"
          >
            <ClickAwayListener onClickAway={handleClose}>
              <Card
                border={false}
                elevation={16}
                content={false}
                // boxShadow
                // shadow={theme.shadows[16]}
                sx={{ borderRadius: 2 }}
              >
                <Box sx={{ p: 2 }}>
                  <Stack>
                    <Stack direction="column" spacing={0.5} alignItems="center">
                      <Typography variant="p">
                        Hello, {state.user.email}
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle2">Project Admin</Typography>
                  </Stack>
                  <OutlinedInput
                    sx={{ width: "100%", pr: 1, pl: 2, my: 2 }}
                    id="input-search-profile"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search profile options"
                    startAdornment={
                      <InputAdornment position="start">
                        <Search
                          stroke={1.5}
                          size="1rem"
                          color={theme.palette.grey[500]}
                        />
                      </InputAdornment>
                    }
                    aria-describedby="search-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                  <Divider />
                </Box>
                <PerfectScrollbar
                  style={{
                    height: "100%",
                    maxHeight: "calc(100vh - 250px)",
                    overflowX: "hidden",
                  }}
                >
                  <Box sx={{ p: 2 }}>
                    <Divider />
                    <Card
                      sx={{
                        bgcolor: theme.palette.primary.light,
                        my: 2,
                      }}
                    >
                      <CardContent>
                        <Grid container spacing={3} direction="column">
                          <Grid item>
                            <Grid
                              item
                              container
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              <Grid item>
                                <Typography variant="subtitle1">
                                  Start DND Mode
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Switch
                                  color="primary"
                                  checked={sdm}
                                  onChange={(e) => setSdm(e.target.checked)}
                                  name="sdm"
                                  size="small"
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Grid
                              item
                              container
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              <Grid item>
                                <Typography variant="subtitle1">
                                  Allow Notifications
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Switch
                                  checked={notification}
                                  onChange={(e) =>
                                    setNotification(e.target.checked)
                                  }
                                  name="sdm"
                                  size="small"
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                    <Divider />
                    <List
                      component="nav"
                      sx={{
                        width: "100%",
                        maxWidth: 350,
                        minWidth: 300,
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: "10px",
                        [theme.breakpoints.down("md")]: {
                          minWidth: "100%",
                        },
                        "& .MuiListItemButton-root": {
                          mt: 0.5,
                        },
                      }}
                    >
                      <ListItemButton
                        sx={{
                          borderRadius: 20,
                        }}
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0, "#")}
                      >
                        <ListItemIcon>
                          <Settings stroke={1.5} size="1.3rem" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="body2">
                              Account Settings
                            </Typography>
                          }
                        />
                      </ListItemButton>
                      <ListItemButton
                        sx={{
                          borderRadius: 20,
                        }}
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1, "#")}
                      >
                        <ListItemIcon>
                          <Person stroke={1.5} size="1.3rem" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Grid
                              container
                              spacing={1}
                              justifyContent="space-between"
                            >
                              <Grid item>
                                <Typography variant="body2">
                                  Social Profile
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Chip
                                  label="02"
                                  size="small"
                                  sx={{
                                    bgcolor: theme.palette.warning.dark,
                                    color: theme.palette.background.default,
                                  }}
                                />
                              </Grid>
                            </Grid>
                          }
                        />
                      </ListItemButton>
                      <ListItemButton
                        sx={{
                          borderRadius: 20,
                        }}
                        selected={selectedIndex === 4}
                        onClick={handleLogout}
                      >
                        <ListItemIcon>
                          <Logout stroke={1.5} size="1.3rem" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="body2">Logout</Typography>
                          }
                        />
                      </ListItemButton>
                    </List>
                  </Box>
                </PerfectScrollbar>
              </Card>
            </ClickAwayListener>
          </Paper>
        )}
      </Popper>
    </>
  );
}

export default Profile;
