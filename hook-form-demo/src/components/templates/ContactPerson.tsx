// Top level imports
import { ReactElement } from "react";

// React Hook Form
import { Controller, Control } from "react-hook-form";

// Atoms / Molecules / Organisms
import Label from "../atoms/Label";
import Input from "../atoms/Input";

//Custom Components
import Section from "../semantic/Section";
import Accordion from "../semantic/Accordion";
import Grid from "../layouts/Grid";
import Box from "../layouts/Box";

// global type definitions
import { Inputs } from "../types";

// Props type definitions
interface IProps {
    control: Control<Inputs>;
}

// Component definition
export default function ContactPerson({ control }: IProps): ReactElement {
    return (
        <Section id="next-of-kin">
            <Accordion title="Next of kin / Contact Person">
                <Grid>
                    <Box>
                        <Box>
                            <Label text="Name" />
                        </Box>
                        <Box display="flex">
                            {/**First Name */}
                            <Controller
                                name="kinFirstName"
                                control={control}
                                render={({ field, formState: { errors } }) => {
                                    return (
                                        <Box>
                                            <Input {...field} placeholder="First Name" />
                                            {errors.kinFirstName && (
                                                <Box noMargin noPadding error>{errors.kinFirstName?.message}</Box>
                                            )}
                                        </Box>
                                    );
                                }}
                            />

                            {/** Last name */}
                            <Controller
                                name="kinLastName"
                                control={control}
                                render={({ field, formState: { errors } }) => {
                                    return (
                                        <Box>
                                            <Input {...field} placeholder="Last Name" />
                                            {errors.kinLastName && (
                                                <Box noMargin noPadding error>{errors.kinLastName?.message}</Box>
                                            )}
                                        </Box>
                                    );
                                }}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Box><Label text="Relationship to patient" /></Box>
                        <Controller
                            name="relationToPatient"
                            control={control}
                            render={({ field }) => {
                                return <Input {...field} placeholder="Mother, Father, Son, Daughter, etc" />;
                            }}
                        />
                    </Box>
                </Grid>

                {/** Email & Phone number */}
                <Grid>
                    {/** Email */}
                    <Box>
                        <Label text="Email" />
                        <Controller
                            name="kinEmail"
                            control={control}
                            render={({ field, formState: { errors } }) => {
                                return (
                                    <Box>
                                        <Input {...field} placeholder="example@example.com" />
                                        {errors.kinEmail && (
                                            <Box noMargin noPadding error>{errors.kinEmail?.message}</Box>
                                        )}
                                    </Box>
                                );
                            }}
                        />
                    </Box>

                    {/** Phone number */}
                    <Box>
                        <Label text="Phone Number" />
                        <Controller
                            name="kinNumber"
                            control={control}
                            render={({ field, formState: { errors } }) => {
                                return (
                                    <Box>
                                        <Input {...field} placeholder="(000) 000-0000" />
                                        {errors.kinNumber && (
                                            <Box noMargin noPadding error>{errors.kinNumber?.message}</Box>
                                        )}
                                    </Box>
                                );
                            }}
                        />
                    </Box>
                </Grid>
                
                {/** Address fields */}
                <Box>
                    <Label text="Address" />

                    {/** Address 1 */}
                    <Controller
                        name="kinAddr1"
                        control={control}
                        render={({ field, formState: { errors } }) => {
                            return (
                                <Box>
                                    <Input {...field} placeholder="Address 1" />
                                    {errors.kinAddr1 && (
                                        <Box noMargin noPadding error>{errors.kinAddr1?.message}</Box>
                                    )}
                                </Box>
                            );
                        }}
                    />

                    {/** Address 2 */}
                    <Controller
                        name="kinAddr2"
                        control={control}
                        render={({ field, formState: { errors } }) => {
                            return (
                                <Box>
                                    <Input {...field} placeholder="Address 2" />
                                    {errors.kinAddr2 && (
                                        <Box noMargin noPadding error>{errors.kinAddr2?.message}</Box>
                                    )}
                                </Box>
                            );
                        }}
                    />

                    <Grid>
                        {/** City */}
                        <Controller
                            name="kinCity"
                            control={control}
                            render={({ field, formState: { errors } }) => {
                                return (
                                    <Box>
                                        <Input {...field} placeholder="City" />
                                        {errors.kinCity && (
                                            <Box noMargin noPadding error>{errors.kinCity?.message}</Box>
                                        )}
                                    </Box>
                                );
                            }}
                        />

                        {/** State / Province */}
                        <Controller
                            name="kinProvince"
                            control={control}
                            render={({ field, formState: { errors } }) => {
                                return (
                                    <Box>
                                        <Input {...field} placeholder="State / Province" />
                                        {errors.kinProvince && (
                                            <Box noMargin noPadding error>{errors.kinProvince?.message}</Box>
                                        )}
                                    </Box>
                                );
                            }}
                        />
                    </Grid>

                    {/** Postal / Zipcode */}
                    <Controller
                        name="kinZipcode"
                        control={control}
                        render={({ field, formState: { errors } }) => {
                            return (
                                <Box>
                                    <Input {...field} placeholder="Postal / Zipcode" />
                                    {errors.kinZipcode && (
                                        <Box noMargin noPadding error>{errors.kinZipcode?.message}</Box>
                                    )}
                                </Box>
                            );
                        }}
                    />

                </Box>
            </Accordion>
        </Section>
    );
};
