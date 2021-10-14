import * as jwt from "jsonwebtoken";
import { Request, Response } from "express";

const verifyToken = (req: Request, res: Response, next: Function) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }

    try {
        const secret = process.env.JWT_TOKEN_KEY || '';
        const decoded = jwt.verify(token, secret);
        console.log(decoded);
        req.body.user = decoded;
    } catch (err) {
        res.status(401).send("Invalid Token");
    }

    return next();
};

export {
    verifyToken
}
