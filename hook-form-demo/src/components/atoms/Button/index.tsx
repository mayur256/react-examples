// Top level imports
import { ComponentProps, ReactElement, ReactNode } from "react"

// Props type definitions
interface IProps extends ComponentProps<"button"> {
    children: ReactNode;
};
// Component definition
const Button = ({
    children,
    ...rest
}: IProps): ReactElement => {
    return (
        <button
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
