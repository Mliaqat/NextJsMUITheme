import { ReactNode, useRef } from "react";
import { SnackbarProvider } from "notistack";
// @mui
import { alpha, useTheme } from "@mui/material/styles";
import { Box, GlobalStyles, IconButton } from "@mui/material";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";
import ErrorIcon from "@mui/icons-material/Error";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
// ----------------------------------------------------------------------

function SnackbarStyles() {
  const theme: any = useTheme();
  const isLight = theme.palette.mode === "light";

  return (
    <GlobalStyles
      styles={{
        "#__next": {
          "& .SnackbarContent-root": {
            width: "100%",
            padding: theme.spacing(1),
            margin: theme.spacing(0.25, 0),
            boxShadow: theme.customShadows.z8,
            borderRadius: theme.shape.borderRadius,
            color: theme.palette.grey[isLight ? 0 : 800],
            backgroundColor: theme.palette.grey[isLight ? 900 : 0],
            "&.SnackbarItem-variantSuccess, &.SnackbarItem-variantError, &.SnackbarItem-variantWarning, &.SnackbarItem-variantInfo":
              {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper,
              },
            [theme.breakpoints.up("md")]: {
              minWidth: 240,
            },
          },
          "& .SnackbarItem-message": {
            padding: "0 !important",
            fontWeight: theme.typography.fontWeightMedium,
          },
          "& .SnackbarItem-action": {
            marginRight: 0,
            color: theme.palette.action.active,
            "& svg": { width: 20, height: 20 },
          },
        },
      }}
    />
  );
}

// ----------------------------------------------------------------------

export default function NotistackProvider({
  children,
}: {
  children: ReactNode;
}) {
  const notistackRef: any = useRef(null);
  const theme = useTheme();
  const iconColor = theme.palette.grey["100"];

  const onClose = (key: string) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <>
      <SnackbarStyles />

      <SnackbarProvider
        ref={notistackRef}
        dense
        maxSnack={5}
        preventDuplicate
        autoHideDuration={3000}
        variant="success" // Set default variant
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        iconVariant={{
          info: (
            <SnackbarIcon
              icon={<InfoIcon htmlColor={iconColor} />}
              color="info"
            />
          ),
          success: (
            <SnackbarIcon
              icon={<CheckCircleIcon htmlColor={iconColor} />}
              color="success"
            />
          ),
          warning: (
            <SnackbarIcon
              icon={<ReportProblemIcon htmlColor={iconColor} />}
              color="warning"
            />
          ),
          error: (
            <SnackbarIcon
              icon={<ErrorIcon htmlColor={iconColor} />}
              color="error"
            />
          ),
        }}
        // With close as default
        action={(key: any) => (
          <IconButton size="small" onClick={onClose(key)} sx={{ p: 0.5 }}>
            <CloseIcon htmlColor={iconColor} />
          </IconButton>
        )}
      >
        {children}
      </SnackbarProvider>
    </>
  );
}

// ----------------------------------------------------------------------

function SnackbarIcon({ icon, color }: any) {
  return (
    <Box
      component="span"
      sx={{
        mr: 1.5,
        width: 40,
        height: 40,
        display: "flex",
        borderRadius: 1.5,
        alignItems: "center",
        justifyContent: "center",
        color: `${color}.main`,
        bgcolor: (theme: any) => alpha(theme.palette[color].main, 0.16),
      }}
    >
      {icon}
    </Box>
  );
}
