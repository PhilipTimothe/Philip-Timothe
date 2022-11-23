import React, { useState } from "react";
import "./SkillsView.css";
import styled from "styled-components";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { SkillsCard } from "./SkillsCard";
import VisibilitySensor from "react-visibility-sensor";

const Container = styled.div`
  background-color: white;
  min-height: 65vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

let SkillSectionTitle = createTheme({
  typography: {
    h5: {
      fontWeight: 300,
      fontSize: 30,
      letterSpacing: 5,
      color: "#4F81BD",
    },
  },
});
SkillSectionTitle = responsiveFontSizes(SkillSectionTitle);

export const SkillsView = () => {
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
              <ThemeProvider theme={SkillSectionTitle}>
                <Typography
                  className={isVisible ? "skillsTitle appear" : "skillsTitle"}
                  variant="h5"
                  gutterBottom
                >
                  MY TECHNICAL PROFICIENCIES
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
          <SkillsCard />
        </Grid>
      </Grid>
    </Container>
  );
};
