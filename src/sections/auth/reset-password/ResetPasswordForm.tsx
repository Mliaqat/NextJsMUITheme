import { enqueueSnackbar } from "notistack";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Stack, Grid} from "@mui/material";
import { LoadingButton } from "@mui/lab";

// components
import {
  FormProvider,
  RHFTextField,
} from "../../../components/hook-form";
//
import { ResetPasswordFormSchema, defaultValues } from ".";

import { useResetPasswordMutation } from "@root/services/auth";

// ----------------------------------------------------------------------

export default function ResetPassword() {
  const [resetTrigger, { isLoading }] = useResetPasswordMutation();

  const methods: any = useForm({
    resolver: yupResolver(ResetPasswordFormSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;



  const onSubmit = async (credentials: any) => {
    try {
      const res: any = await resetTrigger(credentials).unwrap();     
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
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
           <LoadingButton
              fullWidth
              color="primary"
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              disabled={!isValid}
            >
              Reset Password
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
