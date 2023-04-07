import { useState, useRef } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
// @mui
import {
  Stack,
  Grid,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  FormHelperText,
  Box,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// utils
import { fData } from "../../utils/formatNumber";
import { fTimestamp } from "../../utils/formatTime";
// components
import {
  FormProvider,
  RHFTextField,
  RHFSelect,
  RHFCheckbox,
  RHFEditor,
} from "../../components/hook-form";
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
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const photo = useWatch({ control, name: "photo" });

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
    <Box sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <RHFSelect defaultValue={1} name="areaOffice" label="Area Office">
              {[1, 1, 1, 1].map((a, i) => {
                return (
                  <option key={i} value={i}>
                    {i}
                  </option>
                );
              })}
            </RHFSelect>
          </Grid>
          <Grid item xs={12} sm={6}></Grid>

          <Grid item xs={12}>
            <Typography
              variant="h4"
              component="h4"
              sx={{ color: "text.primary" }}
            >
              Personal Info
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFTextField
              disabled
              name="uploadImage"
              label="Upload Image"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                    >
                      <input hidden accept="image/*" type="file" />
                      <CloudUploadIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}></Grid>

          <Grid item xs={12} sm={6}>
            <RHFSelect defaultValue={1} name="title" label="Title">
              {[1, 1, 1, 1].map((a, i) => {
                return (
                  <option key={i} value={i}>
                    {i}
                  </option>
                );
              })}
            </RHFSelect>
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFTextField name="firstName" label="First Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFTextField name="middleName" label="Middle Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFTextField name="lastName" label="Last Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFTextField name="previousName" label="Previous Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFDatePicker
              sx={{ width: "100%" }}
              name="dob"
              label="Date of Birth"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFTextField name="age" label="Age" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFSelect name="gender" label="Gender">
              {["Male", "Female"].map((val, i) => {
                return (
                  <option key={val} value={val}>
                    {i}
                  </option>
                );
              })}
            </RHFSelect>
          </Grid>

          <Grid item xs={12} sm={12}>
            <RHFTextField
              name="nationalInsuranceNo"
              label="National Insurance No"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFSelect name="ethnicity" label="Ethnicity">
              {["Male", "Female"].map((val, i) => {
                return (
                  <option key={val} value={val}>
                    {i}
                  </option>
                );
              })}
            </RHFSelect>
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFSelect name="ofstedEthnicity" label="Ofsted Ethnicity">
              {["Male", "Female"].map((val, i) => {
                return (
                  <option key={val} value={val}>
                    {i}
                  </option>
                );
              })}
            </RHFSelect>
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFSelect name="religion" label="Religion">
              {["Male", "Female"].map((val, i) => {
                return (
                  <option key={val} value={val}>
                    {i}
                  </option>
                );
              })}
            </RHFSelect>
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFTextField name="mobile" label="Mobile" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFTextField name="email" label="Email" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFSelect name="languagesSpoken" label="Languages Spoken">
              {["Male", "Female"].map((val, i) => {
                return (
                  <option key={val} value={val}>
                    {i}
                  </option>
                );
              })}
            </RHFSelect>
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFSelect name="relationshipType" label="Relationship Type">
              {["Male", "Female"].map((val, i) => {
                return (
                  <option key={val} value={val}>
                    {i}
                  </option>
                );
              })}
            </RHFSelect>
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFCheckbox name="isDisable" label="Has Disability" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFSelect name="sexualOrientation" label="Sexual Orientation">
              {["Male", "Female"].map((val, i) => {
                return (
                  <option key={val} value={val}>
                    {i}
                  </option>
                );
              })}
            </RHFSelect>
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFCheckbox
              name="criminalRecord"
              label="Have you ever been convicted of any criminal or civil offence? Have you got anyu cations or outstanding court Orders?"
            />
          </Grid>
          <Grid item xs={12}>
            <RHFTextField
              name="medicalCondition"
              label="Provide details of any current or pending medical conditions, treatment or appointment below"
              multiline
              rows={3}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RHFDatePicker
              sx={{ width: "100%" }}
              name="filledDate"
              label="Applicant Filled Date"
            />
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12}>
            <Stack spacing={3} sx={{ marginTop: 3 }}>
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
    </Box>
  );
}
