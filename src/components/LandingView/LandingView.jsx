import React, { useState, useEffect } from "react";
import "./LandingView.css";
import { AboutMeModal } from "./AboutMeModal";
import { getAllSocials } from "../../firestore";
import styled from "styled-components";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

const Container = styled.div`
  background-color: white;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

let nameTitle = createTheme({
  typography: {
    h2: {
      fontSize: 45,
      letterSpacing: 20,
      color: "#4F81BD",
    },
  },
});
nameTitle = responsiveFontSizes(nameTitle);

let workTitle = createTheme({
  typography: {
    h5: {
      fontWeight: 300,
      fontSize: 20,
      letterSpacing: 5,
    },
  },
});
workTitle = responsiveFontSizes(workTitle);

export const LandingView = () => {
  const [socials, setSocials] = useState("");

  const loadData = async () => {
    let temp = [];

    const specs = await getAllSocials(`socials`);
    specs.forEach((doc) => {
      temp.push(doc.data());
    });

    temp = await temp.sort((a, b) => b.start - a.start);
    await setSocials(temp);
    // console.log(socials.map((detail) => detail));
  };

  useEffect(() => {
    loadData();
  }, []);
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
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 6, sm: 8, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          xs={12}
        >
          {Array.isArray(socials) && socials.length > 0
            ? socials.map((social) => (
                <Grid item xs={0.7}>
                  {/* need to add intro animation for icons */}
                  <a
                    href={social["profile-link"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="social-icon"
                      src={social["icon"]}
                      alt="socialmedia link"
                    ></img>
                  </a>
                </Grid>
              ))
            : ""}
        </Grid>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 6, sm: 8, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          xs={12}
        >
          <Grid item>
            <AboutMeModal></AboutMeModal>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
