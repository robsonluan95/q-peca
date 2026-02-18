import { Request, Response, RequestHandler } from "express";
import { UpdatePartService } from "../../services/part/UpdatePartService";

class UpdatePartController {
    handle: RequestHandler = async (req, res) => {
        const { id, name, partNumber, description, categoryId } = req.body;

        const updatePartService = new UpdatePartService();

        const part = await updatePartService.execute({
            id,
            name,
            partNumber,
            description,
            categoryId,
        });

        res.json(part);
    }
}

export { UpdatePartController };
