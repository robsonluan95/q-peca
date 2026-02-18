import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string;
    role: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        res.status(401).end();
        return;
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub, role } = verify(
            token,
            process.env.JWT_SECRET as string
        ) as Payload;

        // Recuperar o id do token e colocar dentro de uma variável user_id dentro do req.
        req.user_id = sub;
        req.user_role = role;

        return next();

    } catch (err) {
        res.status(401).end();
        return;
    }
}
