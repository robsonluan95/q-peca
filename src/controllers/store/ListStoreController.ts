import { Request, Response, RequestHandler } from "express";
import { ListStoreService } from "../../services/store/ListStoreService";

class ListStoreController {
    handle: RequestHandler = async (req, res) => {
        const listStoreService = new ListStoreService();

        const stores = await listStoreService.execute();

        res.json(stores);
    }
}

export { ListStoreController };
