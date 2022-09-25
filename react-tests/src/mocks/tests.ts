import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// mock server to intercept API calls in test env
export const server = setupServer(...handlers);
