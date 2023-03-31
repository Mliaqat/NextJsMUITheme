// @mui
import Grid from "@mui/material/Grid";
import ComponentsBox from "@root/components/ComponentsBox";
import MyAvatar from "@root/components/MyAvatar";
// components
import Page from "@root/components/Page";
import ThemeSettings from "@root/sections/examples/theme/ThemeSettings";
import { ReactHookForm } from "@root/sections/examples/form";
// next-i18
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Components" sx={{ padding: 6 }}>
      <Grid container sx={{ gap: 4 }}>
        <ComponentsBox title="Theming">
          <ThemeSettings />
        </ComponentsBox>

        <ComponentsBox title="Avatars">
          <MyAvatar />
        </ComponentsBox>

        <ComponentsBox title="React Hook Form">
          <ReactHookForm />
        </ComponentsBox>
        <ComponentsBox title="Buttons"></ComponentsBox>
        <ComponentsBox title="Calendars"></ComponentsBox>
        <ComponentsBox title="Charts"></ComponentsBox>
      </Grid>
    </Page>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "footer"])),
  },
});
