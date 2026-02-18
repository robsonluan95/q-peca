import { Request, Response, RequestHandler } from "express";
import { CreatePartService } from "../../services/part/CreatePartService";

class CreatePartController {
    handle: RequestHandler = async (req, res) => {
        const { name, partNumber, description, categoryId } = req.body;

        const createPartService = new CreatePartService();

        const part = await createPartService.execute({
            name,
            partNumber,
            description,
            categoryId,
        });

        res.json(part);
    }
}

export { CreatePartController };
