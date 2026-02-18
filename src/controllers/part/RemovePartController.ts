import { Request, Response, RequestHandler } from "express";
import { RemovePartService } from "../../services/part/RemovePartService";

class RemovePartController {
    handle: RequestHandler = async (req, res) => {
        const id = req.query.id as string;

        const removePartService = new RemovePartService();

        const part = await removePartService.execute({
            id,
        });

        res.json(part);
    }
}

export { RemovePartController };
