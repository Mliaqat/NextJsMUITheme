// next
import NextLink from "next/link";
// @mui
import { styled } from "@mui/material/styles";
import { Card, Container } from "@mui/material";
// routes
import { PATH_AUTH } from "../../routes/paths";
// hooks
import useAuth from "../../hooks/useAuth";
import useResponsive from "../../hooks/useResponsive";
// guards
import GuestGuard from "@root/guards/GuestGuard";
// components
import Page from "../../components/Page";
// import Logo from "../../components/Logo";
// import Image from "../../components/Image";
// sections
// import { LoginForm } from "../../sections/auth/login";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {
  const { method } = useAuth();

  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");

  return (
    <GuestGuard>
      <Page title="Login">
        <RootStyle>
          <Container maxWidth="sm">
            <ContentStyle>Login</ContentStyle>
          </Container>
        </RootStyle>
      </Page>
    </GuestGuard>
  );
}
