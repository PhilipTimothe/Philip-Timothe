import React, { useEffect } from "react";
import "./LandingView.css";
import styled from "styled-components";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const nameTitle = createTheme({
  typography: {
    h2: {
      fontSize: 45,
      letterSpacing: 20,
      color: "#4F81BD",
    },
  },
});

const workTitle = createTheme({
  typography: {
    h5: {
      fontWeight: 300,
      fontSize: 20,
      letterSpacing: 5,
    },
  },
});

export const LandingView = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <img
            className="signature"
            src="https://firebasestorage.googleapis.com/v0/b/philip-timothe.appspot.com/o/Philip%2FPhilip%20Timothe%20Signature.png?alt=media&token=4bb57e91-80ac-4dc0-9928-b6a5d432bb4b"
            alt="Philip Timothe Logo Signature"
          />
        </Grid>
        <Grid xs={12}>
          <ThemeProvider theme={nameTitle}>
            <Typography className="title" variant="h2" gutterBottom>
              PHILIP TIMOTHE
            </Typography>
          </ThemeProvider>
          <ThemeProvider theme={workTitle}>
            <Typography className="workTitle" variant="h5" gutterBottom>
              SOFTWARE ENGINEER | FRONTEND DEVELOPER
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Container>
  );
};
