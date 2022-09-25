// src/mocks/handlers.js
import { rest, RequestHandler} from 'msw';

// mocked payloads
import { loginPayload } from './http-payload';

export const handlers: RequestHandler[] = [
    rest.post('/login', (req, res, ctx) => {
        const mockedLoginResponse = {
            status: 200,
            error: false,
            data: loginPayload
        }
        
        return res(
            ctx.json(mockedLoginResponse)
        )
    }),
]