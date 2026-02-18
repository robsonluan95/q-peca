import { Request, Response, RequestHandler } from "express";
import { CreateStoreService } from "../../services/store/CreateStoreService";

class CreateStoreController {
    handle: RequestHandler = async (req, res) => {
        const { name, baseUrl } = req.body;

        const createStoreService = new CreateStoreService();

        const store = await createStoreService.execute({
            name,
            baseUrl,
        });

        res.json(store);
    }
}

export { CreateStoreController };
