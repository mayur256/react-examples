/**
 * @jest-environment jsdom
 */
// top level imports
import { ReactElement, ReactNode } from "react";
import { RenderOptions, RenderResult, cleanup, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

afterEach(cleanup)

describe('Posts', () => {

    test('It renders the posts list', async () => {
        const { queryAllByTestId } = customRender(<Posts />)
        
        await waitFor(() => {
            expect(queryAllByTestId("post")).toHaveLength(fakePosts.length);
        })
    })

    test('It deletes a post', async () => {
        // Arrange
        let deleteBtn = null;
        const { queryAllByTestId } = customRender(<Posts />);

        await waitFor(() => {
            deleteBtn = queryAllByTestId("delete-post-button")[0];
        });

        // Act
        if (deleteBtn) {
            await userEvent.click(deleteBtn);

            // Assert
            await waitFor(() => {
                // one post deleted
                expect(queryAllByTestId("post")).toHaveLength(fakePosts.length - 1);
            })
        }
    })
})