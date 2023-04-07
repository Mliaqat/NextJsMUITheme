// components
import { Box, Divider, Stack, Typography } from "@mui/material";
import authImg from "@root/assets/img/auth-img-1.png";
import authImg2 from "@root/assets/img/auth-img-2.png";
import { BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
import Logo from "@root/components/Logo";
import { useTheme } from "@mui/material/styles";
import Image from "@root/components/Image";
import Link from "next/link";
import useResponsive from "@root/hooks/useResponsive";

// ----------------------------------------------------------------------
// Constanst

const SOCIAL_LINKS = [
  { link: "#", icon: <BsTwitter /> },
  { link: "#", icon: <FaFacebookF /> },
  { link: "#", icon: <BsInstagram /> },
  { link: "#", icon: <FaLinkedinIn /> },
  { link: "#", icon: <BsYoutube /> },
];

const General_Pages = [
  {
    title: "Cookie Policy",
    link: "/auth/login",
  },
  {
    title: "Privacy Policy",
    link: "/auth/login",
  },
  {
    title: "Terms & Conditions",
    link: "/auth/login",
  },
  {
    title: "Data Security",
    link: "/auth/login",
  },
];

// ----------------------------------------------------------------------

export default function AuthLayout({ children, title, imageNum = 1 }: any) {
  const theme: any = useTheme();
  const isSmall = useResponsive("down", "sm");

  const image = imageNum === 1 ? authImg : authImg2;

  return (
    <>
      <Stack sx={styles.rootStack(theme)}>
        <Image
          alt="Foster App Features"
          src={image}
          sx={styles.sideImageContainer}
          style={styles.sideImage}
        />
        <Stack sx={styles.formStack(theme)}>
          <Logo variant="theme" sx={styles.logo} />
          <Box sx={styles.formBox(theme)}>
            <Typography component="h1" variant="h3" sx={styles.title}>
              {title}
              <Box sx={{ position: "absolute", right: 25 }} component="span">
                <MdOutlineInfo color={theme.palette.primary.main} />
              </Box>
            </Typography>
            {children}
          </Box>
        </Stack>
      </Stack>

      <Box sx={styles.footer()}>
        <Box>
          <Typography sx={{ color: theme.palette.grey[500] }} variant="body2">
            Copyright 2021 All rights reserved by{" "}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              Foster App
            </Box>
          </Typography>
        </Box>
        <Stack direction="row" spacing={1}>
          {SOCIAL_LINKS.map(({ link, icon }: any) => (
            <Link key={link} href={link} passHref>
              <Box sx={styles.socialLink(theme)}>{icon}</Box>
            </Link>
          ))}
        </Stack>
        <Stack
          direction="row"
          divider={!isSmall && <Divider orientation="vertical" flexItem />}
          sx={styles.generalLinksStack}
          gap={2}
          flexWrap="wrap"
        >
          {General_Pages.map((data, index) => (
            <Link
              href={data.link}
              key={index}
              style={styles.generalLink({ isSmall, theme })}
            >
              {data.title}
            </Link>
          ))}
        </Stack>
      </Box>
    </>
  );
}

// ----------------------------------------------------------------------
// Styles

const styles: any = {
  rootStack: (theme: any) => ({
    pt: { xs: theme.spacing(3), lg: theme.spacing(10) },
    px: { xs: theme.spacing(3), md: theme.spacing(10) },
    flexDirection: { xs: "column", md: "row" },
    alignItems: { xs: "center", lg: "flex-start" },
    justifyContent: "center",     
    gap: theme.spacing(3),
    "&>*": { flexGrow: 1 },
  }),
  formStack: (theme: any) => ({
    alignItems: "center",
    minWidth: { xs: "80%", md: "40rem" },
    gap: theme.spacing(6.9),
  }),
  formBox: (theme: any) => ({
    padding: {
      xs: theme.spacing(2, 3),
      sm: theme.spacing(3, 4),
      lg: theme.spacing(5, 8.1, 9.7, 8.1),
    },
    border: 0.5,
    borderRadius: 1,
    borderColor: theme.palette.grey[300],
    textAlign: "center",
    width: "100%",
    boxShadow: theme.shadows[5],
    position: "relative",
  }),
  sideImageContainer: {
    display: { xs: "none", md: "block" },
  },
  sideImage: { objectFit: "contain" },
  logo: { height: "95px", width: "300px" },
  title: { mb: 4.4, fontWeight: 600, textTransform: "capitalize" },
  socialLink: (theme: any) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: 1,
    borderRadius: "50%",
    color: theme.palette.grey[0],
  }),
  footer: () => ({
    position: {xs:"relative",sm:"fixed"},
    bottom: "0",
    backgroundColor: "transparent",
    px: 2,
    py: 1,
    mt: { xs: 2, md: 0 },
    display: "flex",
    justifyContent: { xs: "center", md: "space-between" },
    alignItems: "center",
    width: "100%",
    gap: 3,
    flexWrap: "wrap",
  }),
  generalLinksStack: { justifyItems: "center", "&>*": { flexGrow: 1 } },
  generalLink: ({ isSmall, theme }: any) => ({
    textAlign: isSmall ? "start" : "center",
    textDecoration: "none",
    color: theme.palette.grey[500],
  }),
};
