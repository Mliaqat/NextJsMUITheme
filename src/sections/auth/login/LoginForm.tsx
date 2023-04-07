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
import { LoginFormSchema, defaultValues } from ".";

//mui icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useLoginMutation } from "@root/services/auth";
import useAuth from "@root/hooks/useAuth";
import NextLink from "next/link";
import { PATH_AUTH } from "@root/routes/paths";

// ----------------------------------------------------------------------

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginTrigger, { isLoading }] = useLoginMutation();
  const { login } = useAuth();

  const methods: any = useForm({
    resolver: yupResolver(LoginFormSchema),
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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={3}>
            <RHFTextField
              name="email"
              label="Email address"
              disabled={isSubmitting}
            />

            <RHFTextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              InputProps={passwordEndAdornment}
              disabled={isSubmitting}
            />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <RHFCheckbox name="remember" label="Remember me" />
              <NextLink
                href={PATH_AUTH.resetPassword}
                style={{ textDecoration: "none" }}
                passHref
              >
                <Link variant="subtitle2">Forgot password?</Link>
              </NextLink>
            </Stack>
            <LoadingButton
              fullWidth
              color="primary"
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              disabled={!isValid}
            >
              Login
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
