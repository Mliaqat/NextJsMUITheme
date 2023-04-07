import { useState } from "react";
// @mui
import { Box, useTheme } from "@mui/material";
// components
import LeftNavbar from "./left-navbar/LeftNavbar";
import Topnavbar from "./top-navbar/TopNavbar";
import Rightnavbar from "./right-navbar/RightNavbar";
import Footer from "./footer/testFooter";
// ----------------------------------------------------------------------

export default function DashboardLayout({ children }: any) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [rightnavbars, setrightbars] = useState(false);
  const handleDrawer = () => (open ? setOpen(false) : setOpen(true));
  const handleDrawerright = () =>
    rightnavbars ? setrightbars(false) : setrightbars(true);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          width: "100%",
        }}
      >
        {/* leftnavabr */}
        <LeftNavbar open={open} />
        {/* topnavbar */}

        <Box sx={{ width: "100%" }}>
          <Topnavbar handleDrawer={handleDrawer} />
          <Box
            sx={{
              [theme.breakpoints.up("xs")]: {
                width: "100%",
              },
              [theme.breakpoints.up("sm")]: {
                width:
                  rightnavbars === true
                    ? "calc(100% - 290px)"
                    : "calc(100% - 65px)",
                transition: "0.4s",
              },
            }}
          >
            <Rightnavbar
              rightnavbars={rightnavbars}
              handleDrawerright={handleDrawerright}
            />
            <Box
              sx={{
                pt: theme.spacing(2),
                pl: theme.spacing(2),
              }}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
