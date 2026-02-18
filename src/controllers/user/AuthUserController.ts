import { Request, Response, RequestHandler } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController {
    handle: RequestHandler = async (req, res) => {
        const { email, password } = req.body;

        const authUserService = new AuthUserService();

        const auth = await authUserService.execute({
            email,
            password
        });

        res.json(auth);
    }
}

export { AuthUserController };
