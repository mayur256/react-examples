// Top level imports
import { render, screen, waitFor, fireEvent } from "@testing-library/react";

// mock server for test - used to intercept HTTP calls
import { server } from "../../mocks/tests";

// Subject  component
import Login from "./index";

// Test lifecycle hooks
// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

describe('Login Component tests', (): void => { 

    // Test case - 1
    test('Login Component is loaded', (): void => { 
        // Arrange
        // render the component in jest environment
        render(<Login />);

        // Query elements
        const loginForm = screen.getByTestId('login-form');
        const emailEl = screen.getByTestId('email');
        const passEl = screen.getByTestId('password');
        const submitBtn = screen.getByTestId('submit-btn');

        // Assertions
        expect(loginForm).toBeInTheDocument();
        expect(emailEl).toBeInTheDocument();
        expect(passEl).toBeInTheDocument();
        expect(submitBtn).toBeInTheDocument();
    });

    // Test case - 2
    test('API returns with expected component', async (): Promise<void> => {
        // Arrange
        // render the component in jest environment
        render(<Login />);

        // Query elements
        const emailEl = screen.getByTestId('email') as HTMLInputElement;
        const passEl = screen.getByTestId('password') as HTMLInputElement;
        const submitBtn = screen.getByTestId('submit-btn') as HTMLButtonElement;

        // Act
        fireEvent.change(emailEl, { target: { value: 'a@b.com' } });
        await waitFor((): void => expect(emailEl.value).toBe('a@b.com'));
        fireEvent.change(passEl, { target: { value: 'abc123' } });
        await waitFor((): void => expect(passEl.value).toBe('abc123'));

        // Submit the form
        fireEvent.click(submitBtn);

        await waitFor((): void => {
            expect(screen.getByTestId('user-details')).toBeInTheDocument();
        })
    });
});
