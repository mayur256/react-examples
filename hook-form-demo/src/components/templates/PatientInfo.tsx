// Top level  imports
import { FormEvent, ReactElement } from "react";

// React Hook Form
import { Controller, Control, UseFormSetValue } from "react-hook-form";

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
    setValue: UseFormSetValue<Inputs>
}

// Component definition
export const PatientInfo = ({ control, setValue }: IProps): ReactElement => {
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

                {/** Gender Row */}
                <Box>
                    <Box> <Label text="Gender" /> </Box>
                    <Box display="flex" justifyContent="space-between" style={{ width: '70%' }}>
                        {['Male', 'Female', 'Other'].map((inputLbl) => (
                            <Controller
                                key={inputLbl}
                                name="gender"
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <Box>
                                            <Input {...field} type="radio" value={inputLbl.toLowerCase()} />
                                            <Label text={inputLbl} />
                                        </Box>
                                    );
                                }}
                            />   
                        ))}
                    </Box>
                </Box>

                {/** Marital Status */}
                <Box>
                    <Box> <Label text="Marital Status" /> </Box>
                    <Box display="flex" justifyContent="space-between" style={{ width: '70%' }}>
                        {['Single', 'Married', 'Divorced', 'Widowed', 'Separated', 'Other'].map((inputLbl) => (
                            <Controller
                                key={inputLbl}
                                name="maritalStatus"
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <Box>
                                            <Input {...field} type="radio" value={inputLbl.toLowerCase()} />
                                            <Label text={inputLbl} />
                                        </Box>
                                    );
                                }}
                            />
                        ))}
                    </Box>
                </Box>

                {/** Age validation */}
                <Box>
                    <Box> <Label text="The patient under the age of 18 years?" /> </Box>
                    <Box display="flex" justifyContent="space-between" style={{ width: '70%' }}>
                        {['Yes', 'No'].map((inputLbl) => (
                            <Controller
                                key={inputLbl}
                                name="ageValidation"
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <Box>
                                            <Input {...field} type="radio" value={inputLbl.toLowerCase()} />
                                            <Label text={inputLbl} />
                                        </Box>
                                    );
                                }}
                            />
                        ))}
                    </Box>
                </Box>
                
                {/** Parent / Guardian Name */}
                <Box>
                    <Box> <Label text="Parent/Guardian Name" /> </Box>
                    <Grid>
                        {/**First Name */}
                        <Controller
                            name="pgFirstName"
                            control={control}
                            render={({ field, formState: { errors } }) => {
                                return (
                                    <Box>
                                        <Input {...field} placeholder="First Name" />
                                        {errors.pgFirstName && (
                                            <Box noMargin noPadding error>{errors.pgFirstName?.message}</Box>
                                        )}
                                    </Box>
                                );
                            }}
                        />

                        {/** Last Name */}
                        <Controller
                            name="pgLastName"
                            control={control}
                            render={({ field, formState: { errors } }) => {
                                return (
                                    <Box>
                                        <Input {...field} placeholder="Last Name" />
                                        {errors.pgLastName && (
                                            <Box noMargin noPadding error>{errors.pgLastName?.message}</Box>
                                        )}
                                    </Box>
                                );
                            }}
                        />
                    </Grid>
                </Box>

                {/** Employment Status */}
                <Box>
                    <Box> <Label text="Employment Status of patient (or parent if patient is under 18)" /> </Box>
                    <Box display="flex" justifyContent="space-between" style={{ width: '70%' }}>
                        {['Employed', 'Unemployed', 'Retired', 'Other'].map((inputLbl) => (
                            <Controller
                                key={inputLbl}
                                name="employment"
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <Box>
                                            <Input {...field} type="radio" value={inputLbl.toLowerCase()} />
                                            <Label text={inputLbl} />
                                        </Box>
                                    );
                                }}
                            />
                        ))}
                    </Box>
                </Box>

                <Grid>
                    {/** Phone number */}
                    <Box>
                        <Label text="Phone Number" />
                        <Controller
                            name="phoneNumber"
                            control={control}
                            render={({ field, formState: { errors } }) => {
                                return (
                                    <Box>
                                        <Input {...field} placeholder="(000) 000-0000" />
                                        {errors.phoneNumber && (
                                            <Box noMargin noPadding error>{errors.phoneNumber?.message}</Box>
                                        )}
                                    </Box>
                                );
                            }}
                        />
                    </Box>

                    {/** Email */}
                    <Box>
                        <Label text="Email" />
                        <Controller
                            name="email"
                            control={control}
                            render={({ field, formState: { errors } }) => {
                                return (
                                    <Box>
                                        <Input {...field} placeholder="a@b.com" />
                                        {errors.email && (
                                            <Box noMargin noPadding error>{errors.email?.message}</Box>
                                        )}
                                    </Box>
                                );
                            }}
                        />
                    </Box>
                </Grid>

                <Box>
                    <Label text="Address" />
                    
                    {/** Address 1 */}
                    <Controller
                        name="addr1"
                        control={control}
                        render={({ field, formState: { errors } }) => {
                            return (
                                <Box>
                                    <Input {...field} placeholder="Address 1" />
                                    {errors.addr1 && (
                                        <Box noMargin noPadding error>{errors.addr1?.message}</Box>
                                    )}
                                </Box>
                            );
                        }}
                    />

                    {/** Address 2 */}
                    <Controller
                        name="addr2"
                        control={control}
                        render={({ field, formState: { errors } }) => {
                            return (
                                <Box>
                                    <Input {...field} placeholder="Address 2" />
                                    {errors.addr2 && (
                                        <Box noMargin noPadding error>{errors.addr2?.message}</Box>
                                    )}
                                </Box>
                            );
                        }}
                    />

                    <Grid>
                        {/** City */}
                        <Controller
                            name="city"
                            control={control}
                            render={({ field, formState: { errors } }) => {
                                return (
                                    <Box>
                                        <Input {...field} placeholder="City" />
                                        {errors.city && (
                                            <Box noMargin noPadding error>{errors.city?.message}</Box>
                                        )}
                                    </Box>
                                );
                            }}
                        />

                        {/** State / Province */}
                        <Controller
                            name="state"
                            control={control}
                            render={({ field, formState: { errors } }) => {
                                return (
                                    <Box>
                                        <Input {...field} placeholder="State / Province" />
                                        {errors.state && (
                                            <Box noMargin noPadding error>{errors.state?.message}</Box>
                                        )}
                                    </Box>
                                );
                            }}
                        />
                    </Grid>

                    {/** Postal / Zipcode */}
                    <Controller
                        name="zipcode"
                        control={control}
                        render={({ field, formState: { errors } }) => {
                            return (
                                <Box>
                                    <Input {...field} placeholder="Postal / Zipcode" />
                                    {errors.state && (
                                        <Box noMargin noPadding error>{errors.zipcode?.message}</Box>
                                    )}
                                </Box>
                            );
                        }}
                    />

                </Box>
                
                <Box>
                    <Label text="Which one(s) do you prefer to be contacted by?" />
                    <Grid>
                        {["Phone", "Email", "Post", "SMS", "Other"].map((inputLbl) => (
                            <Controller
                                name="contactPreference"
                                key={inputLbl}
                                control={control}
                                render={({ field }) => {
                                    const handleChange = (event: FormEvent<HTMLInputElement>) => {
                                        const targetEl = event.target as HTMLInputElement;
                                        const { checked, value } = targetEl;
                                        let contactValues = field.value;
                                        if (checked) {
                                            contactValues = [...new Set([...field.value, value])];
                                            setValue('contactPreference', contactValues);
                                        } else {
                                            contactValues = contactValues.filter((val: string): boolean => val !== value);
                                        }
                                    }

                                    return (
                                        <Box>
                                            <Input
                                                {...field}
                                                type="checkbox"
                                                value={inputLbl.toLowerCase()}
                                                onChange={handleChange}
                                            />
                                            <Label text={inputLbl} />
                                        </Box>
                                    );
                                }}
                            />
                        ))}
                    </Grid>
                </Box>
            </Accordion>
        </Section>
    );
}
