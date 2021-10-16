import jwt from "express-jwt";
import { Request, Response } from "express";

const verifyToken = jwt({
    secret: process.env.JWT_TOKEN_KEY || '',
    algorithms: ['HS256']
});

const handleAuthError = function (err: Error, req: Request, res: Response, next: Function) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('invalid token...');
    }
}

export {
    verifyToken,
    handleAuthError
}
