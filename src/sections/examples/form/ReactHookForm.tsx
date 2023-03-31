import { useState, useRef } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
// @mui
import {
  Stack,
  Grid,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import DatePicker from "@mui/lab/DatePicker";
// utils
import { fData } from "../../../utils/formatNumber";
import { fTimestamp } from "../../../utils/formatTime";
// components
import {
  FormProvider,
  RHFTextField,
  RHFCheckbox,
  RHFEditor,
} from "../../../components/hook-form";
//
import { FormSchema, defaultValues } from ".";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

//mui icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// ----------------------------------------------------------------------

export default function ReactHookForm() {
  const fileInputRef: any = useRef(null);

  const [showPassword, setShowPassword] = useState(false);

  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    watch,
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const values: any = watch();

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleClickAttachPhoto = () => {
    fileInputRef.current?.click();
  };

  const onSubmit = async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(
      JSON.stringify(
        {
          ...data,
          photo: data.photo?.name,
          startDate: data.startDate && fTimestamp(data.startDate),
          endDate: data.endDate && fTimestamp(data.endDate),
        },
        null,
        2
      )
    );
    reset();
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={3}>
            <RHFTextField name="fullName" label="Full Name" />
            <RHFTextField name="email" label="Email address" />
            <RHFTextField name="age" label="Age" />

            <Stack
              spacing={{ xs: 2, sm: 3 }}
              direction={{ xs: "column", sm: "row" }}
            >
              <RHFDatePicker name="startDate" label="Start Date" />
              <RHFDatePicker name="endDate" label="End Date" />
            </Stack>

            <RHFTextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <RHFTextField
              name="confirmPassword"
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Stack spacing={3}>
            <div>
              <Stack direction="row" alignItems="center" spacing={3}>
                <Button
                  color="warning"
                  variant="contained"
                  onClick={handleClickAttachPhoto}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload photo
                </Button>

                <div>
                  {values.photo?.name && (
                    <Typography variant="subtitle2">
                      {values.photo.name}
                    </Typography>
                  )}
                  {values.photo?.size && (
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      {fData(values.photo.size)}
                    </Typography>
                  )}
                </div>

                <input
                  {...register("photo")}
                  ref={fileInputRef}
                  type="file"
                  onChange={(event) => {
                    const file: any = event.target.files?.[0];
                    setValue("photo", file);
                  }}
                  style={{ display: "none" }}
                />
              </Stack>

              {errors.photo && (
                <FormHelperText sx={{ px: 2, display: "block" }} error>
                  {errors.photo.message}
                </FormHelperText>
              )}
            </div>

            <div>
              <RHFCheckbox name="terms" label=" Terms and Conditions" />

              {errors.terms && (
                <FormHelperText sx={{ px: 2 }} error>
                  {errors.terms.message}
                </FormHelperText>
              )}
            </div>

            <LoadingButton
              fullWidth
              color="info"
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              disabled={!isDirty}
            >
              Submit
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
