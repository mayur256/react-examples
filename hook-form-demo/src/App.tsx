// Top level imports
import { ReactElement } from "react";

// React Hook Form
import { useForm, SubmitHandler, Controller } from "react-hook-form";
// Yup and React hook resolver
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

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
import Accordion from "./components/semantic/Accordion";


// types alias corressponding to field names
type Inputs = {
  firstName: string;
  lastName: string;
  admissionDate: string;
  planned: string;
  itemNumber: string;
  pFirstName: string;
  pLastName: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
}

// validation schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is Required'),
  lastName: Yup.string().required('Last Name is Required'),
  admissionDate: Yup.string(),
  planned: Yup.string(),
  itemNumber: Yup.string(),
  pFirstName: Yup.string().required('First Name is Required'),
  pLastName: Yup.string().required('Last Name is Required'),
  dateOfBirth: Yup.string(),
  gender: Yup.string(),
  maritalStatus: Yup.string()
});

// Component definition
function App(): ReactElement {
  const { handleSubmit, control } = useForm<Inputs>({
    defaultValues: {
      firstName: '',
      lastName: '',
      admissionDate: '',
      planned: '',
      itemNumber: '',
      pFirstName: '',
      pLastName: '',
      dateOfBirth: '',
      gender: '',
      maritalStatus: ''
    },

    resolver: yupResolver(validationSchema)
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
                  render={({ field, formState: { errors } }) => {
                    return (
                      <Box>
                        <Input {...field} placeholder="First Name" />
                        {errors.firstName && (
                          <Box noMargin noPadding error>{errors.firstName?.message}</Box>
                        )}
                      </Box>
                    );
                  }}
                />

                {/** Last name */}
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field, formState: { errors } }) => {
                    return (
                      <Box>
                        <Input {...field} placeholder="Last Name" />
                        {errors.lastName && (
                          <Box noMargin noPadding error>{errors.lastName?.message}</Box>
                        )}
                      </Box>
                    );
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

        <Section id="patient-information">
          <Accordion title="Patient Information">
            <Box noMargin noPadding>
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
                      render={({ field, formState: { errors } }) => {
                        return (
                          <Box>
                            <Input {...field} placeholder="First Name" />
                            {errors.firstName && (
                              <Box noMargin noPadding error>{errors.firstName?.message}</Box>
                            )}
                          </Box>
                        );
                      }}
                    />

                    {/** Last name */}
                    <Controller
                      name="lastName"
                      control={control}
                      render={({ field, formState: { errors } }) => {
                        return (
                          <Box>
                            <Input {...field} placeholder="Last Name" />
                            {errors.lastName && (
                              <Box noMargin noPadding error>{errors.lastName?.message}</Box>
                            )}
                          </Box>
                        );
                      }}
                    />
                  </Box>
                </Box>
                <Box>
                  <Box> <Label text="Date of Birth" /> </Box>
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
            </Box>
          </Accordion>
        </Section>

        <Box display="flex" justifyContent="flex-end">
          <Button type="submit">Submit</Button>
        </Box>
      </form>

    </Main>
  );
}

export default App;
