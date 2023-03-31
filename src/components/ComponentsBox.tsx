import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ComponentsBox = ({
  children,
  gridSize = { xs: 12, md: 5.7, lg: 3.8 },
  sx = {},
  title,
}: any) => {
  return (
    <Grid
      item
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        gap: 2,
        border: 1,
        borderRadius: "8px",
        padding: "1rem",
        ...sx,
      })}
      {...gridSize}
      {...sx}
    >
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      {children}
    </Grid>
  );
};

export default ComponentsBox;
