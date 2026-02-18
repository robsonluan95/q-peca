import { Request, Response, NextFunction } from "express";

export function isAdmin(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const userRole = req.user_role;

    if (userRole !== "ADMIN") {
        res.status(403).json({ error: "Não autorizado. Apenas administradores podem realizar esta ação." });
        return;
    }

    return next();
}
