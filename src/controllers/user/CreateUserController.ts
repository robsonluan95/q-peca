import { Request, Response, RequestHandler } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    handle: RequestHandler = async (req, res) => {
        const { name, email, password, role } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name,
            email,
            password,
            role,
        });

        res.json(user);
    }
}

export { CreateUserController };
