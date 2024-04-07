/**
 * @jest-environment jsdom
 */
// top level imports
import { ReactElement, ReactNode } from "react";
import { RenderOptions, RenderResult, render, waitFor } from "@testing-library/react";

// redux
import { Provider } from "react-redux";
import { store } from "../../store";

// Mock data
import { fakePosts } from "../../utils/fake-data";

// Subject Component
import { Posts } from ".";

const StoreProvider = ({ children }: { children: ReactNode }): ReactElement => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

const customRender = (ui: ReactElement, options?: RenderOptions): RenderResult => {
    return render(ui, { wrapper: StoreProvider, ...options })
}

describe('Posts', () => {
    test('It renders the posts list', async () => {
        const { queryAllByTestId } = customRender(<Posts />)
        
        await waitFor(() => {
            expect(queryAllByTestId("post")).toHaveLength(fakePosts.length);
        })
    })
})