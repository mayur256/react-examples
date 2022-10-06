// Top level imports
import { ReactElement } from "react";

// Signature Canvas
import SignatureCanvas from "react-signature-canvas";

// React Hook Form
import { Controller, Control, UseFormSetValue } from "react-hook-form";

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
    setValue: UseFormSetValue<Inputs>
}

// Component definition
export default function Agreement({ control, setValue }: IProps): ReactElement {
    return (
        <Section id="agreement">
            <Accordion title="Agreement">
                <Box>
                    <Grid>
                        <Controller
                            name="agreeTerms"
                            control={control}
                            render={({ field }) => {
                                return (
                                    <Box>
                                        <Input
                                            {...field}
                                            type="checkbox"
                                            value="agreeTerms"
                                        />
                                        <Label text="I agree to terms and conditions" />
                                    </Box>
                                );
                            }}
                        />
                    </Grid>
                </Box>

                <Box>
                    <Box> <Label text="Date" /> </Box>
                    <Grid>
                        <Box>
                            <Controller
                                name="agreementDate"
                                control={control}
                                render={({ field }) => {
                                    return <Input {...field} type="date" />;
                                }}
                            />
                        </Box>
                    </Grid>
                </Box>

                <Box>
                    <SignatureCanvas
                        canvasProps={{
                            width: 500,
                            height: 200,
                            className: 'sigCanvas'
                        }}
                    />
                </Box>
            </Accordion> 
        </Section>
    );
}