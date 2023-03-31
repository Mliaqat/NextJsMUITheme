// @mui
import { Box, Button, Grid, RadioGroup, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import useSettings from "@root/hooks/useSettings";
import { FormControlLabel, Radio } from "@mui/material";
import useLocales from "@root/hooks/useLocales";

//
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// next-i18
import { useTranslation } from "next-i18next";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(() => ({
  background: "theme.secondary",
  display: "flex",
  gap: 12,
  flexDirection: "column",
  zIndex: "999",
  maxWidth: "90vw",
}));

// ----------------------------------------------------------------------

export default function ThemeSettings() {
  const {
    themeMode,
    themeDirection,
    themeColorPresets,
    onResetSetting,
    onChangeDirection,
    onChangeMode,
    colorOption,
    onChangeColor,
  } = useSettings();

  const { allLang, onChangeLocale, currentLocale } = useLocales();
  const { t } = useTranslation(["common", "footer"]);

  return (
    <>
      {t("demo.title", { ns: "footer" })}
      <Button onClick={onResetSetting} variant="contained">
        Reset Settings
      </Button>
      Language:
      <Grid container>
        <FormControl fullWidth>
          <InputLabel id="lang-select">Lang</InputLabel>
          <Select
            labelId="lang-select"
            value={currentLocale}
            label="Lnag"
            onChange={onChangeLocale}
          >
            {allLang.map((lang) => {
              return (
                <MenuItem value={lang.value} key={lang.value}>
                  {lang.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      Mode:
      <Grid container>
        <RadioGroup name="themeMode" value={themeMode} onChange={onChangeMode}>
          <Grid dir="ltr" container spacing={2.5}>
            {["light", "dark"].map((mode, index) => {
              const isSelected = themeMode === mode;

              return (
                <Grid key={mode} item>
                  <BoxMask value={mode} />
                </Grid>
              );
            })}
          </Grid>
        </RadioGroup>
      </Grid>
      Direction:
      <Grid container>
        <RadioGroup
          name="themeDirection"
          value={themeDirection}
          onChange={onChangeDirection}
        >
          <Grid dir="ltr" container spacing={2.5}>
            {["ltr", "rtl"].map((direction, index) => {
              const isSelected = themeDirection === direction;

              return (
                <Grid key={direction} item>
                  <BoxMask value={direction} />
                </Grid>
              );
            })}
          </Grid>
        </RadioGroup>
      </Grid>
      Color:
      <Grid container>
        <RadioGroup
          name="themeColorPresets"
          value={themeColorPresets}
          onChange={onChangeColor}
          sx={{ width: "100%" }}
        >
          <Grid dir="ltr" container spacing={1.5}>
            {colorOption.map((color: any) => {
              const colorName = color.name;
              const colorValue = color.value;
              const isSelected = themeColorPresets === colorName;

              return (
                <Grid key={colorName} item xs={4}>
                  <Box
                    sx={{
                      width: 24,
                      height: 14,
                      borderRadius: "50%",
                      bgcolor: colorValue,
                      transform: "rotate(-45deg)",
                      transition: (theme: any) =>
                        theme.transitions.create("all", {
                          easing: theme.transitions.easing.easeInOut,
                          duration: theme.transitions.duration.shorter,
                        }),
                      ...(isSelected && { transform: "none" }),
                    }}
                  />
                  <BoxMask value={colorName} />
                </Grid>
              );
            })}
          </Grid>
        </RadioGroup>
      </Grid>
    </>
  );
}

export function BoxMask({ value }: { value: string }) {
  return <FormControlLabel label={value} value={value} control={<Radio />} />;
}
