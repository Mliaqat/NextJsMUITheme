import {
  Box,
  Collapse,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Drawer, DrawerHeader } from "./LeftNavbarStyles";
import Image from "next/image";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MyAvatar from "@root/components/MyAvatar";
import { useTheme } from "@emotion/react";
import List from "@mui/material/List";
import { navlinks } from "./LeftNavBarData";
import { useRouter } from "next/router";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { NavLink } from "@root/components/NavLink";
import Logo from "@root/components/Logo";

const LeftNavbar = (props: any) => {
  const router = useRouter();
  const theme: any = useTheme();
  const { open } = props;
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Drawer variant="permanent" open={open} sx={{}}>
      <Box sx={{ minHeight: "100vh" }}>
        <DrawerHeader>
          <Logo
            onlyIcon={!open}
            sx={{ height: "30px", width: "300px" }}
            variant="white"
          />
        </DrawerHeader>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          {open ? (
            <MyAvatar
              variant="square"
              sx={{ width: "75px", height: "75px", borderRadius: "10px" }}
            />
          ) : (
            <MyAvatar
              variant="square"
              sx={{ width: "55px", height: "55px", borderRadius: "10px" }}
            />
          )}
        </Box>
        {open ? (
          <Box sx={{ textAlign: "center", mt: 1.5 }}>
            <Typography variant="subtitle1" color="common.white">
              Gabrielle Grace
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: theme.palette.primary.main }}
            >
              Social Worker
            </Typography>
          </Box>
        ) : (
          ""
        )}

        {open ? (
          <Stack
            direction="row"
            justifyContent="center"
            spacing={6}
            sx={{
              mt: 2,
            }}
          >
            <Link href="#">
              <PermIdentityOutlinedIcon
                sx={{
                  color: theme.palette.grey[400],
                  width: "27px",
                  height: "27px",
                }}
              />
            </Link>
            <Link href="#">
              <EmailOutlinedIcon
                sx={{
                  color: theme.palette.grey[400],
                  width: "27px",
                  height: "27px",
                }}
              />
            </Link>
          </Stack>
        ) : (
          ""
        )}
        <List
          sx={{
            mt: open ? "auto" : 2,
            height: open ? "65vh" : "75vh",
            overflowY: "auto",
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
              width: 4.5,
              height: 6,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
            },
          }}
        >
          {navlinks.map((text, index) => {
            return (
              <div key={index}>
                {index === 4 ? (
                  open === true ? (
                    <>
                      <ListItemButton
                        onClick={() => setExpanded(!expanded)}
                        sx={{ color: "white", px: 2.1 }}
                      >
                        <ListItemIcon>{text.img}</ListItemIcon>
                        <ListItemText
                          primary={text.text}
                          disableTypography
                          sx={{ fontSize: "14px" }}
                        />
                        {expanded ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse
                        in={expanded}
                        timeout="auto"
                        unmountOnExit
                        sx={{ color: "common.white" }}
                      >
                        <List component="div" disablePadding>
                          {text.sublist?.map((item, index) => (
                            <div key={index}>
                              <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText
                                  disableTypography
                                  sx={{ fontSize: "14px" }}
                                  primary={item.list}
                                />
                              </ListItemButton>
                            </div>
                          ))}
                        </List>
                      </Collapse>
                    </>
                  ) : (
                    ""
                  )
                ) : (
                  <NavLink href={`${text.link}`}>
                    <ListItem sx={{ padding: open ? "2px" : "5px" }}>
                      <ListItemButton
                        sx={{
                          padding: "6px 22px",
                          justifyContent: open ? "initial" : "center",
                          px: 2.1,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 2 : "auto",
                            justifyContent: "center",
                            color: "common.white",
                          }}
                        >
                          {text.img}
                        </ListItemIcon>
                        <ListItemText
                          disableTypography
                          primary={text.text}
                          sx={{
                            opacity: open ? 1 : 0,
                            color: "common.white",
                            fontSize: "14px",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </NavLink>
                )}
              </div>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default LeftNavbar;
