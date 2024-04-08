/**
 * @jest-environment jsdom
*/
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";
import { customRender } from "../../utils/test-utils"

// Subject component
import { FileUpload } from "./index";

describe('Fileupload', (): void => {

    test('It renders the file input element', () => {
        const { getByTestId } = customRender(<FileUpload />);

        expect(getByTestId("file-input")).toBeInTheDocument();
    });

    test('It allows us to select a file for upload', async () => {
        const user = userEvent.setup();

        const { getByTestId } = customRender(<FileUpload />);

        const fileEl = getByTestId("file-input") as HTMLInputElement;

        const file = new File(['Hello'], 'Hello.txt', { type: 'text/plain' })

        user.upload(fileEl, file);

        await waitFor(() => {
            expect(fileEl.files).toHaveLength(1);
        })

    })
})