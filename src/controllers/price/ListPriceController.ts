import { Request, Response, RequestHandler } from "express";
import { ListPriceService } from "../../services/price/ListPriceService";

class ListPriceController {
    handle: RequestHandler = async (req, res) => {
        const listPriceService = new ListPriceService();

        const prices = await listPriceService.execute();

        res.json(prices);
    }
}

export { ListPriceController };
