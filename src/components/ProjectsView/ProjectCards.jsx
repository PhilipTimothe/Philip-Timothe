import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
  CardContent,
  Paper,
} from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  styled,
} from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import TerminalIcon from "@mui/icons-material/Terminal";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import VisibilitySensor from "react-visibility-sensor";

export function ProjectCards() {
  const [active, setActive] = useState(true);

  const handleVisibility = (isVisible) => {
    if (isVisible) setActive(false);
  };

  let ProjectCardTitle = createTheme({
    typography: {
      h6: {
        fontWeight: 400,
        fontSize: 20,
        letterSpacing: 2,
        color: "#4F81BD",
      },
    },
  });
  ProjectCardTitle = responsiveFontSizes(ProjectCardTitle);

  const ImageCard = styled("div")(({ theme }) => ({
    backgroundImage: "",
  }));

  return (
    <VisibilitySensor
      active={active}
      onChange={handleVisibility}
      partialVisibility
    >
      {({ isVisible }) => (
        <Grid
          className={isVisible ? "projectCards appear" : "projectCards"}
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item>
            <Card elevation={4}>
              <Grid item xs={12}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={2}
                >
                  <ThemeProvider theme={ProjectCardTitle}>
                    <Typography variant="h6">PERSONAL WEBSITE</Typography>
                  </ThemeProvider>
                </Box>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      )}
    </VisibilitySensor>
  );
}
