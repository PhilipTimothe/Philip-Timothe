import React, { useState, useEffect } from "react";
import { getAllJobs, getImage } from "../../firestore";
import { Container, Typography } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

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

let nameTitle = createTheme({
  typography: {
    h6: {
      fontWeight: 400,
      fontSize: 20,
      letterSpacing: 3,
      color: "#4F81BD",
    },
  },
});
nameTitle = responsiveFontSizes(nameTitle);

export const WorkExperienceView = () => {
  const [jobs, setJobs] = useState("");

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

  // Function that parses date to styled standards
  let fullDate = (startDate, endDate) => {
    let startMonth = startDate
      .toDate()
      .toLocaleDateString(undefined, { month: "long" });
    let startYear = startDate.toDate().getFullYear();
    let endMonth = endDate
      .toDate()
      .toLocaleDateString(undefined, { month: "long" });
    let endYear = endDate.toDate().getFullYear();
    return startMonth + " " + startYear + " - " + endMonth + " " + endYear;
  };

  return (
    <>
      <Container maxWidth="false">
        <ThemeProvider theme={experienceSectionTitle}>
          <Typography variant="h5" component="span">
            PROFESSIONAL EXPERIENCE
          </Typography>
        </ThemeProvider>
        {Array.isArray(jobs) && jobs.length > 0 ? (
          <Timeline position="alternate">
            {jobs.map((job, index) => (
              <TimelineItem key={index.toString()}>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  // align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  {fullDate(job["start"], job["end"])}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <ThemeProvider theme={nameTitle}>
                    <Typography variant="h6" component="span">
                      {job["title"]}
                    </Typography>
                  </ThemeProvider>
                  <Typography>{job["employer"]}</Typography>
                  {job["details"].map((detail) => (
                    <Typography variant="body2" color="text.secondary">
                      - {detail}
                    </Typography>
                  ))}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};
