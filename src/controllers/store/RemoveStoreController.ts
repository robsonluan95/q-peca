import { Request, Response, RequestHandler } from "express";
import { RemoveStoreService } from "../../services/store/RemoveStoreService";

class RemoveStoreController {
    handle: RequestHandler = async (req, res) => {
        const id = req.query.id as string;

        const removeStoreService = new RemoveStoreService();

        const store = await removeStoreService.execute({
            id,
        });

        res.json(store);
    }
}

export { RemoveStoreController };
