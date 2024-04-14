import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from 'react-router-dom';

import App from './App';

test('It allows navigation throughout the app', async () => {
    // Arrange
    render(<App />, { wrapper: BrowserRouter });
    // Initializes an instance of UserEvent
    // with configs that simulate native browser event
    // const user = userEvent.setup();

    // Check initial state of the UI
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("title")).toHaveTextContent("Home Page");


    // Act
    act(() => userEvent.click(screen.getByText(/about/i)))

    // Assert
    await waitFor(() => {
        expect(screen.getByTestId("title")).toBeInTheDocument();
        expect(screen.getByTestId("title")).toHaveTextContent("About Page");
    })
});
