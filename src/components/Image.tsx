import NextImage from "next/image";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

export default function Image({ src, alt, sx, ...other }: any) {
  return (
    <Box sx={{ position: "relative", ...sx }}>
      <NextImage alt={alt} src={src} {...other} />
    </Box>
  );
}
