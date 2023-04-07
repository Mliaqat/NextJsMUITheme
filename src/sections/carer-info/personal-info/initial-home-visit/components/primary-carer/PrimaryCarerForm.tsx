import { useState } from "react";
import { enqueueSnackbar } from "notistack";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Stack, Grid, IconButton, InputAdornment, Link } from "@mui/material";
import { LoadingButton } from "@mui/lab";

// components
import {
  FormProvider,
  RHFCheckbox,
  RHFTextField,
} from "@root/components/hook-form";
//
import { PrimaryCarerFormSchema, defaultValues } from ".";

//mui icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useLoginMutation } from "@root/services/auth";
import useAuth from "@root/hooks/useAuth";
import NextLink from "next/link";
import { PATH_AUTH } from "@root/routes/paths";

// ----------------------------------------------------------------------

export default function PrimaryCarerForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginTrigger, { isLoading }] = useLoginMutation();
  const { login } = useAuth();

  const methods: any = useForm({
    resolver: yupResolver(PrimaryCarerFormSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const onSubmit = async (credentials: any) => {
    console.log({ credentials });
    try {
      const res: any = await loginTrigger(credentials).unwrap();
      login(res);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  const passwordEndAdornment = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleShowPassword} edge="end">
          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </InputAdornment>
    ),
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container justifyContent="center">
        <Grid container item xs={11}>
          <Grid item sm={12} container>
            <Grid item sm={6} container direction="column">
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFTextField
                  name="email"
                  label="Email address"
                  disabled={isSubmitting}
                />
              </Grid>
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFTextField
                  name="email"
                  label="Email address"
                  disabled={isSubmitting}
                />
              </Grid>
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFTextField
                  name="email"
                  label="Email address"
                  disabled={isSubmitting}
                />
              </Grid>
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFTextField
                  name="email"
                  label="Email address"
                  disabled={isSubmitting}
                />
              </Grid>
            </Grid>
            <Grid item sm={6} container direction="column">
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFTextField
                  name="email"
                  label="Email address"
                  disabled={isSubmitting}
                />
              </Grid>
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFTextField
                  name="email"
                  label="Email address"
                  disabled={isSubmitting}
                />
              </Grid>
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFTextField
                  name="email"
                  label="Email address"
                  disabled={isSubmitting}
                />
              </Grid>
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFTextField
                  name="email"
                  label="Email address"
                  disabled={isSubmitting}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
