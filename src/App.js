import React from "react";
import "./App.css";
import Grid from "@mui/material/Unstable_Grid2";
import LandingView from "./components/LandingView";
// import SkillsView from "./components/SkillsView";
// import WorkExperienceView from "./components/WorkExperienceView";
import ProjectsView from "./components/ProjectsView";

function App() {
  return (
    <div className="App">
      <Grid container spacing={4}>
        {/* <header className="App-header">
        </header> */}
        <Grid xs={12}>
          <LandingView />
        </Grid>
        {/* <Grid xs={12}>
          <SkillsView />
        </Grid> */}
        {/* <Grid xs={12}>
          <WorkExperienceView />
        </Grid> */}
        <Grid xs={12}>
          <ProjectsView />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
