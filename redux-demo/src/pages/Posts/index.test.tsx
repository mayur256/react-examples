/**
 * @jest-environment jsdom
 */
// top level imports
import { cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Mock data
import { fakePosts } from "../../utils/fake-data";

// Test Utils
import { customRender } from "../../utils/test-utils";

// Subject Component
import { Posts } from ".";


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