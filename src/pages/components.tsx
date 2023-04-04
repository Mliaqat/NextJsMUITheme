// next-i18
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// @mui
import Grid from "@mui/material/Grid";
import ComponentsBox from "@root/components/ComponentsBox";
// components
import Page from "@root/components/Page";
import ThemeSettings from "@root/sections/overview/theme/ThemeSettings";
import { ReactHookForm } from "@root/sections/overview/form";

// ----------------------------------------------------------------------

//Constants
const fullWidth = { gridSize: { xs: 12, md: 12, lg: 12 } };
// ----------------------------------------------------------------------

export default function Components() {
  return (
    <Page title="Components" sx={{ padding: 6 }}>
      <Grid container sx={{ gap: 3.4 }} alignItems="flex-start">
        <ComponentsBox title="Theming">
          <ThemeSettings />
        </ComponentsBox>

        {/* <ComponentsBox title="Avatars">
        </ComponentsBox> */}

        <ComponentsBox title="React Hook Form">
          <ReactHookForm />
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
