import { Box, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import React from "react";
import { createGradient } from "@root/theme/palette";
const Footer = () => {
  const theme: any = useTheme();

  return (
    <Box
      sx={{
        background: createGradient(
          theme.palette.primary.darker,
          theme.palette.primary.lighter
        ),
        display: "flex",
        position: "fixed",
        width: "100%",
        zIndex: "1300",
        bottom: "0px",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "10px",
        p: 1,
        px: { xs: 1, sm: 2 },
        "& a": {
          textDecoration: "none",
        },
      }}
    >
      <Box>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.primary.contrastText,
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          Copyrights © 2020 All rights reserved FosterApp
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: { xs: "10px", sm: "25px" },
          flexWrap: "wrap",
        }}
      >
        <Link href={"#"}>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.primary.contrastText,
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Cookie Policy
          </Typography>
        </Link>
        <Link href={"#"}>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.primary.contrastText,
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Privacy Policy
          </Typography>
        </Link>
        <Link href={"#"}>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: theme.palette.primary.contrastText,
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Terms & Conditions
          </Typography>
        </Link>
        <Link href={"#"}>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: theme.palette.primary.contrastText,
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Data Security
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
