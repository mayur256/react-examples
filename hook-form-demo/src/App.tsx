import "./App.css";

//Custom Components
import Main from "./components/semantic/Main";
import Section from "./components/semantic/Section";
import Grid from "./components/layouts/Grid";

// Component definition
function App() {
  return (
    <Main>
      <h1>Hospital Admission form</h1>

      <Section id="general">
        <Grid>
          <Grid> grid 1</Grid>
          <Grid> grid 2</Grid>
        </Grid>
      </Section>
    </Main>
  );
}

export default App;
