// @mui
import { styled } from "@mui/material/styles";
// layouts
import Layout from "@root/layouts";
// components
import Page from "@root/components/Page";
// sections
// import {
//   HomeHero,
//   HomeDarkMode,
//   HomeLookingFor,
//   HomeColorPresets,
//   HomePricingPlans,
//   HomeAdvertisement,
//   HomeCleanInterfaces,
//   HomeHugePackElements,
// } from '../sections/home';

// next-i18
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Logo, LogoIcon } from "@root/assets/svg";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(() => ({
  height: "100%",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

Dashboard.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Dashboard() {
  const { t } = useTranslation(["common", "footer"]);
  return (
    <Page title="Home Page">
      <RootStyle>
        {/* <HomeHero /> */}
        <ContentStyle>
          {/* <HomeHugePackElements />

          <HomeDarkMode />

          <HomeColorPresets />

          <HomeCleanInterfaces />

          <HomePricingPlans />

          <HomeLookingFor />

          <HomeAdvertisement />  */}
          {/* {t("demo.title", { ns: "footer" })} */}
          <Logo variant="dark" />
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "footer"])),
  },
});
