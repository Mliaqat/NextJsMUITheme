// next-i18
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// guards
import GuestGuard from "@root/guards/GuestGuard";
// components
import Page from "../../components/Page";
import Layout from "@root/layouts";
import OtpForm from "@root/sections/auth/otp/OtpForm";

// ----------------------------------------------------------------------

Login.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="auth" title="Authentication" imageNum={2}>
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <GuestGuard>
      <Page title="Authentication">
        <OtpForm />
      </Page>
    </GuestGuard>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "login"])),
  },
});
