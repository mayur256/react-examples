import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('Routing', () => {
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

    test('Invalid route navigation with BrowserRouter', async () => {
        // Arrange
        render(<App />, { wrapper: BrowserRouter });        

        // Act
        act(() => userEvent.click(screen.getByText(/no match route/i)))

        // Assert
        await waitFor(() => {
            expect(screen.getByText(/error no route path matched/i)).toBeInTheDocument();
        })
    })

    test('Valid route navigation with MemoryRouter', async () => {
        const validRoutes = ['/profile', '/']
        // Arrange
        render(
            <MemoryRouter initialEntries={validRoutes}>
                <App />
            </MemoryRouter>
        );

        // Check initial state of the UI
        expect(screen.getByTestId("title")).toBeInTheDocument();
        expect(screen.getByTestId("title")).toHaveTextContent("Home Page");

        // Act
        act(() => userEvent.click(screen.getByText(/profile/i)));

        await waitFor(() => {
            expect(screen.getByText(/my profile/i)).toBeInTheDocument();
        })
    })

    test('Invalid route navigation with MemoryRouter', async () => {
        // Arrange
        render(
            <MemoryRouter initialEntries={['/no-match-route']}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByText(/error no route path matched/i)).toBeInTheDocument();
    })

    test('useLocation testing with MemoryRouter', async () => {
        // Arrange
        render(
            <MemoryRouter initialEntries={['/location-details']}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByTestId('key')).toBeInTheDocument();
        expect(screen.getByTestId('pathname')).toBeInTheDocument();
    })
})

