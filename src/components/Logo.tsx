import { forwardRef } from "react";
import NextLink from "next/link";
// @mui
import { Box } from "@mui/material";
// assets
import logoImgBlack from "@root/assets/img/logo.png";
import logoImgWhite from "@root/assets/svg/logo.svg";
import logoIcon from "@root/assets/svg/logo-icon.svg";
import Image from "next/image";
import { useTheme } from "@emotion/react";

// ----------------------------------------------------------------------

const Logo = forwardRef(
  (
    { disabledLink = false, variant = "black", onlyIcon = false, sx }: any,
    ref
  ) => {
    const theme: any = useTheme();

    let logoImg = variant === "white" ? logoImgWhite : logoImgBlack;

    if (variant === "theme")
      logoImg = theme.palette.mode === "dark" ? logoImgWhite : logoImgBlack;

    if (onlyIcon) logoImg = logoIcon;

    const logo = (
      <Box ref={ref} sx={{ cursor: "pointer", position: "relative", ...sx }}>
        <Image
          src={logoImg}
          alt="Logo"
          fill
          style={{
            objectFit: "contain",
          }}
          quality={100}
        />
      </Box>
    );

    if (disabledLink) {
      return <>{logo}</>;
    }

    return <NextLink href="/">{logo}</NextLink>;
  }
);

Logo.displayName = "Logo";

export default Logo;
