// Top level imports
import { ReactElement } from "react";

// React Hook Form
import { useForm, SubmitHandler } from "react-hook-form";
// Yup and React hook resolver
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

import "./App.css";

// Atoms / Molecules / Organisms
import Button from "./components/atoms/Button";

//Custom Components
import Main from "./components/semantic/Main";
import Box from "./components/layouts/Box";

// Templates
import { General } from "./components/templates/General";
import { PatientInfo } from "./components/templates/PatientInfo";

// Types
import { Inputs } from "./components/types";

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
        <General control={control} />

        <PatientInfo control={control}/>

        <Box display="flex" justifyContent="flex-end">
          <Button type="submit">Submit</Button>
        </Box>
      </form>

    </Main>
  );
}

export default App;
