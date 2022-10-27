import React, { useState } from "react";
import "./ProjectsView.css";
import styled from "styled-components";
import { ProjectCards } from "./ProjectCards";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Divider } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import VisibilitySensor from "react-visibility-sensor";

const Container = styled.div`
  background-color: white;
  min-height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

let ProjectSectionTitle = createTheme({
  typography: {
    h5: {
      fontWeight: 300,
      fontSize: 30,
      letterSpacing: 5,
      color: "#4F81BD",
    },
  },
});
ProjectSectionTitle = responsiveFontSizes(ProjectSectionTitle);

export const ProjectsView = () => {
  const [active, setActive] = useState(true);

  const handleVisibility = (isVisible) => {
    if (isVisible) setActive(false);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <VisibilitySensor active={active} onChange={handleVisibility}>
            {({ isVisible }) => (
              <ThemeProvider theme={ProjectSectionTitle}>
                <Typography
                  className={
                    isVisible ? "projectsTitle appear" : "projectsTitle"
                  }
                  variant="h5"
                  gutterBottom
                >
                  MY PROJECTS
                </Typography>
              </ThemeProvider>
            )}
          </VisibilitySensor>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justify="center"
          xs={12}
        >
          <ProjectCards />
        </Grid>
      </Grid>
    </Container>
  );
};
