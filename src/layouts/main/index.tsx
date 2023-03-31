// next
import { useRouter } from "next/router";
// @mui
import { Box, Link, Container, Typography, Stack } from "@mui/material";
// components
import Logo from "../../components/Logo";

// ----------------------------------------------------------------------

export default function MainLayout({ children }: any) {
  const { pathname } = useRouter();

  const isHome = pathname === "/";

  return (
    <Stack sx={{ minHeight: 1 }}>
      <header>Header</header>

      {children}

      <Box sx={{ flexGrow: 1 }} />

      {/* {!isHome ? (
        <MainFooter />
      ) : (
        <Box
          sx={{
            py: 5,
            textAlign: "center",
            position: "relative",
            bgcolor: "background.default",
          }}
        >
          <Container>
            <Logo sx={{ mb: 1, mx: "auto" }} />

            <Typography variant="caption" component="p">
              © All rights reserved
              <br /> made by &nbsp;
              Foster Carer
            </Typography>
          </Container>
        </Box>
      )} */}
    </Stack>
  );
}
