// top level imports
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

// Subject component
import AppContainer from "./index";

// Test suite
describe('Navigation tests for a component', (): void => { 
    // Test case - 1
    test('Links in a  navbar are rendered', async (): Promise<void> => {
        // Arrange
        // Render the component
        render(
            <MemoryRouter>
                <AppContainer />
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
        expect(screen.getAllByTestId('navlinks')).toHaveLength(2);
        
        const anchorElements: HTMLAnchorElement[] = screen.getAllByTestId('navlinks');
        const links = anchorElements.map((anchorEl: HTMLAnchorElement) => anchorEl.href.split('/').at(-1));
        expect(links).toEqual(expect.arrayContaining(['app', 'contact']));
    });

    // Test case - 2
    test('Navigation within the app', async(): Promise<void> => {
        // Arrange
        // Render the component
        render(<AppContainer />, { wrapper: BrowserRouter });
        
        // index route rendered
        const homePage = screen.getByTestId('page-home');
        expect(homePage).toBeInTheDocument();

        // Act
        const contactLink = screen.getAllByTestId('navlinks')[1];
        fireEvent.click(contactLink);

        // check if the rendered component changes to Contact
        await waitFor((): void => {
            const contactPage = screen.getByTestId('page-contact');
            expect(contactPage).toBeInTheDocument();
        })
        // eslint-disable-next-line testing-library/no-debugging-utils
        //screen.debug();
    });
});
