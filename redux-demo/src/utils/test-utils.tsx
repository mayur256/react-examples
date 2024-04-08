/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
// top level imports
import { ReactElement, ReactNode } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";

// Redux
import { Provider } from "react-redux";
import { store } from "../store";

const StoreProvider = ({ children }: { children: ReactNode }): ReactElement => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export const customRender = (ui: ReactElement, options?: RenderOptions): RenderResult => {
    return render(ui, { wrapper: StoreProvider, ...options })
}