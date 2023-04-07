import React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import iconToClose from "@root/assets/img/iconToClose.png";
import iconToOpen from "@root/assets/img/iconToOpen.png";
import arrowLeftIcon from "@root/assets/img/arrowLeftIcon.png";
import { useTheme } from "@emotion/react";
const drawerWidth = 290;
const openedMixintwo = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  height: "81.1%",
  top: "110px",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "10px 0px 0px 10px",
  zIndex: "9",
});

const closedMixintwo = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  height: "81.1%",
  borderRadius: "10px 0px 0px 10px",
  backgroundColor: theme.palette.primary.main,
  top: "110px",
  width: `calc(${theme.spacing(0)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixintwo(theme),
    "& .MuiDrawer-paper": openedMixintwo(theme),
  }),
  ...(!open && {
    ...closedMixintwo(theme),
    "& .MuiDrawer-paper": closedMixintwo(theme),
  }),
}));
const Rightnavbar = (props: any) => {
  const theme: any = useTheme();
  console.log(theme);

  const { rightnavbars, handleDrawerright } = props;
  function useWindowSize() {
    const [size, setSize] = React.useState([0]);
    React.useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [width] = useWindowSize();
  return (
    <Drawer variant="permanent" anchor="right" open={rightnavbars}>
      <Box sx={{}}>
        <IconButton
          onClick={handleDrawerright}
          sx={{
            position: "fixed",
            right: rightnavbars ? { xs: "266px" } : { xs: "-4px", sm: "58px" },
            top: "13%",
            transition: theme.transitions.create("right", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }}
        >
          <Image
            alt=""
            src={
              rightnavbars
                ? iconToClose
                : width < 600
                ? arrowLeftIcon
                : iconToOpen
            }
          />
        </IconButton>
      </Box>
    </Drawer>
  );
};

export default Rightnavbar;
