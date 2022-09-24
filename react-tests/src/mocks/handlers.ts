// src/mocks/handlers.js
import { rest, RequestHandler} from 'msw';

export const handlers: RequestHandler[] = [
    rest.post('/login', (req, res, ctx) => {
        const mockedLoginResponse = {
            status: 200,
            error: false,
            data: {
                name: 'John Doe',
                userName: 'john@doe.com',
                _id: 'libcv965415412'
            }
        }
        
        return res(
            ctx.json(mockedLoginResponse)
        )
    }),
]