import React, { useState } from "react";
import "./SkillsView.css";
import { styled } from "@mui/material/styles";
import { Card, CardActions, Box, Divider, Typography } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import TerminalIcon from "@mui/icons-material/Terminal";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { SkillsModal } from "./SkillsModal";
import VisibilitySensor from "react-visibility-sensor";

export function SkillsCard() {
  const [active, setActive] = useState(true);

  const handleVisibility = (isVisible) => {
    if (isVisible) setActive(false);
  };

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <VisibilitySensor
      active={active}
      onChange={handleVisibility}
      partialVisibility
    >
      {({ isVisible }) => (
        <Grid spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Card
            className={isVisible ? "skillsCard appear" : "skillsCard"}
            elevation={4}
            sx={{ width: "100%" }}
          >
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item style={{ maxWidth: 200 }} xs={4}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={2}
                >
                  <LanguageOutlinedIcon />
                  <ThemeProvider theme={theme}>
                    <Typography variant="subtitle1">Languages</Typography>
                  </ThemeProvider>
                </Box>
                <Grid container spacing={2} xs={12}>
                  <Grid item xs={6}>
                    <img
                      className="skillImages"
                      src="https://firebasestorage.googleapis.com/v0/b/philip-timothe.appspot.com/o/Philip%2Ficons8-javascript-480.png?alt=media&token=15d166f6-54f5-482c-a5f2-a1b2120f5a6a"
                      alt="javascriptImage"
                    ></img>
                  </Grid>
                  <Grid item xs={6}>
                    <img
                      className="skillImages"
                      src="https://firebasestorage.googleapis.com/v0/b/philip-timothe.appspot.com/o/Philip%2Ficons8-html-5-480.png?alt=media&token=45328bd4-3d25-4296-a83f-41b93fb0c06a"
                      alt="htmlImage"
                    ></img>
                  </Grid>
                  <Grid item xs={6}>
                    <img
                      className="skillImages"
                      src="https://firebasestorage.googleapis.com/v0/b/philip-timothe.appspot.com/o/Philip%2Ficons8-css3-480.png?alt=media&token=ddd012d3-ac2a-487e-b1e5-60d0ae3a034c"
                      alt="cssImage"
                    ></img>
                  </Grid>
                  <Grid item xs={6}>
                    <img
                      className="skillImages"
                      src="https://firebasestorage.googleapis.com/v0/b/philip-timothe.appspot.com/o/Philip%2Ficons8-python-480.png?alt=media&token=387e709c-2bc4-44bb-b6bf-b34816836968"
                      alt="pythonImage"
                    ></img>
                  </Grid>
                </Grid>
              </Grid>

              <Divider orientation="vertical" variant="middle" flexItem />

              <Grid item style={{ maxWidth: 200 }} xs={4}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={2}
                >
                  <TerminalIcon />
                  <ThemeProvider theme={theme}>
                    <Typography variant="subtitle1">Frameworks</Typography>
                  </ThemeProvider>
                </Box>
                <Grid container spacing={2} xs={12}>
                  <Grid item xs={6}>
                    <img
                      className="skillImages"
                      src="https://firebasestorage.googleapis.com/v0/b/philip-timothe.appspot.com/o/Philip%2Ficons8-react-native-480.png?alt=media&token=70c7605c-786a-41cd-aa23-5ac3316c7f3d"
                      alt="reactImage"
                    ></img>
                  </Grid>
                  <Grid item xs={6}>
                    <img
                      className="skillImages"
                      src="https://firebasestorage.googleapis.com/v0/b/philip-timothe.appspot.com/o/Philip%2Fbootstrap-logo.svg?alt=media&token=e7fe5287-6719-43d1-a108-09acd1f0c3e9"
                      alt="bootstrapImage"
                    ></img>
                  </Grid>
                  <Grid item xs={6}>
                    <img
                      className="skillImages"
                      src="https://firebasestorage.googleapis.com/v0/b/philip-timothe.appspot.com/o/Philip%2Fjest-logo.png?alt=media&token=02377f2c-a2ee-4b05-9210-afb77c5eb039"
                      alt="jestImage"
                    ></img>
                  </Grid>
                  <Grid item xs={6}>
                    <img
                      className="skillImages"
                      src="https://firebasestorage.googleapis.com/v0/b/philip-timothe.appspot.com/o/Philip%2Ffirebase%20logo.png?alt=media&token=414ee065-0a04-4bfc-8ce9-a5f691c7e62e"
                      alt="firebaseImage"
                    ></img>
                  </Grid>
                </Grid>
              </Grid>

              <Divider orientation="vertical" variant="middle" flexItem />

              <Grid item style={{ maxWidth: 200 }} xs={4}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={2}
                >
                  <LibraryBooksOutlinedIcon />
                  <ThemeProvider theme={theme}>
                    <Typography variant="subtitle1">Libraries</Typography>
                  </ThemeProvider>
                </Box>
                <Grid container spacing={2} xs={12}>
                  <Grid item xs={6}>
                    <img
                      className="skillImages"
                      src="https://firebasestorage.googleapis.com/v0/b/philip-timothe.appspot.com/o/Philip%2Foctopus-64x64.png?alt=media&token=5374f675-58ca-46e7-a458-2a6fb42a9cac"
                      alt="reactTestingLibraryImage"
                    ></img>
                  </Grid>
                  <Grid item xs={6}>
                    <img
                      className="skillImages"
                      style={{ backgroundColor: "black" }}
                      src="https://firebasestorage.googleapis.com/v0/b/philip-timothe.appspot.com/o/Philip%2Fstyled%20components.png?alt=media&token=686f9a57-955a-4970-a722-9bc7973eacb8"
                      alt="styledComponentsImage"
                    ></img>
                  </Grid>
                  <Grid item xs={6}>
                    <img
                      className="skillImages"
                      src="https://firebasestorage.googleapis.com/v0/b/philip-timothe.appspot.com/o/Philip%2FMaterial%20UI%20logo.png?alt=media&token=83417085-9bb1-4aa9-b64d-b0298571f163"
                      alt="muiImage"
                    ></img>
                  </Grid>
                  <Grid item xs={6}>
                    <img
                      className="skillImages"
                      src="https://firebasestorage.googleapis.com/v0/b/philip-timothe.appspot.com/o/Philip%2Fredux%20logo.png?alt=media&token=6ef4796d-2f02-44e0-9145-359aad1fbc39"
                      alt="reduxImage"
                    ></img>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
              xs={12}
            >
              <CardActions>
                <SkillsModal></SkillsModal>
              </CardActions>
            </Grid>
          </Card>
        </Grid>
      )}
    </VisibilitySensor>
  );
}
