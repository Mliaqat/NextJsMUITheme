// @mui
import { enUS, deDE, frFR } from "@mui/material/locale";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------

const LANGS = [
  {
    label: "English",
    value: "en",
    systemValue: enUS,
    icon: "flag-icon-url",
  },
  {
    label: "German",
    value: "de",
    systemValue: deDE,
    icon: "flag-icon-url",
  },
  // {
  //   label: "French",
  //   value: "fr",
  //   systemValue: frFR,
  //   icon: "flag-icon-url",
  // },
];

export default function useLocales() {
  const router = useRouter();
  const currentLocale = router.locale;

  const currentLang =
    LANGS.find((_lang) => _lang.value === currentLocale) || LANGS[1];

  const onChangeLocale = (event: { target: { value: any } }) => {
    const newLocale = event.target.value;
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return {
    currentLocale,
    currentLang,
    onChangeLocale,
    allLang: LANGS,
  };
}
