// Top level imports
import { ReactElement } from "react";

// RHK
// React Hook Form
import { Controller, useForm, useFieldArray } from "react-hook-form";

// Atoms / Molecules / Organisms
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";

// CSS modules
import styles from "./style.module.css";

type FormValues = {
    user: {
        firstName: string,
        lastName: string
    }[]
}

// Component definition
export default function DynamicForm(): ReactElement {
    // hooks
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            user: [{ firstName: 'John', lastName: 'Doe' }]
        }
    });

    const { fields, append, remove } = useFieldArray({
        name: 'user',
        control
    })
    
    // main renderer
    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            {fields.map((field, index) => (
                <div className={styles["form-row"]} key={field.id}>
                    <div>
                        <Controller
                            name={`user.${index}.firstName`}
                            control={control}
                            render={({ field }) => (
                                <Input placeholder="First Name" {...field} />
                            )}
                            rules={{ required: 'First Name is Required!' }}
                        />
                        <span className="text-danger">{errors.user?.[index]?.firstName?.message}</span>
                    </div>
                    <div>
                        <Controller
                            name={`user.${index}.lastName`}
                            control={control}
                            render={({ field }) => (
                                <Input placeholder="Last Name" {...field} />
                            )}
                        />
                    </div>
                    <div>
                        <Button onClick={() => remove(index)}>Delete</Button>

                        {index === fields.length - 1 && (
                            <Button onClick={() => append({ firstName: '', lastName: '' })}>Add</Button>
                        )}
                    </div>
                </div>
            ))}

            <Button type="submit">Submit</Button>
        </form>
    )
}
