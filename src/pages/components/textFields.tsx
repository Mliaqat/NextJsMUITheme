// next-i18
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// @mui
import Grid from "@mui/material/Grid";
import ComponentsBox from "@root/components/ComponentsBox";
// components
import Page from "@root/components/Page";
import Filled from "@root/sections/overview/textfield/Filled";
import Outlined from "@root/sections/overview/textfield/Outlined";
import Standard from "@root/sections/overview/textfield/Standard";
import ComponentsLayout from "@root/layouts/ComponentsLayout";

// ----------------------------------------------------------------------
//Layout
TextFields.getLayout = function getLayout(page: any) {
  return <ComponentsLayout>{page}</ComponentsLayout>;
};

// ----------------------------------------------------------------------

//Constants
const fullWidth = { gridSize: { xs: 12, md: 12, lg: 12 } };
// ----------------------------------------------------------------------

export default function TextFields() {
  return (
    <Page title="Input Components">
      <Grid container sx={{ gap: 3.4 }} alignItems="flex-start">
        <ComponentsBox {...fullWidth} title="Filled Inputs">
          <Filled />
        </ComponentsBox>
        <ComponentsBox {...fullWidth} title="Outlined Inputs">
          <Outlined />
        </ComponentsBox>
        <ComponentsBox {...fullWidth} title="Standard Inputs">
          <Standard />
        </ComponentsBox>
      </Grid>
    </Page>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "footer"])),
  },
});
