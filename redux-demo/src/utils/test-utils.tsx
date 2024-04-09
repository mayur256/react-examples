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

// React router
import { MemoryRouter } from 'react-router-dom';

const AppProviders = ({ children }: { children: ReactNode }): ReactElement => {
    return (
        <MemoryRouter initialEntries={['/']}>
            <Provider store={store}>
                {children}
            </Provider>
        </MemoryRouter>
    )
}

export const customRender = (ui: ReactElement, options?: RenderOptions): RenderResult => {
    return render(ui, { wrapper: AppProviders, ...options })
}