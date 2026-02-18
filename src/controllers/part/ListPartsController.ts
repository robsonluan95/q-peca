import { Request, Response, RequestHandler } from "express";
import { ListPartsService } from "../../services/part/ListPartsService";

class ListPartsController {
    handle: RequestHandler = async (req, res) => {
        const query = req.query.q as string;
        const listPartsService = new ListPartsService();

        const parts = await listPartsService.execute({
            query,
        });

        res.json(parts);
    }
}

export { ListPartsController };
