import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Children, ReactNode, useState, SyntheticEvent, Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress, {
  CircularProgressProps,
  circularProgressClasses,
} from "@mui/material/CircularProgress";

interface IVERTICALTABSPROPS {
  tabsDataArray: Array<Object>;
  children: ReactNode;
}

function FacebookCircularProgress(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        thickness={6}
        {...props}
        sx={styles.firstCircularBar}
        size={50}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        thickness={6}
        {...props}
        disableShrink
        sx={{
          color: `${
            props.value <= 10
              ? "#F6460F"
              : props.value <= 50
              ? "#FFD704"
              : "#2CB764"
          }`,
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={50}
      />
      <Box sx={styles.progressPercentage}>
        <Typography
          variant="subtitle2"
          component="span"
        >{`${props.value}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function VericalTabs({
  tabsDataArray,
  children,
  ...other
}: IVERTICALTABSPROPS) {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const arrayChildren = Children.toArray(children);

  return (
    <Grid container spacing={2} sx={styles.container}>
      <Grid item xs={12} md={3} width={"100%"}>
        <Tabs
          selectionFollowsFocus
          orientation="vertical"
          variant="scrollable"
          sx={styles.tabRoot}
          TabIndicatorProps={styles.tabIndicator}
          value={value}
          onChange={handleChange}
        >
          {tabsDataArray?.map((item: any) => (
            <Tab
              wrapped
              key={item?.title}
              label={
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    background: `${item?.backgroundColor}`,
                    borderRadius: 3,
                    padding: "28px",
                    margin: "12px",
                  }}
                >
                  <div>{item?.title}</div>
                  {item?.percentage && (
                    <FacebookCircularProgress value={item?.percentage} />
                  )}
                </Box>
              }
            />
          ))}
        </Tabs>
      </Grid>
      <Grid item xs={12} md={9}>
        {tabsDataArray?.map((item: any) => (
          <div
            role="tabpanel"
            key={item?.title}
            hidden={value !== item?.index}
            id={`vertical-tabpanel-${item?.index}`}
            aria-labelledby={`vertical-tab-${item?.index}`}
            {...other}
          >
            <Grid py={1}>
              {arrayChildren?.map((child, index) => (
                <Fragment key={index}>{value === index && child}</Fragment>
              ))}
            </Grid>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}

// Styles
const styles = {
  firstCircularBar: {
    color: "white",
  },

  progressPercentage: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    display: { xs: "block", md: "flex" },
  },

  tabRoot: {
    "& .MuiTab-root": {
      marginRight: "0px !important",
      maxWidth: "unset !important",
      width: "100% !important",
    },
  },

  tabIndicator: {
    sx: { display: "none" },
  },
};
