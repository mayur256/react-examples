// Top level imports
import { ReactElement } from "react";
import "./App.css";

// Atoms / Molecules / Organisms
import Label from "./components/atoms/Label";
import Input from "./components/atoms/Input";

//Custom Components
import Main from "./components/semantic/Main";
import Section from "./components/semantic/Section";
import Grid from "./components/layouts/Grid";
import Box from "./components/layouts/Box";

// Component definition
function App(): ReactElement {
  return (
    <Main>
      <h1>Hospital Admission form</h1>

      <Section id="general">
        <Grid>
          <Box>
            <Label text="Doctor's Name" /> <br /> <br />
            <Box display="flex" justifyContent="space-evenly">
              {/**First Name */}
              <Input
                name="firstName"
              />

              {/** Last name */}
              <Input />
            </Box>
          </Box>
          <Grid>
            <Label text="Admission Date" />
          </Grid>
        </Grid>
      </Section>
    </Main>
  );
}

export default App;
