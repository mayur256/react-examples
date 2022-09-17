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
  maritalStatus: Yup.string(),
  ageValidation: Yup.string(),
  pgFirstName: Yup.string(),
  pgLastName: Yup.string(),
  employment: Yup.string(),
  phoneNumber: Yup.number().typeError('Value should be a number'),
  email: Yup.string().email('Invalid email'),
  addr1: Yup.string(),
  addr2: Yup.string(),
  city: Yup.string(),
  state: Yup.string(),
  zipcode: Yup.string(),
  contactPreference: Yup.array().of(Yup.string()).nullable()
});

// Component definition
function App(): ReactElement {
  const { handleSubmit, control, setValue } = useForm<Inputs>({
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
      maritalStatus: '',
      ageValidation: '',
      pgFirstName: '',
      pgLastName: '',
      employment: '',
      phoneNumber: '',
      email: '',
      addr1: '',
      addr2: '',
      city: '',
      state: '',
      zipcode: '',
      contactPreference: []
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

        <PatientInfo
          control={control}
          setValue={setValue}
        />

        <Box display="flex" justifyContent="flex-end">
          <Button type="submit">Submit</Button>
        </Box>
      </form>

    </Main>
  );
}

export default App;
