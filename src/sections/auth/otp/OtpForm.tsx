import { useState } from "react";
import OtpInput from "react-otp-input";
import { enqueueSnackbar } from "notistack";

// @mui
import { Stack, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";

//mui icons
import {
  usePassCodeMutation,
  useResendCodeMutation,
} from "@root/services/auth";
import NextLink from "next/link";
import { PATH_AUTH } from "@root/routes/paths";

// ----------------------------------------------------------------------

export default function OtpForm() {
  const [otp, setOtp] = useState("");
  const [verifyPasscode, { isLoading }] = usePassCodeMutation();
  const [resendPasscode, { isLoading: sendingCode }] = useResendCodeMutation();
  const theme: any = useTheme();

  const onSubmit = async () => {
    try {
      const res: any = await verifyPasscode(otp).unwrap();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack spacing={3}>
          <OtpInput
            value={otp}
            onChange={(otp: any) => {
              setOtp(otp);
            }}
            numInputs={4}
            inputStyle={styles.input(theme)}
            inputType="number"
            containerStyle={{ justifyContent: "space-evenly" }}
            renderInput={(props) => <input {...props} />}
          />
          <Stack direction="row" alignItems="center" justifyContent="flex-end">
            <NextLink
              href={PATH_AUTH.resetPassword}
              style={{ textDecoration: "none" }}
              passHref
            >
              <Button sx={{cursor:"pointer"}}>Resend Passcode?</Button>
            </NextLink>
          </Stack>
          <LoadingButton
            fullWidth
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            onClick={onSubmit}
            disabled={otp.length < 4}
          >
            Submit
            
          </LoadingButton>
        </Stack>
      </Grid>
    </Grid>
  );
}

// ----------------------------Styles--------------------------------------------

const styles: any = {
  input: (theme: any) => ({
    width: "4rem",
    height: "3rem",
    fontSize: "1.5rem",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "5px",
    outline: "none",
  }),
};
