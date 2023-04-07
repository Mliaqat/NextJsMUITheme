// next-i18
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// guards
import GuestGuard from "@root/guards/GuestGuard";
// components
import Page from "../../components/Page";
import LoginForm from "@root/sections/auth/login/LoginForm";
import Layout from "@root/layouts";

// ----------------------------------------------------------------------

Login.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="auth" title="Login">
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <GuestGuard>
      <Page title="Login">
        <LoginForm />
      </Page>
    </GuestGuard>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "login"])),
  },
});
