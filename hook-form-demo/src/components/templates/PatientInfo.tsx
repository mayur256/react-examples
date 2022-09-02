// Top level  imports
// React Hook Form
import { Controller, Control } from "react-hook-form";

// Atoms / Molecules / Organisms
import Label from "../atoms/Label";
import Input from "../atoms/Input";

//Custom Components
import Section from "../semantic/Section";
import Grid from "../layouts/Grid";
import Box from "../layouts/Box";
import Accordion from "../semantic/Accordion";

// global type definitions
import { Inputs } from "../types";

// Props type definitions
interface IProps {
    control: Control<Inputs>;
}

// Component definition
export const PatientInfo = ({ control }: IProps) => {
    // Main JSX
    return (
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
                                    name="pFirstName"
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
                                    name="pLastName"
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
    );
}
