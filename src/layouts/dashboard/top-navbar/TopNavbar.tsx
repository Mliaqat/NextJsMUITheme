import {
  Badge,
  Box,
  Grid,
  IconButton,
  useTheme,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { createGradient } from "@root/theme/palette";
import { AiFillMessage } from "react-icons/ai";
import MyAvatar from "@root/components/MyAvatar";
import { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import EmailIcon from "@mui/icons-material/Email";
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 5,
    top: 13,
    backgroundColor: "#FA7422",
    color: "white",
    padding: "0 4px",
  },
}));
const Topnavbar = (props: any) => {
  const { handleDrawer } = props;
  const theme: any = useTheme();

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container>
        <Grid xs={12} item>
          <Box
            sx={{
              background: "transparent",
              display: { xs: "none", sm: "flex" },
              gap: "18px",
              justifyContent: "flex-end",
              flexWrap: "wrap",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "14px", fontWeight: "600" }}
            >
              (+44) - 750028 - 7504
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "14px", fontWeight: "600" }}
            >
              contact-us@fosterapp.co.uk
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "14px", fontWeight: "600" }}
            >
              FAQ
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "14px", fontWeight: "600" }}
            >
              Help
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "14px", fontWeight: "600" }}
            >
              OOH
            </Typography>
            <Box sx={{ mt: 0.1 }}>
              <svg
                width="28"
                height="17"
                viewBox="0 0 28 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5171 18.3448H0.482779C0.216179 18.3448 0 18.1286 0 17.862V0.482779C0 0.216179 0.216179 0 0.482779 0H27.5172C27.7838 0 27.9999 0.216179 27.9999 0.482779V17.862C27.9999 18.1286 27.7837 18.3448 27.5171 18.3448Z"
                  fill="#41479B"
                />
                <path
                  d="M27.9999 0.482779C27.9999 0.216179 27.7837 0 27.5171 0H24.3572L16.4137 5.85958V0H11.5861V5.85958L2.6426 0H0.482779C0.216179 0 0 0.216179 0 0.482779V1.73134L7.67312 6.75858H0V11.5862H7.67312L0 16.6135V17.862C0 18.1286 0.216179 18.3448 0.482779 18.3448H2.64265L11.5862 12.4852V18.3448H16.4138V12.4852L24.3573 18.3448H27.5172C27.7838 18.3448 28 18.1286 28 17.862V16.6135L20.3269 11.5862H27.9999V6.75864H20.3268L27.9999 1.73134V0.482779Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M27.9999 7.72414H15.4482V0H12.5517V7.72414H0V10.6207H12.5517V18.3448H15.4482V10.6207H27.9999V7.72414Z"
                  fill="#FF4B55"
                />
                <path
                  d="M9.78813 11.5862L0.015624 17.9297C0.0498046 18.1629 0.24203 18.3448 0.484678 18.3448H1.14962L11.5615 11.5862H9.78813V11.5862V11.5862Z"
                  fill="#FF4B55"
                />
                <path
                  d="M18.9414 11.5862H17.168L27.5647 18.3348C27.8071 18.249 27.9983 18.1111 27.9983 17.862V17.4651L18.9414 11.5862Z"
                  fill="#FF4B55"
                />
                <path
                  d="M0 1.01574L8.84726 6.75867H10.6207L0.281247 0.0471191C0.116101 0.123845 0 0.288727 0 0.482812V1.01574Z"
                  fill="#FF4B55"
                />
                <path
                  d="M18.187 6.75858L27.9829 0.399709C27.9423 0.174288 27.7541 0 27.517 0H26.8243L16.4136 6.75858H18.187Z"
                  fill="#FF4B55"
                />
              </svg>
            </Box>
          </Box>
          <Box
            sx={{
              px: 1.4,
              py: 1,
              boxShadow: "0px 1px 16px rgba(0, 0, 0, 0.24)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              background: createGradient(
                theme.palette.primary.darker,
                theme.palette.primary.lighter
              ),
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
            >
              <MenuIcon sx={{ color: "white", fontSize: "24px" }} />
            </IconButton>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton color="inherit" aria-label="open drawer" edge="start">
                <AiFillMessage style={{ color: "white ", fontSize: "24px" }} />
              </IconButton>
              <StyledBadge badgeContent={4}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                >
                  <EmailIcon sx={{ color: "white", fontSize: "24px" }} />
                </IconButton>
              </StyledBadge>

              <StyledBadge badgeContent={4}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                >
                  <NotificationsIcon
                    sx={{ color: "white", fontSize: "24px" }}
                  />
                </IconButton>
              </StyledBadge>

              <IconButton color="inherit" aria-label="open drawer" edge="start">
                <SettingsIcon sx={{ color: "white", fontSize: "24px" }} />
              </IconButton>
              <IconButton color="inherit" aria-label="open drawer" edge="start">
                <MyAvatar sx={{ width: "30px", height: "30px" }} />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Topnavbar;
