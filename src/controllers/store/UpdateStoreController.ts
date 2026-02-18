import { Request, Response, RequestHandler } from "express";
import { UpdateStoreService } from "../../services/store/UpdateStoreService";

class UpdateStoreController {
    handle: RequestHandler = async (req, res) => {
        const { id, name, baseUrl } = req.body;

        const updateStoreService = new UpdateStoreService();

        const store = await updateStoreService.execute({
            id,
            name,
            baseUrl,
        });

        res.json(store);
    }
}

export { UpdateStoreController };
