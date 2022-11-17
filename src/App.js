import React, { useEffect } from "react";
import "./App.css";
import { getAllJobs } from "./firestore.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import LandingView from "./components/LandingView";
import SkillsView from "./components/SkillsView";
// import WorkExperienceView from "./components/WorkExperienceView";

function App() {
  const loadData = async () => {
    const specs = await getAllJobs(`jobs`);
    specs.forEach((doc) => {
      console.log(doc.data());
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="App">
      <Grid container spacing={4}>
        {/* <header className="App-header">
        </header> */}
        <Grid xs={12}>
          <LandingView />
        </Grid>
        <Grid xs={12}>
          <SkillsView />
        </Grid>
        <Grid xs={12}>{/* <WorkExperienceView /> */}</Grid>
      </Grid>
    </div>
  );
}

export default App;
