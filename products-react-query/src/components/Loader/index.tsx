import { ReactElement } from "react";

import { Spinner } from "flowbite-react";

export function Loader(): ReactElement {
    return (
        <div className="flex h-screen justify-center items-center">
            <Spinner className="size-12" />
        </div>
    )
}