// i18n
// import "../locales/i18n";
import { appWithTranslation } from "next-i18next";

// Cookies
import cookie from "cookie";

// highlight
import "../utils/highlight";

// editor
import "react-quill/dist/quill.snow.css";

// next
import Head from "next/head";
import App from "next/app";

// redux store
import { Provider as ReduxProvider } from "react-redux";
import store from "@root/redux/store";

// mui
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// utils
import { getSettings } from "@root/utils/settings";

//theme
import ThemeProvider from "@root/theme";

// contexts
import { AuthProvider } from "@root/contexts/AuthContext";
import { CollapseDrawerProvider } from "@root/contexts/CollapseDrawerContext";
import { SettingsProvider } from "@root/contexts/SettingsContext";

// components
import NotistackProvider from "@root/components/NotistackProvider";
import ThemeColorPresets from "@root/components/ThemeColorPresets";
import ThemeLocalization from "@root/components/ThemeLocalization";
import RtlLayout from "@root/components/RtlLayout";
import ProgressBar from "@root/components/ProgressBar";

function MyApp(props: any) {
  const { Component, pageProps, settings } = props;

  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ReduxProvider store={store}>
        <AuthProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CollapseDrawerProvider>
              <SettingsProvider defaultSettings={settings}>
                <ThemeProvider>
                  <NotistackProvider>
                    <ThemeColorPresets>
                      <ThemeLocalization>
                        <RtlLayout>
                          <ProgressBar />
                          {getLayout(<Component {...pageProps} />)}
                        </RtlLayout>
                      </ThemeLocalization>
                    </ThemeColorPresets>
                  </NotistackProvider>
                </ThemeProvider>
              </SettingsProvider>
            </CollapseDrawerProvider>
          </LocalizationProvider>
        </AuthProvider>
      </ReduxProvider>
    </>
  );
}

// ----------------------------------------------------------------------

MyApp.getInitialProps = async (context: any) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(
    context.ctx.req ? context.ctx.req.headers.cookie || "" : document.cookie
  );

  const settings = getSettings(cookies);

  return {
    ...appProps,
    settings,
  };
};

export default appWithTranslation(MyApp);
