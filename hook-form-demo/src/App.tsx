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
            <Box>
              <Label text="Doctor's Name" />
            </Box>
            <Box display="flex">
              {/**First Name */}
              <Input
                name="firstName"
                placeholder="First Name"
              />

              {/** Last name */}
              <Input
                placeholder="Last Name"
              />
            </Box>
          </Box>
          <Box>
            <Box> <Label text="Admission Date" /> </Box>
            <Box>
              <Input
                type="date"
              />
            </Box>
          </Box>
        </Grid>

        <Grid>
          <Box>
            <Box><Label text="Planned Procedure" /></Box>
            <Input/>
          </Box>

          <Box>
            <Box><Label text="Item Number(s)" /></Box>
            <Input />
          </Box>
        </Grid>
      </Section>
    </Main>
  );
}

export default App;
