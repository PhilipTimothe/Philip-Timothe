import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Container = styled.div`
  background-color: white;
  min-height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SkillSectionTitle = createTheme({
  typography: {
    h5: {
      fontWeight: 300,
      fontSize: 30,
      letterSpacing: 5,
    },
  },
});

export const SkillsView = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <ThemeProvider theme={SkillSectionTitle}>
            <Typography className="" variant="h5" gutterBottom>
              MY TECHNICAL PROFICIENCIES
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Container>
  );
};
