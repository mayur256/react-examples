// Top level imports
import React, { ComponentPropsWithoutRef } from "react";

// CSS Module
import classes from "./input.module.css";

/** Prop type definitons */
interface InputProps extends ComponentPropsWithoutRef<"input"> {
    type: string;
    name: string;
    id: string;
    value: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    className: string;
    placeholder: string;
}

// Component definition
export default function Input({
    type = 'text',
    name = '',
    id = '',
    value = '',
    onChange,
    placeholder = '',
}: Partial<InputProps>) {

    // JSX Code
    return (

        <input
            id={id}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={classes['input']}
        />
    )
}
