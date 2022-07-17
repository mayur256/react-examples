// Top level imports
import { ReactElement } from "react";

// Routing Component
import AppRouter from "./routing/AppRouter";

// App layout
import LayoutContainer from "./pages/LayoutContainer";

// Main Component definition
export default function App(): ReactElement {
  // Main JSX
  return (
    <AppRouter>
      <LayoutContainer />
    </AppRouter>
  )
}
