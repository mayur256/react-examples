/**
 * @jest-environment jsdom
 */

// top level imports
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Test Utils
import { customRender } from "../../utils/test-utils";

// Subject component
import { AppLinks } from "../../App";


describe('Routing', () => {

    test('It renders the root page with router links', async () => {
        // Arrange
        const user = userEvent.setup();
        const { getByText } = customRender(<AppLinks />);

        const link1 = getByText(/Component 1/);
        const link2 = getByText(/Component 2/);

        expect(link1).toBeInTheDocument();
        expect(link2).toBeInTheDocument();

        user.click(link1);

        await waitFor(() => {
            expect(link1).toBeInTheDocument();
            screen.debug();
        })
    });

})