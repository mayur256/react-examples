/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import Users from ".";

describe("Users", () => {
    test('It renders component', () => {
        const component = render(<Users />)
        expect(component).toBeDefined();
    })
})