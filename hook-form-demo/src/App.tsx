// Top level imports
import { ReactElement } from "react";

// React Hook Form
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import "./App.css";

// Atoms / Molecules / Organisms
import Label from "./components/atoms/Label";
import Input from "./components/atoms/Input";
import Button from "./components/atoms/Button";

//Custom Components
import Main from "./components/semantic/Main";
import Section from "./components/semantic/Section";
import Grid from "./components/layouts/Grid";
import Box from "./components/layouts/Box";

// types alias corressponding to field names
type Inputs = {
  firstName: string;
  lastName: string;
  admissionDate: string;
  planned: string;
  itemNumber: string
}

// Component definition
function App(): ReactElement {
  const { handleSubmit, control } = useForm<Inputs>({
    defaultValues: {
      firstName: '',
      lastName: '',
      admissionDate: '',
      planned: '',
      itemNumber: ''
    }
  });
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  // Main JSX
  return (
    <Main>
      <h1>Hospital Admission form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Section id="general">
          <Grid>
            <Box>
              <Box>
                <Label text="Doctor's Name" />
              </Box>
              <Box display="flex">
                {/**First Name */}
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => {
                    return <Input {...field} placeholder="First Name" />;
                  }}
                />

                {/** Last name */}
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => {
                    return <Input {...field} placeholder="Last Name" />;
                  }}
                />
              </Box>
            </Box>
            <Box>
            <Box> <Label text="Admission Date" /> </Box>
            <Box>
                <Controller
                  name="admissionDate"
                  control={control}
                  render={({ field }) => {
                    return <Input {...field} type="date" />;
                  }}
                />
            </Box>
          </Box>
          </Grid>

          <Grid>
          <Box>
            <Box><Label text="Planned Procedure" /></Box>
              <Controller
                name="planned"
                control={control}
                render={({ field }) => {
                  return <Input {...field} />;
                }}
              />
          </Box>

          <Box>
            <Box><Label text="Item Number(s)" /></Box>
              <Controller
                name="itemNumber"
                control={control}
                render={({ field }) => {
                  return <Input {...field} />;
                }}
              />
          </Box>
        </Grid>
        </Section>

        <Box display="flex" justifyContent="flex-end">
          <Button type="submit">Submit</Button>
        </Box>
      </form>

    </Main>
  );
}

export default App;
