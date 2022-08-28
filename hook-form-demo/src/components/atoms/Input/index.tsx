// Top level imports
import React, { ComponentPropsWithRef, Ref } from "react";

// CSS Module
import classes from "./input.module.css";

/** Prop type definitons */
interface InputProps extends ComponentPropsWithRef<"input"> {
    type: string;
    name: string;
    id: string;
    value: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    className: string;
    placeholder: string;
}

// Component definition
const Input = React.forwardRef(({
    type = 'text',
    name = '',
    id = '',
    value = '',
    onChange,
    placeholder = '',
}: Partial<InputProps>, ref: Ref<HTMLInputElement>) => {

    // JSX Code
    return (
        <input
            ref={ref}
            id={id}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={classes['input']}
        />
    )
})

export default Input;
