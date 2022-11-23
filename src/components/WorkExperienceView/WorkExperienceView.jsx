import React, { useState, useEffect } from "react";
import "./WorkExperienceView.css";
import { getAllJobs } from "../../firestore";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Typography } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import VisibilitySensor from "react-visibility-sensor";
import { WorkExperienceTimeline } from "./WorkExperienceTimeline";

let experienceSectionTitle = createTheme({
  typography: {
    h5: {
      fontWeight: 300,
      fontSize: 30,
      letterSpacing: 5,
      color: "#4F81BD",
    },
  },
});
experienceSectionTitle = responsiveFontSizes(experienceSectionTitle);

export const WorkExperienceView = () => {
  const [jobs, setJobs] = useState("");
  const [active, setActive] = useState(true);

  const handleVisibility = (isVisible) => {
    if (isVisible) setActive(false);
  };

  const loadData = async () => {
    let temp = [];

    const specs = await getAllJobs(`jobs`);
    specs.forEach((doc) => {
      temp.push(doc.data());
    });

    temp = await temp.sort((a, b) => b.start - a.start);
    await setJobs(temp);
    // console.log(jobs.map((detail, index) => detail));
    // need to store images at the same time of job storage ********
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Container maxWidth="false">
        <Grid container spacing={2}>
          <Grid xs={12}>
            <VisibilitySensor
              active={active}
              onChange={handleVisibility}
              partialVisibility
            >
              {({ isVisible }) => (
                <ThemeProvider theme={experienceSectionTitle}>
                  <Typography
                    variant="h5"
                    component="span"
                    className={
                      isVisible
                        ? "experienceContainer appear"
                        : "experienceContainer"
                    }
                  >
                    PROFESSIONAL EXPERIENCE
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
            {Array.isArray(jobs) && jobs.length > 0 ? (
              <WorkExperienceTimeline jobs={jobs}></WorkExperienceTimeline>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
