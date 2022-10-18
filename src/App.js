import "./App.css";
import Grid from "@mui/material/Unstable_Grid2";
import LandingView from "./components/LandingView";

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        {/* <header className="App-header">
        </header> */}
        <Grid xs={12}>
          <LandingView />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
